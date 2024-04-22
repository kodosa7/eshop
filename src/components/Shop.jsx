import { useState, useEffect } from "react";
import Item from "./Shop/Item";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showOrderSent, setShowOrderSent] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const showNextItems = () => {
        console.log("show next items btn clicked");
    };

    // Handling whether the item is or isn't in cart
    const handleAddToCart = (itemId) => {
        const itemIndex = selectedItems.indexOf(itemId);

        // hide order sent green element if clicked on the add item button
        setShowOrderSent(false);

        if (itemIndex === -1) {
            // Item is not in the cart, add it
            setSelectedItems([...selectedItems, itemId]);

            // Push the clicked item to the array
            const updatedDisabledButtons = [...disabledButtons];
            updatedDisabledButtons.push(itemId);
            setDisabledButtons(updatedDisabledButtons);
        } else {
            // If item is already in the cart, remove it
            const updatedItems = selectedItems.filter((id) => id !== itemId);
            setSelectedItems(updatedItems);

            // Remove the item from disabledButtons array to enable the button
            const updatedDisabledButtons = disabledButtons.filter((id) => id !== itemId);
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
                data={data}
            />
            <div className="row">
                <h2>Articles (goods)</h2>
                {/* Item */}

                {/* show only if data.products is not empty - not when initial state = [] */}
                {data.products && (
                    <div className="row row-gap-4">
                        {data.products.map((item, index) => (
                            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                                <Item
                                    itemId={item.id}
                                    index={index}
                                    name={item.title}
                                    image={item.thumbnail}
                                    description={item.description}
                                    price={item.price}
                                    handleAddToCart={() => handleAddToCart(item.id)}
                                    disabledButtons={disabledButtons}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="row">
                <button className="btn btn-primary" onClick={showNextItems}>
                    Next 20 items
                </button>
            </div>
        </>
    );
};

export default Shop;
