import { useState, Fragment } from "react";
import Checkout from "./Checkout";

const Cart = ({
    selectedProducts,
    setSelectedProducts,
    handleAddToCart,
    handleRemoveFromCart,
    isOrderSent,
    setIsOrderSent,
    decreaseQuantity,
}) => {
    const [isCheckoutVisible, setIsCheckoutVisible] = useState(false);

    let resultPrice = 0;
    selectedProducts.forEach((product) => {
        resultPrice += product.totalPrice;
    });

    const removeFromCart = (product) => {
        const updatedProducts = selectedProducts.filter((prod) => prod.id !== product.id);
        setSelectedProducts(updatedProducts);
        handleRemoveFromCart(product); // remove button disabled

        // if cart gets emptied then hide the checkout form
        if (selectedProducts.length === 1) {
            setIsCheckoutVisible(false);
        }
    };

    // checkout button
    const handleCheckout = () => {
        setIsCheckoutVisible(true);
    };

    // show success text and empty cart
    const handleEmail = () => {
        setIsOrderSent(true);
        setIsCheckoutVisible(false);
        setSelectedProducts([]); // empty cart array
    };

    const handleQuantityChange = (event, prod) => {
        const newQuantity = parseInt(event.target.value);
        if (!isNaN(newQuantity) && newQuantity >= 0) {
            const updatedProducts = selectedProducts.map((product) =>
                product.id === prod.id ? { ...product, quantity: newQuantity } : product
            );
            setSelectedProducts(updatedProducts);
        }
    };

    if (selectedProducts.length === 0 || isOrderSent) {
        return (
            <>
                {isOrderSent && (
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
                {selectedProducts.map((prod, index) => {
                    return (
                        <Fragment key={prod.id}>
                            <div className="row mb-1">
                                <div
                                    className="col-3 d-flex justify-content-between align-items-center fw-bold"
                                    key={index}
                                >
                                    {prod.title}
                                </div>
                                <div className="col-1 d-flex justify-content-end align-items-center">
                                    ${" "}
                                    {prod.discountPrice.toFixed(2).split(".")[1] === "00"
                                        ? prod.discountPrice.toFixed(2).split(".")[0]
                                        : `${prod.discountPrice.toFixed(2).split(".")[0]}.${prod.discountPrice
                                              .toFixed(2)
                                              .split(".")[1]
                                              .padEnd(2, "0")}`}{" "}
                                    / pc
                                </div>
                                <div className="col-1">
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        min="1"
                                        className="form-control lh-lg"
                                        value={prod.quantity}
                                        onChange={(e) => handleQuantityChange(e, prod)}
                                    />
                                </div>
                                <div className="col-auto d-flex flex-column">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm h-4"
                                        style={{
                                            paddingLeft: "1rem",
                                            paddingRight: "1rem",
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        }}
                                        onClick={() => handleAddToCart(prod)}
                                    >
                                        +
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        style={{
                                            paddingLeft: "1rem",
                                            paddingRight: "1rem",
                                            paddingTop: 0,
                                            paddingBottom: 0,
                                        }}
                                        onClick={() => decreaseQuantity(prod.id)}
                                        disabled={prod.quantity === 1}
                                    >
                                        –
                                    </button>
                                </div>
                                <div className="col-auto d-flex align-items-center">
                                    {prod.quantity} {prod.quantity === 1 ? "pc" : "pcs"} in cart
                                </div>
                                <div className="col-auto d-flex align-items-center">
                                    $ {prod.discountPrice * prod.quantity}
                                </div>
                                <div className="col-auto d-flex align-items-center">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() => removeFromCart(prod)}
                                    >
                                        Remove from cart
                                    </button>
                                </div>
                            </div>
                        </Fragment>
                    );
                })}

                <div className="row">
                    <div className="col-3 fw-bold">Total price</div>
                    <div className="col-1 d-flex justify-content-end align-items-center text-wrap fw-bold">
                        $ {resultPrice}
                    </div>
                </div>
                {!isCheckoutVisible && (
                    <div className="mt-3 mb-4">
                        <button type="button" className="btn btn-primary" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                )}
                {isCheckoutVisible && <Checkout eMail={""} handleEmail={handleEmail} />}
            </>
        );
    }
};

export default Cart;
