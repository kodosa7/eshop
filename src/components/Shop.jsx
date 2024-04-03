import { useState } from "react";
import ItemList from "./Shop/ItemList";
import Cart from "./Shop/Cart";

const Shop = (props) => {
    const { isButtonDisabled, setIsButtonDisabled, liftUpButtonState } = props;
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
        console.log(liftUpButtonState);
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
                <ItemList handleAddToCart={handleAddToCart} liftUpButtonStateFromItemList={handleAddToCart} />
            </div>
        </>
    );
};

export default Shop;
