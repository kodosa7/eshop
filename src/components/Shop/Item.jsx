const Item = (props) => {
    const { id, name, description, image, price, handleAddToCart, isButtonDisabled, setIsButtonDisabled } = props;

    const handleAddToCartClick = () => {
        handleAddToCart(id);
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
                        id={id}
                        type="button"
                        className="btn btn-outline-dark btn-sm"
                        onClick={handleAddToCartClick}
                        disabled={isButtonDisabled}
                    >
                        {isButtonDisabled ? "Already in your cart" : "Add to cart"}
                        id={id}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
