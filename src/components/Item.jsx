const Item = (props) => {
    const itemName = props.name;
    const itemDescription = props.description;
    const itemImage=props.image;
    const itemPrice=props.price;

    return (
        <div className="card">
            <h3 className="card-header">{ itemName }</h3>
            <img className="card-img rounded-0" src={ itemImage } alt="" />
            <div className="card-body">
                <p className="card-text">{ itemDescription }</p>
            </div>
            <div className="card-footer">
                <div className="d-flex justify-content-between align-items-center text-wrap">
                    { itemPrice } $
                    <button className="btn btn-primary">Add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default Item;