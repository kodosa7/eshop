import Rating from "./Rating";
import fixDecimalNum from "../utilities/utilities";

const Product = ({
    product,
    productId,
    name,
    description,
    image,
    originalPrice,
    discountPrice,
    rating,
    handleAddToCart,
}) => {
    return (
        <div className="card h-100">
            <div className="ratio ratio-1x1">
                <img className="card-img-top object-fit-cover" src={image} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <Rating rating={rating} />
            rating: {rating}
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    <div className="fw-bold fs-4">$ {discountPrice}</div>
                    <div className="fw-light fs-6">
                        <s>${originalPrice}</s>
                    </div>
                    <button
                        key={productId}
                        type="button"
                        className="btn btn-outline-dark"
                        onClick={() => handleAddToCart(product)}
                    >
                        Buy
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
