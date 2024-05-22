import { Fragment } from "react";
import QuantityChanger from "./QuantityChanger";

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

                        <QuantityChanger
                            prod={prod}
                            onRemove={onRemove}
                            onQuantityChange={onQuantityChange}
                            onIncrease={onIncrease}
                            onDecrease={onDecrease}
                        />

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
