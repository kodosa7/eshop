import Rating from "./Rating";

const Product = ({ product, handleAddToCart }) => {
    return (
        <div className="card h-100">
            <div className="ratio ratio-1x1">
                <img className="card-img-top object-fit-cover" src={product.thumbnail} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
            </div>
            <Rating rating={product.rating} />
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    <div className="fw-bold fs-4">$ {product.discountPrice}</div>
                    <div className="fw-light fs-6">
                        <s>${product.price}</s>
                    </div>
                    <button
                        key={product.id}
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
