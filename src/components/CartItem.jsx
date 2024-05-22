import { Fragment } from "react";
import QuantityChanger from "./QuantityChanger";

const CartItem = ({ product, onIncrease, onDecrease, onRemove, onQuantityChange }) => {
    return (
        <>
            <Fragment key={product.id}>
                <div className="row mb-1">
                    <div className="col-3 d-flex justify-content-between align-items-center fw-bold">{product.title}</div>
                    <div className="col-1 d-flex justify-content-end align-items-center">
                        $ {product.discountPrice} / pc
                    </div>

                    <QuantityChanger
                        prod={product}
                        onRemove={onRemove}
                        onQuantityChange={onQuantityChange}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                    />

                    <div className="col-auto d-flex align-items-center">$ {product.totalPrice}</div>
                    <div className="col-auto d-flex align-items-center">
                        <button type="button" className="btn btn-outline-dark btn-sm" onClick={() => onRemove(product.id)}>
                            Remove from cart
                        </button>
                    </div>
                </div>
            </Fragment>
        </>
    );
};

export default CartItem;
