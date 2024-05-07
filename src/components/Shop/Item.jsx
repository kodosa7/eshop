const Item = (props) => {
    const { item, itemId, name, description, image, price, discountPrice, rating, handleAddToCart, disabledButtons } =
        props;

    const starsArray = [];
    for (let i = 0; i < Math.round(rating); i++) {
        starsArray.push("⭐");
    }
    return (
        <div className="card h-100">
            <div className="ratio ratio-1x1">
                <img className="card-img-top object-fit-cover" src={image} alt="" />
            </div>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{starsArray}</li>
                <li className="list-group-item fw-light">
                    <s>was ${price}</s>
                </li>
            </ul>

            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    <div className="fw-bold">
                        $
                        {discountPrice.toFixed(2).split(".")[1] === "00"
                            ? discountPrice.toFixed(2).split(".")[0]
                            : `${discountPrice.toFixed(2).split(".")[0]}.${discountPrice
                                  .toFixed(2)
                                  .split(".")[1]
                                  .padEnd(2, "0")}`}{" "}
                    </div>
                    <button
                        key={itemId}
                        type="button"
                        className="btn btn-outline-dark"
                        style={{
                            fontSize: ".7rem",
                        }}
                        onClick={() => handleAddToCart(item)}
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
