import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
    const { starsArray } = props;
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

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
                            onClick={() => setRating(currentRating)}
                            style={{ display: "none" }}
                        />
                        <FaStar
                            style={{
                                cursor: "pointer",
                                color: currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
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
