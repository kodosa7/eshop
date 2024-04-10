import { useState } from "react";

const Item = (props) => {
    const { itemId, index, name, description, image, price, handleAddToCart, isButtonDisabled } = props;

    console.log("itemId v Item: ", itemId);

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
                    {itemId === index ? (
                        <button
                            id={itemId}
                            type="button"
                            className="btn btn-outline-dark"
                            style={{
                                fontSize: ".7rem",
                            }}
                            onClick={() => handleAddToCart(itemId)}
                            disabled={true}
                        >
                            {isButtonDisabled ? `Already in your cart ${itemId}` : `Add to cart ${itemId}`}
                        </button>
                    ) : (
                        <button
                            id={itemId}
                            type="button"
                            className="btn btn-outline-dark"
                            style={{
                                fontSize: ".7rem",
                            }}
                            onClick={() => handleAddToCart(itemId)}
                            disabled={false}
                        >
                            {isButtonDisabled ? `Already in your cart ${itemId}` : `Add to cart ${itemId}`}
                        </button>
                    )}
                </div>
            </div>
            itemId: {itemId}
            <br></br>
            isButtonDisabled: {isButtonDisabled.toString()}
        </div>
    );
};

export default Item;
