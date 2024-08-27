import { useState } from "react";
import Checkout from "./Checkout";
import CartItem from "./CartItem";
import iconShoppingCartSad from "/src/assets/shopping-cart-sad.svg";

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

                <h4>Shopping Cart</h4>
                <p>I'm so empty <span><img className="sad-cart-icon" src={iconShoppingCartSad}></img></span></p>
            </>
        );
    } else {
        return (
            <>
                <h4>Shopping Cart</h4>
                {productsInCart.map((prod) => (
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
