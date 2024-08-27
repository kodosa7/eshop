import { useState, useEffect } from "react";
import Header from "./Header";
import Product from "./Product";
import Cart from "./Cart";
import Categories from "./Categories";
import Search from "./Search";
import beautifyCategoryName from "../utils/utils.js";

export const Shop = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isOrderSent, setIsOrderSent] = useState(false);
    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
    const [isProductsLoading, setIsProductsLoading] = useState(false);
    const [searchedValue, setSearchedValue] = useState("");
    const [searchInputValue, setSearchInputValue] = useState("");
    const [isFetchProductError, setIsFetchProductError] = useState(false);
    const [isFetchCategoriesError, setIsFetchCategoriesError] = useState(false);

    // Fetch categories from API on component mount
    useEffect(() => {
        fetchCategories();
    }, []);

    // Fetch products from API on component mount
    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            await null;
            if (!ignore) {
                fetchProducts();
            }
        }
        startFetching();

        return () => {
            ignore = true;
        };
    }, [searchedValue, category]);

    // Function to fetch products from API
    const fetchProducts = () => {
        let fetchUrl = "";
        const skip = products.length;
        if (!category && searchedValue === "") {
            fetchUrl = `https://dummyjson.com/products?skip=${skip}&limit=8`;
        } else if (category && searchedValue === "") {
            fetchUrl = `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=8`;
        } else {
            fetchUrl = `https://dummyjson.com/products/search?q=${searchedValue}&skip=${skip}&limit=8`;
        }

        setIsProductsLoading(true);
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setTotalCount(data.total);
                const productsWithDiscountPrice = data.products.map((product) => {
                    const discountPrice = Math.round(
                        product.price - (product.discountPercentage * product.price) / 100
                    );
                    return { ...product, discountPrice };
                });
                setProducts((prev) => [...prev, ...productsWithDiscountPrice]);
                setIsProductsLoading(false);
            })
            .catch(() => {
                setIsFetchProductError(true);
            });
    };

    // Function to fetch categories from API
    const fetchCategories = () => {
        setIsCategoriesLoading(true);
        fetch(`https://dummyjson.com/products/categories/`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setIsCategoriesLoading(false);
            })
            .catch(() => {
                setIsFetchCategoriesError(true);
            });
    };

    // Handle category selection
    const handleSelectCategory = (newCategory) => {
        setSearchedValue("");
        setSearchInputValue("");
        if (category !== newCategory) {
            setCategory(newCategory);
            setProducts([]);
        }
    };

    // Insert product to cart
    const handleAddToCartBtn = (product) => {
        if (selectedProducts.some((prod) => prod.id === product.id)) {
            onIncreaseQuantity(product.id);
        } else {
            setSelectedProducts([...selectedProducts, { ...product, quantity: 1, totalPrice: product.discountPrice }]);
        }
        setIsOrderSent(false);
    };

    // Remove product from cart
    const handleRemoveFromCart = (id) => {
        const updatedProducts = selectedProducts.filter((prod) => prod.id !== id);
        setSelectedProducts(updatedProducts);
        setIsOrderSent(false);
    };

    // Increase quantity of a product in the cart
    const onIncreaseQuantity = (id) => {
        const newCart = selectedProducts.map((product) => {
            if (product.id === id) {
                if (product.quantity === "") {
                    return {
                        ...product,
                        quantity: 1,
                        totalPrice: product.discountPrice,
                    };
                } else {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                        totalPrice: product.discountPrice * (product.quantity + 1),
                    };
                }
            } else {
                return product;
            }
        });
        setSelectedProducts(newCart);
    };

    // Decrease quantity of a product in the cart
    const onDecreaseQuantity = (id) => {
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

    // Change quantity by typing a new number
    const onQuantityChange = (event, id) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
            const updatedProducts = selectedProducts.map((product) =>
                product.id === id
                    ? { ...product, quantity: newQuantity, totalPrice: product.discountPrice * newQuantity }
                    : product
            );
            setSelectedProducts(updatedProducts);
        } else if (event.target.value === "") {
            const updatedProducts = selectedProducts.map((product) =>
                product.id === id ? { ...product, quantity: "", totalPrice: product.discountPrice } : product
            );
            setSelectedProducts(updatedProducts);
        } else {
            const updatedProducts = selectedProducts.map((product) =>
                product.id === id ? { ...product, quantity: 1, totalPrice: product.discountPrice } : product
            );
            setSelectedProducts(updatedProducts);
        }
    };

    // Remove product from cart
    const onRemoveFromCart = (id) => {
        const updatedProducts = selectedProducts.filter((prod) => prod.id !== id);
        setSelectedProducts(updatedProducts);
        handleRemoveFromCart(id);
    };

    // Search button actions
    const handleSearch = (value) => {
        setCategory("");
        setSearchedValue(value);
        setProducts([]);
        setSearchInputValue("");
    };

    // Search form submit actions
    const onSubmitSearchForm = (event) => {
        event.preventDefault();
        handleSearch(searchInputValue);
    };

    return (
        <>
            <Header 
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                onSubmitSearchForm={onSubmitSearchForm}
            />
            <Cart
                productsInCart={selectedProducts}
                setProductsInCart={setSelectedProducts}
                onIncrease={handleAddToCartBtn}
                onDecrease={onDecreaseQuantity}
                onRemove={onRemoveFromCart}
                onQuantityChange={onQuantityChange}
                handleRemoveFromCartBtn={handleRemoveFromCart}
                isOrderSent={isOrderSent}
                setIsOrderSent={setIsOrderSent}
            />

            <div className="row">
                <div className="col-3">
                    {isFetchCategoriesError ? (
                        <p>No categories found, no internet?</p>
                    ) : (
                        <Categories
                            categories={categories}
                            category={category}
                            handleSelectCategory={handleSelectCategory}
                            isLoadingMessage={isCategoriesLoading}
                        />
                    )}
                    {isCategoriesLoading && !isFetchCategoriesError && <p>Loading categories...</p>}
                </div>

                <div className="col">
                    {searchedValue === "" ? (
                        !category ? (
                            <h2>All products</h2>
                        ) : (
                            <h2>{beautifyCategoryName(category)}</h2>
                        )
                    ) : (
                        <h2>Search results</h2>
                    )}

                    {isFetchProductError ? (
                        <p>No products found, no internet?</p>
                    ) : isProductsLoading ? (
                        <p>Loading products...</p>
                    ) : products.length !== 0 ? (
                        <div className="row row-gap-4">
                            {products.map((prod) => (
                                <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                                    <Product product={prod} onAddToCartBtn={() => handleAddToCartBtn(prod)} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        !isProductsLoading && <p>There are no such products :-(</p>
                    )}

                    {products.length < totalCount && !isProductsLoading && (
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
