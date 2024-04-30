const Item = (props) => {
    const { itemId, name, description, image, price, handleAddToCart, disabledButtons } = props;

    return (
        <div className="card h-100">
            <img className="card-img-top object-fit-cover" src={image} alt="" />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    {price.toFixed(2).split(".")[1] === "00"
                        ? price.toFixed(2).split(".")[0]
                        : `${price.toFixed(2).split(".")[0]}.${price.toFixed(2).split(".")[1].padEnd(2, "0")}`}{" "}
                    $
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
