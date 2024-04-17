const Item = (props) => {
    const { itemId, name, description, image, price, handleAddToCart, disabledButtons } = props;

    // price display format
    const [integerPart, decimalPart] = price.toFixed(2).split(".");
    const formattedPrice = decimalPart === "00" ? integerPart : `${integerPart}.${decimalPart.padEnd(2, "0")}`;

    return (
        <div className="card h-100">
            <h3 className="card-header">{name}</h3>
            <img className="card-img rounded-0" src={image} alt="" />
            <div className="card-body">
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    {formattedPrice} $
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
                        {disabledButtons.includes(itemId) ? `Already in your cart` : `Add to cart`}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
