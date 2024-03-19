import { useState } from "react";

const Item = (props) => {
    const itemId = props.id;
    const itemName = props.name;
    const itemDescription = props.description;
    const itemImage = props.image;
    const itemPrice = props.price;

    const [cart, setCart] = useState([]);

    const handleAddToCart = () => {
        console.log("button pressed");
        setCart(prev => [...prev, itemId]);
        console.log(cart);
    }

    return (
        <div className="card h-100">
            <h3 className="card-header">{ itemName }</h3>
            <img className="card-img rounded-0" src={ itemImage } alt="" />
            <div className="card-body">
                <p className="card-text">{ itemDescription }</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    { itemPrice } $
                    <button
                        className="btn btn-primary"
                        onClick={ handleAddToCart }
                        cart={ cart }
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
