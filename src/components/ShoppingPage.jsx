import React, { useState } from "react";
import Article from "./Article";
import Cart from "./Cart";

const ShoppingPage = () => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <Article handleAddToCart={ handleAddToCart } />
                </div>
                <div className="col-md-4">
                    <Cart selectedItems={ selectedItems } />
                </div>
            </div>
        </div>
    );
};

export default ShoppingPage;