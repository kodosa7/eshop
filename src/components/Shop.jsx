import { useState, useEffect } from "react";
import Item from "./Shop/Item";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showOrderSent, setShowOrderSent] = useState(false);
    const [products, setProducts] = useState([]);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);

    // fetch data from API (first time)
    useEffect(() => {
        fetchProducts(0);
    }, []);

    // load and show next items on "Show next items" button click
    const showNextItems = () => {
        setSkip((prevSkip) => (prevSkip += 8));
        fetchProducts(skip);
    };

    const fetchProducts = (skip) => {
        fetch(`https://dummyjson.com/products?skip=${skip}&limit=8`)
            .then((res) => res.json())
            .then((data) => setProducts((prev) => [...prev, ...data.products]))
            .then((data) => setTotal(data.total));
        console.log("products=", products);
        console.log("skip=", skip);
        console.log("total=", total);
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
                <h2>Articles (goods)</h2>
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
            {skip <= total && (
                <div className="row">
                    <button className="btn btn-primary my-4" onClick={showNextItems}>
                        Next 10 items
                    </button>
                </div>
            )}
        </>
    );
};

export default Shop;
