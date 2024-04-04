import { useState } from "react";
import ItemList from "./Shop/ItemList";
import Cart from "./Shop/Cart";

const Shop = (props) => {
    // const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { buttonState, setButtonState } = props;
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
        // setIsButtonDisabled(true);
    };

    return (
        <>
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                buttonState={buttonState}
                setButtonState={setButtonState}
            />
            <div className="row">
                <ItemList handleAddToCart={handleAddToCart} buttonState={buttonState} setButtonState={setButtonState} />
            </div>
        </>
    );
};

export default Shop;
