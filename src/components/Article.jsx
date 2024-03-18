import Item from "./Item";

const Article = () => {

    const data = [
        {   name: "Item name 1",
            image: "image1",
            description: "Item description is here, but it's not a short one 1.",
            price: 10
        },
        {
            name: "Item name 2",
            image: "image2",
            description: "Item description is here, but it's not a short one 2.",
            price: 10
        },
        {
            name: "Item name 3",
            image: "image3",
            description: "Item description is here, but it's not a short one 3.",
            price: 10
        },
        {
            name: "Item name 4",
            image: "image4",
            description: "Item description is here, but it's not a short one 4.",
            price: 10
        },
        {
            name: "Item name 5",
            image: "image5",
            description: "Item description is here, but it's not a short one 5.",
            price: 10
        },
        {
            name: "Item name 6",
            image: "image6",
            description: "Item description is here, but it's not a short one 6.",
            price: 10
        },
        {
            name: "Item name 7",
            image: "image7",
            description: "Item description is here, but it's not a short one 7.",
            price: 10
        },
        {
            name: "Item name 8",
            image: "image8",
            description: "Item description is here, but it's not a short one 8.",
            price: 10
        }
    ]

    return (
        <>
            { data.map((item, index) => ( 
                <Item
                    key={ index }
                    name={ item.name }
                    image={ item.image }
                    description={ item.description }
                    price={ item.price }
                />
            ))}
        </>
    );
};

export default Article;