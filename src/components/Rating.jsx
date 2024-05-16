import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = ({ rating }) => {
    // get a whole (x.0) or half (x.5) number from rating
    const halfRoundedRating = Math.round(rating * 2) / 2;

    return (
        <div className="">
            {[...Array(5)].map((_, index) => {
                // set up three star variants
                const yellowStar = <FaStar style={{ color: "#ffc107" }} size={25} />;
                const halfYellowStar = (
                    <>
                        <FaStar style={{ color: "#e4e5e9" }} size={25} />
                        <FaStarHalf style={{ color: "#ffc107", position: "absolute", left: 0, top: "1px" }} size={25} />
                    </>
                );
                const greyStar = <FaStar style={{ color: "#e4e5e9" }} size={25} />;

                // count a whole or half number from the rounded rating number
                const baseHalfRating = halfRoundedRating - index;

                return (
                    <span key={index} style={{ position: "relative" }}>
                        {baseHalfRating > 0.5 ? yellowStar : baseHalfRating === 0.5 ? halfYellowStar : greyStar}
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;
