import { useState, useEffect } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Categories from "./Categories";
import Search from "./Search";

export const Shop = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showOrderSent, setShowOrderSent] = useState(false);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    // fetch data from API (first time)
    useEffect(() => {
        fetchCategories();
    }, []);

    // fetch data from API (first time and everytime 'category' state changes)
    useEffect(() => {
        fetchProducts();
    }, [searchValue, category]);

    // fetch products API
    const fetchProducts = () => {
        let fetchUrl = "";
        const skip = products.length;
        if (!category && searchValue === "") {
            fetchUrl = `https://dummyjson.com/products?skip=${skip}&limit=8`;
        } else if (category && searchValue === "") {
            fetchUrl = `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=2`;
        } else if (searchValue !== "") {
            fetchUrl = `https://dummyjson.com/products/search?q=${searchValue}&skip=${skip}&limit=8`;
        }

        setIsLoading(true);
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setTotal(data.total);
                // calculate product discount price and put it to fetched data object
                const productsWithDiscountPrice = data.products.map((product) => {
                    const discountPrice = Math.round(
                        product.price - (product.discountPercentage * product.price) / 100
                    );
                    return { ...product, discountPrice };
                });
                setProducts((prev) => [...prev, ...productsWithDiscountPrice]);
                setIsLoading(false);
            });
    };

    // fetch all categories API
    const fetchCategories = () => {
        setIsLoading(true);
        fetch(`https://dummyjson.com/products/categories/`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setIsLoading(false);
            });
    };

    const handleSearch = (value) => {
        setCategory("");
        setSearchValue(value);
        setProducts([]);
    };

    const handleSelectCategory = (newCategory) => {
        setSearchValue("");
        setInputValue("");
        if (category !== newCategory) {
            setCategory(newCategory);
            setProducts([]);
        }
    };

    // Insert product to cart (Add to cart button pressed)
    const handleAddToCart = (product) => {
        if (selectedProducts.some((prod) => prod.id === product.id)) {
            increaseQuantity(product.id);
        } else {
            setSelectedProducts([...selectedProducts, { ...product, quantity: 1, totalPrice: product.discountPrice }]);
        }
        // hide "order was sent" green element
        setShowOrderSent(false);
    };

    // Remove from cart button pressed
    const handleRemoveFromCart = (product) => {
        const updatedProducts = selectedProducts.filter((prod) => prod.id !== product.id);
        setSelectedProducts(updatedProducts);
        // hide "order was sent" green element
        setShowOrderSent(false);
    };

    // increase quantity (+)
    const increaseQuantity = (id) => {
        const newCart = selectedProducts.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1,
                    totalPrice: product.discountPrice * (product.quantity + 1),
                };
            } else {
                return product;
            }
        });
        setSelectedProducts(newCart);
    };

    // increase quantity (-)
    const decreaseQuantity = (id) => {
        const newCart = selectedProducts.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity - 1,
                    totalPrice: product.discountPrice * (product.quantity - 1),
                };
            } else {
                return product;
            }
        });
        setSelectedProducts(newCart);
    };

    return (
        <>
            <h1>E-shop</h1>
            {/* Cart */}
            <Cart
                selectedProducts={selectedProducts}
                setSelectedProducts={setSelectedProducts}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
                disabledButtons={disabledButtons}
                setDisabledButtons={setDisabledButtons}
                showOrderSent={showOrderSent}
                setShowOrderSent={setShowOrderSent}
                decreaseQuantity={decreaseQuantity}
            />
            {/* Search */}
            <Search
                handleSearch={handleSearch}
                searchValue={searchValue}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />

            <div className="row">
                <div className="col-3">
                    {/* Categories */}
                    <Categories
                        categories={categories}
                        category={category}
                        handleSelectCategory={handleSelectCategory}
                    />
                    {isLoading && <p>Loading categories...</p>}
                </div>

                <div className="col">
                    {searchValue === "" ? (
                        !category ? (
                            <h2>All products</h2>
                        ) : (
                            <h2>
                                {category
                                    .split("-")
                                    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    .join(" ")}
                            </h2>
                        )
                    ) : (
                        <h2>Search results</h2>
                    )}

                    {products.length !== 0 ? (
                        <div className="row row-gap-4">
                            {products.map((prod, index) => (
                                <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                                    <Product
                                        product={prod}
                                        productId={prod.id}
                                        index={index}
                                        name={prod.title}
                                        image={prod.thumbnail}
                                        description={prod.description}
                                        price={prod.price}
                                        discountPrice={prod.discountPrice}
                                        rating={prod.rating}
                                        handleAddToCart={() => handleAddToCart(prod)}
                                        disabledButtons={disabledButtons}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        !isLoading && <p>No products found</p>
                    )}
                    {isLoading && <p>Loading products...</p>}
                    {products.length < total && !isLoading && (
                        <div className="row">
                            <button className="btn btn-primary my-4" onClick={() => fetchProducts()}>
                                Load next items
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Shop;
