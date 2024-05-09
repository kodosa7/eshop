import { FaStar } from "react-icons/fa";

const Rating = (props) => {
    const { rating } = props;

    return (
        <div className="">
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <FaStar
                        key={index}
                        style={{
                            color: currentRating <= rating ? "#ffc107" : "#e4e5e9",
                        }}
                        size={25}
                    />
                );
            })}
        </div>
    );
};

export default Rating;
