import { useState } from "react";
import ItemList from "./Shop/ItemList";
import Cart from "./Shop/Cart";

const Shop = (props) => {
    const { isButtonDisabled, setIsButtonDisabled } = props;
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
    };

    return (
        <>
            <Cart 
                selectedItems={ selectedItems }
                setSelectedItems={ setSelectedItems }
                isButtonDisabled={ isButtonDisabled }
                setIsButtonDisabled={ setIsButtonDisabled }
                
                />
            <div className="row">
                <ItemList handleAddToCart={ handleAddToCart } />
            </div>
        </>
    );
};

export default Shop;