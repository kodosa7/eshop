import { useState } from "react";
import Checkout from "./Checkout";
import CartItem from "./CartItem";

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
        setProductsInCart([]);
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
                {productsInCart.map((prod, index) => (
                    <CartItem
                        key={prod.id}
                        onIncrease={onIncrease}
                        onDecrease={onDecrease}
                        onRemove={onRemove}
                        onQuantityChange={onQuantityChange}
                        product={prod}
                    />
                ))}
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
