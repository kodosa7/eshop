import { Fragment } from "react";

const CartItem = ({ productsInCart, onIncrease, onDecrease, onRemove, onQuantityChange }) => {
    return (
        <>
            {productsInCart.map((prod, index) => (
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
            ))}
        </>
    );
};

export default CartItem;
