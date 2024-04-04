import { useState } from "react";
import ItemList from "./Shop/ItemList";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
        setIsButtonDisabled(true);
    };

    return (
        <>
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                isButtonDisabled={isButtonDisabled}
                setIsButtonDisabled={setIsButtonDisabled}
            />
            <div className="row">
                <ItemList
                    handleAddToCart={handleAddToCart}
                    isButtonDisabled={isButtonDisabled}
                    setIsButtonDisabled={setIsButtonDisabled}
                />
            </div>
        </>
    );
};

export default Shop;
