import { useState } from "react";

const Item = (props) => {
    const { id, name, description, image, price, handleAddToCart } = props;
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleAddToCartClick = () => {
        handleAddToCart(id);
        setIsButtonDisabled(true);
    };

    return (
        <div className="card h-100">
            <h3 className="card-header">{name}</h3>
            <img className="card-img rounded-0" src={image} alt="" />
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    {price} $
                    <button
                        type="button"
                        className="btn btn-outline-dark btn-sm"
                        onClick={ handleAddToCartClick }
                        disabled={ isButtonDisabled }
                    >
                        {isButtonDisabled ? "Already in your cart" : "Add to cart"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
