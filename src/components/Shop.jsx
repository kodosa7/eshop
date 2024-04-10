import { useState } from "react";
import Item from "./Shop/Item";
import data from "./Shop/data.json";
import Cart from "./Shop/Cart";

const Shop = () => {
    const [selectedItems, setSelectedItems] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);

    const handleAddToCart = (itemId) => {
        console.log("added to cart with itemId", itemId);
        setSelectedItems([...selectedItems, itemId]);

        // new:
        const updatedDisabledButtons = [...disabledButtons];
        updatedDisabledButtons.push(itemId);
        setDisabledButtons(updatedDisabledButtons);
    };

    return (
        <>
            {/* Cart */}
            <Cart
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
                // isButtonDisabled={isButtonDisabled}
                // setIsButtonDisabled={setIsButtonDisabled}
                handleAddToCart={handleAddToCart}
            />
            <div className="row">
                {/* Item */}
                <div className="row row-gap-4">
                    {data.map((item, index) => (
                        <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
                            <Item
                                itemId={item.id}
                                index={index}
                                name={item.name}
                                image={item.image}
                                description={item.description}
                                price={item.price}
                                handleAddToCart={() => handleAddToCart(item.id)}
                                disabledButtons={disabledButtons}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Shop;
