const Cart = ({ selectedItems }) => {
    console.log("SelectedItems are", selectedItems);

    return (
        <>
            <h2>Cart</h2>
            
            <ul>
                {selectedItems.map((itemId, index) => (
                    <li key={index}>{itemId}</li>
                ))}
            </ul>
            
            <p>Add something to your cart, make it from your heart.</p>
        </>
    );
};

export default Cart;
