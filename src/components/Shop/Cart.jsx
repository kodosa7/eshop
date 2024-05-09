import { useState, Fragment } from "react";
import Checkout from "./Checkout";

const Cart = (props) => {
    const {
        selectedItems,
        setSelectedItems,
        handleAddToCart,
        handleRemoveFromCart,
        setDisabledButtons,
        showOrderSent,
        setShowOrderSent,
        decreaseQuantity,
    } = props;
    const [showCheckout, setShowCheckout] = useState(false);

    let resultPrice = 0;
    selectedItems.forEach((item) => {
        resultPrice += item.totalPrice;
    });

    const removeFromCart = (item) => {
        const updatedItems = selectedItems.filter((prod) => prod.id !== item.id);
        setSelectedItems(updatedItems);
        handleRemoveFromCart(item); // remove button disabled

        // if cart gets emptied then hide the checkout form
        if (selectedItems.length === 1) {
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
                {selectedItems.map((prod, index) => {
                    const { title, discountPrice } = prod;

                    return (
                        <Fragment key={prod.id}>
                            <div className="row mb-1">
                                <div className="col-3 d-flex justify-content-between align-items-center" key={index}>
                                    {title}
                                </div>
                                <div className="col-1 d-flex justify-content-end align-items-center">
                                    {discountPrice.toFixed(2).split(".")[1] === "00"
                                        ? discountPrice.toFixed(2).split(".")[0]
                                        : `${discountPrice.toFixed(2).split(".")[0]}.${discountPrice
                                              .toFixed(2)
                                              .split(".")[1]
                                              .padEnd(2, "0")}`}{" "}
                                    $
                                </div>
                                <div className="col-auto">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() => removeFromCart(prod)}
                                    >
                                        Remove from cart
                                    </button>
                                </div>
                                <div className="col-auto">
                                    {prod.quantity > 1 ? (
                                        <button
                                            type="button"
                                            className="btn btn-outline-dark btn-sm"
                                            onClick={() => decreaseQuantity(prod.id)}
                                        >
                                            -
                                        </button>
                                    ) : (
                                        <button type="button" className="btn btn-outline-dark btn-sm" disabled>
                                            -
                                        </button>
                                    )}
                                </div>
                                <div className="col-auto">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() => handleAddToCart(prod)}
                                    >
                                        +
                                    </button>
                                </div>
                                <div className="col-auto">{prod.quantity}</div>
                                <div className="col-auto">{discountPrice * prod.quantity}</div>
                            </div>
                        </Fragment>
                    );
                })}

                <div className="row">
                    <div className="col-3">Total</div>
                    <div className="col-1 d-flex justify-content-end align-items-center text-wrap">{resultPrice} $</div>
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
