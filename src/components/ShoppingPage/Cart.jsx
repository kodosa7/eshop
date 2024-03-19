import { useState, useEffect } from "react";
import data from "./data.json";

const Cart = ({ selectedItems }) => {
    const [total, setTotal] = useState(0);

    useEffect( () => {
        let totalPrice = 0;
        selectedItems.forEach(itemId => {
            const selectedItem = data.find(item => item.id === itemId);
            totalPrice += selectedItem.price;
        });
        setTotal(totalPrice);
    }, [selectedItems]);


    if (selectedItems.length === 0) {
        return (
            <>
                <h2>Cart</h2>
                <p>Add something to your cart, make it from your heart.</p>
            </>
        )
    } else {
        return (
            <>
                <h2>Cart</h2>
                
                    {selectedItems.map((itemId, index) => {
                        const selectedItem = data.find(item => item.id === itemId);
                        const { name, price } = selectedItem;

                        return (
                            <>
                                <div className="row">
                                    <div
                                        className="col-sm-6 col-md-4 col-lg-3"
                                        key={index}
                                    >
                                        {name}
                                    </div>
                                    <div className="col">
                                        {price} $
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-outline-dark">
                                            Remove from cart
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    )}
                
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-lg-3">
                        Total
                    </div>
                    <div className="col">
                        {total} $
                    </div>
                </div>
                <div className="my-4">
                    <button className="btn btn-primary">
                        Checkout
                    </button>
                </div>
            </>
        );
    }
};

export default Cart;
