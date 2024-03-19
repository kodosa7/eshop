import React, { useState } from "react";
import Article from "./ShoppingPage/Article";
import Cart from "./ShoppingPage/Cart";

const ShoppingPage = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
    };

    return (
        <>
            <Cart selectedItems={ selectedItems } />
            <div className="row">
                <Article handleAddToCart={ handleAddToCart } />
            </div>
        </>
    );
};

export default ShoppingPage;