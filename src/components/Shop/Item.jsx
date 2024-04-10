const Item = (props) => {
    const { itemId, name, description, image, price, handleAddToCart, disabledButtons } = props;

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
                        key={itemId}
                        type="button"
                        className="btn btn-outline-dark"
                        style={{
                            fontSize: ".7rem",
                        }}
                        onClick={() => handleAddToCart(itemId)}
                        disabled={disabledButtons.includes(itemId)}
                    >
                        {disabledButtons.includes(itemId) ? `Already in your cart ${itemId}` : `Add to cart ${itemId}`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
