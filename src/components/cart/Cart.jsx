import Item from "./Item";

const Cart = () => {
        return (
            <>
                <h1>Cart</h1>
                <p>Add something to your cart, make it from your heart.</p>

                <Item
                    name="Item name"
                    image="image"
                    description="Item description is here, but it's a short one."
                    price="10$"
                />

                <Item
                    name="Item name"
                    image="image"
                    description="Item description is here, but it's a short one."
                    price="10$"
                />
                
                <Item
                    name="Item name"
                    image="image"
                    description="Item description is here, but it's a short one."
                    price="10$"
                />
                
                <Item
                    name="Item name"
                    image="image"
                    description="Item description is here, but it's a short one."
                    price="10$"
                />
            </>
        );
    };

export default Cart;
