import { useState, useEffect } from "react";
import data from "./data.json";
import Checkout from "./Checkout";

const Cart = (props) => {
    const { selectedItems, setSelectedItems, handleAddToCart, setDisabledButtons, showOrderSent, setShowOrderSent } =
        props;
    const [total, setTotal] = useState(0);
    const [showCheckout, setShowCheckout] = useState(false);

    useEffect(() => {
        let totalPrice = 0;
        selectedItems.forEach((itemId) => {
            const selectedItem = data.find((item) => item.id === itemId);
            totalPrice += selectedItem.price;
        });
        setTotal(totalPrice);
    }, [selectedItems]);

    const removeFromCart = (itemId) => {
        const updatedItems = selectedItems.filter((id) => id !== itemId);
        setSelectedItems(updatedItems);
        console.log("selectedItems in removeFromCart()", selectedItems);
        handleAddToCart(itemId); // remove button disabled
        console.log(selectedItems);

        // if cart gets emptied then hide the checkout form
        if (selectedItems.length === 1) {
            console.log("removeFromCart length = 1");
            setShowCheckout(false);
        }
    };

    // checkout button
    const handleCheckout = () => {
        setShowCheckout(true);
    };

    // show success text and empty cart
    const handleEmail = () => {
        setShowOrderSent(true);
        setShowCheckout(false);
        setDisabledButtons([]); // enable all buttons
        setSelectedItems([]); // empty cart array

        console.log("handleEmail function.");
        console.log("selectedItems in handleEmail()", selectedItems);
        console.log("selectedItems.length in handleEmail()", selectedItems.length);
    };

    if (selectedItems.length === 0 || showOrderSent) {
        return (
            <>
                {showOrderSent && (
                    <div className="my-3 pt-3 pb-2 px-3 text-success bg-success-subtle border border-success rounded-3">
                        <p>Your order was sent. Thank You.</p>
                        <p>You can buy more if you want now.</p>
                    </div>
                )}

                <h2>Cart</h2>
                <p>Add something to your cart, make it from your heart.</p>
            </>
        );
    } else {
        return (
            <>
                <h2>Cart</h2>
                {selectedItems.map((itemId, index) => {
                    const selectedItem = data.find((item) => item.id === itemId);
                    const { name, price } = selectedItem;

                    return (
                        <>
                            <div className="row mb-1">
                                <div className="col-2 d-flex justify-content-between align-items-center" key={index}>
                                    {name}
                                </div>
                                <div className="col-1 d-flex justify-content-end align-items-center">{price} $</div>
                                <div className="col-auto">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() => removeFromCart(itemId)}
                                    >
                                        Remove from cart
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                })}

                <div className="row">
                    <div className="col-2">Total</div>
                    <div className="col-1 d-flex justify-content-end align-items-center text-wrap">
                        {(Math.round(total * 100) / 100).toString()} $
                    </div>
                </div>

                {!showCheckout && (
                    <div className="mt-3 mb-4">
                        <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                )}
                {showCheckout && <Checkout eMail={""} handleEmail={handleEmail} />}
            </>
        );
    }
};

export default Cart;
