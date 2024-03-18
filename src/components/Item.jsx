const Item = (props) => {
    const itemName = props.name;
    const itemDescription = props.description;
    const itemImage=props.image;
    const itemPrice=props.price;

    return (
        <div className="card">
            <h3>{ itemName }</h3>
            <img src={ itemImage } alt="" />
            <p>{ itemDescription }</p>
            <div className="d-md-flex justify-content-between align-items-center">
                { itemPrice } $
                <button className="btn btn-primary">Add to cart</button>
            </div>
        </div>
    );
};

export default Item;