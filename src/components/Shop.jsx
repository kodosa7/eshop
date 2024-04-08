import { useState } from "react";
import ItemList from "./Shop/ItemList";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
    };

    return (
        <>
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
            />
            <div className="row">
                <ItemList handleAddToCart={handleAddToCart} />
            </div>
        </>
    );
};

export default Shop;
