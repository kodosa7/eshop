const Item = (props) => {
    const { itemId, name, description, image, price, handleAddToCart, disabledButtons } = props;

    return (
        <div className="card h-100">
            <img className="card-img-top object-fit-cover" style={{ minHeight: "9rem" }} src={image} alt="" />
            <h5 className="card-header">{name}</h5>
            <div className="card-body">
                <p className="card-text h-100">{description}</p>
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
