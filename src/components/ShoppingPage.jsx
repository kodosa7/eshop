import { useState } from "react";
import ItemList from "./ShoppingPage/ItemList";
import Cart from "./ShoppingPage/Cart";

const ShoppingPage = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
    };

    return (
        <>
            <Cart selectedItems={ selectedItems } setSelectedItems={ setSelectedItems }/>
            <div className="row">
                <ItemList handleAddToCart={ handleAddToCart } />
            </div>
        </>
    );
};

export default ShoppingPage;