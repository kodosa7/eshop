import { useState, useEffect } from "react";
import Item from "./Shop/Item";
import Cart from "./Shop/Cart";
import Categories from "./Shop/Categories";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showOrderSent, setShowOrderSent] = useState(false);
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [fetchType, setFetchType] = useState("type-products");

    // fetch data from API (first time)
    useEffect(() => {
        fetchProducts(0, fetchType);
        fetchCategories();
    }, []);

    // load and show next items on "Show next items" button click
    const showNextItems = () => {
        fetchProducts(products.length);
    };

    // fetch products API
    const fetchProducts = (skip, fetchType, category) => {
        console.log("fetchType in fetchPruducts", fetchType);
        if (fetchType === "type-products") {
            fetch(`https://dummyjson.com/products?skip=${skip}&limit=8`)
                .then((res) => res.json())
                .then((data) => {
                    setTotal(data.total);
                    setProducts((prev) => [...prev, ...data.products]);
                });
        } else if (fetchType === "type-category") {
            setCategory(category);
            console.log("asdsad", category);
            fetch(`https://dummyjson.com/products/category/${category}?limit=8`)
                .then((res) => res.json())
                .then((data) => {
                    setTotal(data.total);
                    setProducts([...data.products]);
                });
        }
    };

    // fetch all categories API
    const fetchCategories = () => {
        fetch(`https://dummyjson.com/products/categories/`)
            .then((res) => res.json())
            .then((data) => {
                // capitalize first letter on category name first
                // TODO: capitalize all first letters and swap '-' for spaces
                const capitalizedData = data.map((category) => category.charAt(0).toUpperCase() + category.slice(1));
                setCategories(capitalizedData);
            });
    };

    const handleSelectCategory = (category) => {
        console.log("handleSelectCategory", category);
        setFetchType("category");
        console.log("fetchType", fetchType);
        fetchProducts(8, "type-category", category);
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
            <div className="row">
                <div className="col-3">
                    <Categories categories={categories} handleSelectCategory={handleSelectCategory} />
                </div>
                <div className="col">
                    {category === "" ? <h2>All articles</h2> : <h2>{category}</h2>}
                    {/* Item */}
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
                </div>
            </div>
            {products.length < total && (
                <div className="row">
                    <button className="btn btn-primary my-4" onClick={showNextItems}>
                        Next 8 items
                    </button>
                </div>
            )}
        </>
    );
};

export default Shop;
