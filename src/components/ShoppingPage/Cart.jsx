import data from "./data.json";

const Cart = ({ selectedItems }) => {
    console.log("SelectedItems are", selectedItems);

    if (selectedItems.length === 0) {
        return (
            <>
                <h2>Cart</h2>
                <p>Add something to your cart, make it from your heart.</p>
            </>
        )
    } else {
        return (
            <>
                <h2>Cart</h2>
                <ul>
                    {selectedItems.map((itemId, index) => {
                        const selectedItem = data.find(item => item.id === itemId);
                        const { name, price } = selectedItem;
                        return (
                            <li key={index}>
                                {name}: {price} $
                            </li>
                        )}
                    )}
                </ul>
                
            </>
        );
    }
};

export default Cart;
