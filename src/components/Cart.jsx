import { useState, Fragment } from "react";
import Checkout from "./Checkout";

const Cart = ({
    productsInCart,
    setProductsInCart,
    onIncrease,
    onDecrease,
    onRemove,
    onQuantityChange,
    isOrderSent,
    setIsOrderSent,
}) => {
    const [isCheckoutFormVisible, setIsCheckoutFormVisible] = useState(false);

    let resultPrice = 0;
    productsInCart.forEach((product) => {
        resultPrice += product.totalPrice;
    });

    const onCheckout = () => {
        setIsCheckoutFormVisible(true);
    };

    const handleIsOrderSent = () => {
        setIsOrderSent(true);
        setIsCheckoutFormVisible(false);
        setProductsInCart([]); // empty cart array
    };

    if (productsInCart.length === 0 || isOrderSent) {
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
                {productsInCart.map((prod, index) => {
                    return (
                        <Fragment key={prod.id}>
                            <div className="row mb-1">
                                <div className="col-3 d-flex justify-content-between align-items-center fw-bold">
                                    {prod.title}
                                </div>
                                <div className="col-1 d-flex justify-content-end align-items-center">
                                    $ {prod.discountPrice} / pc
                                </div>
                                <div className="col-1">
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        min="1"
                                        className="form-control lh-lg"
                                        value={prod.quantity}
                                        onChange={(e) => {
                                            if (e.target.value < 1) {
                                                onRemove(prod.id);
                                            } else {
                                                onQuantityChange(e, prod.id);
                                            }
                                        }}
                                        onBlur={(e) => {
                                            if (e.target.value === "") {
                                                e.target.value = 1;
                                            }
                                        }}
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
                                        onClick={() => onIncrease(prod)}
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
                                        onClick={() => onDecrease(prod.id)}
                                        disabled={prod.quantity <= 1 || prod.quantity === ""}
                                    >
                                        –
                                    </button>
                                </div>
                                <div className="col-auto d-flex align-items-center">$ {prod.totalPrice}</div>
                                <div className="col-auto d-flex align-items-center">
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark btn-sm"
                                        onClick={() => onRemove(prod.id)}
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
                {!isCheckoutFormVisible && (
                    <div className="mt-3 mb-4">
                        <button type="button" className="btn btn-primary" onClick={onCheckout}>
                            Checkout
                        </button>
                    </div>
                )}
                {isCheckoutFormVisible && <Checkout eMailAddress={handleIsOrderSent} />}
            </>
        );
    }
};

export default Cart;
