
const Item = (props) => {
    const { id, name, description, image, price, addToCart } = props;

    const handleClick = () => {
        addToCart(id);
    }

    return (
        <div className="card h-100">
            <h3 className="card-header">{ name }</h3>
            <img className="card-img rounded-0" src={ image } alt="" />
            <div className="card-body">
                <p className="card-text">{ description }</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    { price } $
                    <button
                        className="btn btn-primary"
                        onClick={handleClick}
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Item;
