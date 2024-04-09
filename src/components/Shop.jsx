import { useState } from "react";
import Item from "./Shop/Item";
import data from "./Shop/data.json";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    
    const handleAddToCart = (itemId) => {
        setSelectedItems([...selectedItems, itemId]);
        setIsButtonDisabled(true);
    };

    return (
        <>
            {/* Cart */}
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                isButtonDisabled={isButtonDisabled}
                setIsButtonDisabled={setIsButtonDisabled}
                handleAddToCart={handleAddToCart}
            />
            <div className="row">
            
            {/* Item */}
                <div className="row row-gap-4">
                    {data.map((item, index) => (
                        <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                            <Item
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                                handleAddToCart={() => handleAddToCart(item.id)}

                                isButtonDisabled={isButtonDisabled}
                            />
                        </div>
                    ))}
                </div>
                isButtonDisabled2: {isButtonDisabled}
            </div>
        </>
    );
};

export default Shop;
