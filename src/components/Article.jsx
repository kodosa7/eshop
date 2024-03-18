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
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 10
        },
        {
            name: "Item name 2",
            image: image2,
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 150
        },
        {
            name: "Item name 3",
            image: image3,
            description: "Quam lacus suspendisse faucibus interdum posuere lorem. Sit amet cursus sit amet dictum sit amet justo.",
            price: 3257
        },
        {
            name: "Item name 4",
            image: image4,
            description: "Rutrum tellus pellentesque eu tincidunt tortor. Odio ut sem nulla pharetra diam sit amet.",
            price: 9999999999.99
        },
        {
            name: "Item name 5",
            image: image5,
            description: "Condimentum vitae sapien pellentesque habitant morbi tristique.",
            price: 1.50
        },
        {
            name: "Item name 6",
            image: image6,
            description: "Odio facilisis mauris sit amet massa vitae.",
            price: 1234
        },
        {
            name: "Item name 7",
            image: image7,
            description: "Nunc mattis enim ut tellus elementum sagittis vitae et. Eu nisl nunc mi ipsum.",
            price: 800
        },
        {
            name: "Item name 8",
            image: image8,
            description: "Id consectetur purus ut faucibus pulvinar. Vitae ultricies leo integer malesuada nunc vel risus commodo.",
            price: 79.95
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