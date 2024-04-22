import { useState, useEffect } from "react";
import Item from "./Shop/Item";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);
    const [showOrderSent, setShowOrderSent] = useState(false);
    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(10);
    const [amountToShow, setAmountToShow] = useState(10);
    const [total, setTotal] = useState(0);

    // fetch data from API (first time)
    useEffect(() => {
        fetch(`https://dummyjson.com/products?limit=8`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setTotal(data.total);
            });
    }, []);

    // load and show next items on "Show next items" button click
    const showNextItems = () => {
        setAmountToShow((prevAmount) => (prevAmount += limit));
        fetch(`https://dummyjson.com/products?limit=${amountToShow}`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
        console.log("showNextItems btn clicked");
        console.log("amountToShow=", amountToShow);
        console.log("limit=", limit);
        console.log("total=", products.total);
        setTotal(products.total);
    };

    // Handling whether the item is or isn't in cart
    const handleAddToCart = (item) => {
        const itemIndex = selectedItems.indexOf(item.id);

        // hide order sent green element if clicked on the add item button
        setShowOrderSent(false);

        if (itemIndex === -1) {
            // Item is not in the cart, add it
            setSelectedItems([...selectedItems, item.id]);

            // Push the clicked item to the array
            const updatedDisabledButtons = [...disabledButtons];
            updatedDisabledButtons.push(item.id);
            setDisabledButtons(updatedDisabledButtons);
        } else {
            // If item is already in the cart, remove it
            const updatedItems = selectedItems.filter((id) => id !== item.id);
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
                products={products}
            />
            <div className="row">
                <h2>Articles (goods)</h2>
                {/* Item */}

                {/* show only if products is not empty - not when initial state = [] */}
                {products && (
                    <div className="row row-gap-4">
                        {products.map((item, index) => (
                            <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                                <Item
                                    itemId={item.id}
                                    index={index}
                                    name={item.title}
                                    image={item.thumbnail}
                                    description={item.description}
                                    price={item.price}
                                    handleAddToCart={() => handleAddToCart(item)}
                                    disabledButtons={disabledButtons}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {amountToShow <= total && (
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
