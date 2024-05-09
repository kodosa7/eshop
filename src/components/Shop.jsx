import { useState, useEffect } from "react";
import Item from "./Shop/Item";
import Cart from "./Shop/Cart";
import Categories from "./Shop/Categories";
import Search from "./Shop/Search";

export const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
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

    // load and show next items on "Show next items" button click
    const showNextItems = () => {
        fetchProducts();
    };

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
                // calculate product discount price and put it to data
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
        console.log("Value from handleOnChange in handleSearch:", value);
        setProducts([]);
        setCategory("");
        setSearchValue(value);
    };

    const handleSelectCategory = (category) => {
        setSearchValue("");
        setInputValue("");
        setProducts([]);
        setCategory(category);
    };

    // Insert item to cart (Add to cart button pressed)
    const handleAddToCart = (item) => {
        if (selectedItems.some((prod) => prod.id === item.id)) {
            increaseQuantity(item.id);
        } else {
            setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
        }
        // hide "order was sent" green element
        setShowOrderSent(false);
    };

    // Remove from cart button pressed
    const handleRemoveFromCart = (item) => {
        const updatedItems = selectedItems.filter((prod) => prod.id !== item.id);
        setSelectedItems(updatedItems);
        // hide "order was sent" green element
        setShowOrderSent(false);
    };

    // increase quantity (+)
    const increaseQuantity = (id) => {
        const newCart = selectedItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1, totalPrice: item.discountPrice * item.quantity };
            } else {
                return item;
            }
        });
        setSelectedItems(newCart);
    };

    // increase quantity (-)
    const decreaseQuantity = (id) => {
        const newCart = selectedItems.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1, totalPrice: item.discountPrice * item.quantity };
            } else {
                return item;
            }
        });
        setSelectedItems(newCart);
    };

    return (
        <>
            {/* Cart */}
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
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
                                    <Item
                                        item={prod}
                                        itemId={prod.id}
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
                            <button className="btn btn-primary my-4" onClick={showNextItems}>
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
