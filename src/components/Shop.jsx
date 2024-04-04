import { useState } from "react";
import ItemList from "./Shop/ItemList";
import Cart from "./Shop/Cart";

const Shop = (props) => {
    const { isButtonDisabled, setIsButtonDisabled } = props;
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
    };

    const liftUpButtonState = (value) => {
        console.log("liftUpButtonState", value);
    };

    return (
        <>
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                isButtonDisabled={isButtonDisabled}
                setIsButtonDisabled={setIsButtonDisabled}
            />
            typeof2: {typeof liftUpButtonState}
            <div className="row">
                <ItemList
                    handleAddToCart={handleAddToCart}
                    liftUpButtonState={liftUpButtonState}
                />
            </div>
        </>
    );
};

export default Shop;
