import Item from "./Item";
import image1 from "/src/assets/1.png";
import image2 from "/src/assets/2.png";
import image3 from "/src/assets/3.png";
import image4 from "/src/assets/4.png";
import image5 from "/src/assets/5.png";
import image6 from "/src/assets/6.png";
import image7 from "/src/assets/7.png";
import image8 from "/src/assets/8.png";

const Article = () => {

    const data = [
        {   name: "Item name 1",
            image: image1,
            description: "Item description is here, but it's not a short one 1.",
            price: 10
        },
        {
            name: "Item name 2",
            image: image2,
            description: "Item description is here, but it's not a short one 2.",
            price: 10
        },
        {
            name: "Item name 3",
            image: image3,
            description: "Item description is here, but it's not a short one 3.",
            price: 10
        },
        {
            name: "Item name 4",
            image: image4,
            description: "Item description is here, but it's not a short one 4.",
            price: 10
        },
        {
            name: "Item name 5",
            image: image5,
            description: "Item description is here, but it's not a short one 5.",
            price: 10
        },
        {
            name: "Item name 6",
            image: image6,
            description: "Item description is here, but it's not a short one 6.",
            price: 10
        },
        {
            name: "Item name 7",
            image: image7,
            description: "Item description is here, but it's not a short one 7.",
            price: 10
        },
        {
            name: "Item name 8",
            image: image8,
            description: "Item description is here, but it's not a short one 8.",
            price: 10
        }
    ]

    return (
        <>
            <div className="row row-gap-4">
                { data.map((item, index) => ( 
                    <div
                        key={index}
                        className="col-sm-6 col-md-4 col-lg-3"
                    >
                        <Item
                            name={ item.name }
                            image={ item.image }
                            description={ item.description }
                            price={ item.price }
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Article;