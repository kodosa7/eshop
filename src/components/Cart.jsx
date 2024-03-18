const Cart = (props) => {
    const cart = props.cart;
    console.log("cart is ", cart);

    if (!cart) {
        return (
            <>
                <h2>Cart</h2>
                <p>Add something to your cart, make it from your heart.</p>
                the cart array is empty
            </>
        )
    }

    return (
        <>
            <h2>Cart</h2>
            {cart.map((item, index) => (
                <p>{ item }</p>
            ))}
        </>
    );
};

export default Cart;
