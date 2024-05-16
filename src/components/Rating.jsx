import { FaStar, FaStarHalf } from "react-icons/fa";

const Rating = ({ rating }) => {
    return (
        <div className="">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;

                let newStar;

                // const difference = currentRating - rating;

                const num = rating % 1;
                const decimalNum = +num.toFixed(2);

                console.log(currentRating, rating, decimalNum);

                if (decimalNum <= 0.25 || decimalNum > 0.75) {
                    // yellow
                    console.log("yellow");
                    newStar = <FaStar style={{ color: "#ffc107" }} size={25} />;
                } else if (decimalNum >= 0.25 || decimalNum <= 0.75) {
                    // half-yellow
                    console.log("half-yellow");
                    newStar = (
                        <>
                            <FaStar style={{ color: "#e4e5e9" }} size={25} />
                            <FaStarHalf
                                style={{ color: "#ffc107", position: "absolute", left: 0, top: "1px" }}
                                size={25}
                            />
                        </>
                    );
                } else {
                    // grey
                    console.log("grey");
                    newStar = <FaStar style={{ color: "#e4e5e9" }} size={25} />;
                }

                return (
                    <span key={index} style={{ position: "relative" }}>
                        {newStar}
                    </span>
                );
            })}
        </div>
    );
};

export default Rating;

// if (currentRating <= rating) {
//     newStar = <FaStar style={{ color: "#ffc107" }} size={25} />;
// } else if (currentRating - rating < 0.5) {
//     newStar = (
//         <>
//             <FaStar style={{ color: "#e4e5e9" }} size={25} />
//             <FaStarHalf
//                 style={{ color: "#ffc107", position: "absolute", left: 0, top: "1px" }}
//                 size={25}
//             />
//         </>
//     );
// } else {
//     newStar = <FaStar style={{ color: "#e4e5e9" }} size={25} />;
// }
