import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
    const { item, setRatingOnClick, myRating, setMyRating } = props;
    const [hover, setHover] = useState(null);

    useEffect(() => {
        setMyRating(item.rating);
    }, [item.rating]);

    return (
        <div className="">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRatingOnClick(currentRating, index)}
                            style={{ display: "none" }}
                        />
                        <FaStar
                            style={{
                                cursor: "pointer",
                                color: currentRating <= (hover || myRating) ? "#ffc107" : "#e4e5e9",
                            }}
                            size={25}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
        </div>
    );
};

export default Rating;
