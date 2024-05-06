const Item = (props) => {
    const { itemId, name, description, image, price, discountPercentage, rating, handleAddToCart, disabledButtons } =
        props;

    const stars = (rating) => {
        const starsArray = [];
        for (let i = 0; i < Math.abs(rating); i++) {
            starsArray.push("⭐");
        }
        console.log(starsArray, Math.abs(rating));
        return starsArray;
    };

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
                <li className="list-group-item">{stars(rating)}</li>
                <li className="list-group-item">Discount: {discountPercentage}</li>
            </ul>

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
