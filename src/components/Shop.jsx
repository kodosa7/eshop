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
            console.log("now");
        }

        setIsLoading(true);
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setTotal(data.total);
                setProducts((prev) => [...prev, ...data.products]);
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

    // Handling whether the item is or isn't in cart
    const handleAddToCart = (item) => {
        const itemIndex = selectedItems.findIndex((prod) => prod.id === item.id);

        // hide order sent green element if clicked on the add item button
        setShowOrderSent(false);

        if (itemIndex === -1) {
            // Item is not in the cart, add it
            setSelectedItems([...selectedItems, item]);

            // Push the clicked item to the array
            const updatedDisabledButtons = [...disabledButtons];
            updatedDisabledButtons.push(item.id);
            setDisabledButtons(updatedDisabledButtons);
        } else {
            // If item is already in the cart, remove it
            const updatedItems = selectedItems.filter((prod) => prod.id !== item.id);
            setSelectedItems(updatedItems);

            // Remove the item from disabledButtons array to enable the button
            const updatedDisabledButtons = disabledButtons.filter((id) => id !== item.id);
            setDisabledButtons(updatedDisabledButtons);
        }
    };

    return (
        <>
            {/* Cart */}
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                handleAddToCart={handleAddToCart}
                disabledButtons={disabledButtons}
                setDisabledButtons={setDisabledButtons}
                showOrderSent={showOrderSent}
                setShowOrderSent={setShowOrderSent}
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
                                        itemId={prod.id}
                                        index={index}
                                        name={prod.title}
                                        image={prod.thumbnail}
                                        description={prod.description}
                                        price={prod.price}
                                        handleAddToCart={() => handleAddToCart(prod)}
                                        disabledButtons={disabledButtons}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    )}
                    {isLoading && <p>Loading products...</p>}
                </div>
            </div>
            {products.length < total && !isLoading && (
                <div className="row">
                    <button className="btn btn-primary my-4" onClick={showNextItems}>
                        Load next items
                    </button>
                </div>
            )}
        </>
    );
};

export default Shop;
