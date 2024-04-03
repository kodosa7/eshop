import Item from "./Item";
import data from "./data.json";

const ItemList = ({ handleAddToCart, liftUpFromItem }) => {
    return (
        <>
            <div className="row row-gap-4">
                { data.map((item, index) => ( 
                    <div
                        key={index}
                        className="col-sm-6 col-md-4 col-lg-3"
                    >
                        <Item
                            id={ item.id }
                            name={ item.name }
                            image={ item.image }
                            description={ item.description }
                            price={ item.price }
                            handleAddToCart={ handleAddToCart }
                            liftUpFromItemList={ liftUpFromItem }
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ItemList;