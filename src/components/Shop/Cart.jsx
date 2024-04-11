import { useState, useEffect } from "react";
import data from "./data.json";
import Checkout from "./Checkout";

const Cart = (props) => {
    const { selectedItems, setSelectedItems, handleAddToCart } = props;
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
        handleAddToCart(itemId); // remove button disabled
    };

    const handleCheckout = () => {
        if (selectedItems.length === 0) {
            setShowCheckout(false);
        } else {
            setShowCheckout(true);
        }
    };

    const handleEmail = () => {
        console.log("handleEmail fnc");
    };

    if (selectedItems.length === 0) {
        return (
            <>
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
                    <div className="col-1 d-flex justify-content-end align-items-center text-wrap">{total} $</div>
                </div>

                {!showCheckout && (
                    <div className="mt-3 mb-4">
                        <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                )}
                {showCheckout && <Checkout eMail={"asd@qwe.zx"} handleEmail={handleEmail} />}
            </>
        );
    }
};

export default Cart;
