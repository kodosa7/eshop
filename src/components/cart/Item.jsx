const Item = (props) => {
    const itemName = props.name;
    const itemDescription = props.description;
    const itemImage=props.image;
    const itemPrice=props.price;

    return (
        <>
            <p>{ itemName }</p>
            <p>{ itemImage }</p>
            <p>{ itemDescription }</p>
            <p>{ itemPrice }</p>
            <button>Add to cart</button>
        </>
    );
};

export default Item;