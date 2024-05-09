import { useState } from "react";
import Rating from "./Rating";

const Item = (props) => {
    const { item, itemId, name, description, image, price, discountPrice, rating, handleAddToCart, disabledButtons } =
        props;

    const [myRating, setMyRating] = useState(rating);

    // nejde:
    const setRatingOnClick = (newRating, id) => {
        console.log("id", itemId);
        console.log("rating", rating);
        console.log("newRating", newRating);

        if (item.id === id) {
            setMyRating(newRating);
            return { ...item, rating: newRating };
        } else {
            return item;
        }
    };

    return (
        <div className="card h-100">
            <div className="ratio ratio-1x1">
                <img className="card-img-top object-fit-cover" src={image} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>

            {/* Stars rating */}
            <Rating item={item} setRatingOnClick={setRatingOnClick} myRating={myRating} setMyRating={setMyRating} />

            rating: {myRating}

            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    <div className="fw-bold fs-4">
                        $
                        {discountPrice.toFixed(2).split(".")[1] === "00"
                            ? discountPrice.toFixed(2).split(".")[0]
                            : `${discountPrice.toFixed(2).split(".")[0]}.${discountPrice
                                  .toFixed(2)
                                  .split(".")[1]
                                  .padEnd(2, "0")}`}{" "}
                    </div>
                    <div className="fw-light fs-6">
                        <s>${price}</s>
                    </div>
                    <button
                        key={itemId}
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleAddToCart(item)}
                        disabled={disabledButtons.includes(itemId)}
                    >
                        {disabledButtons.includes(itemId) ? "Already in cart" : "Buy"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
