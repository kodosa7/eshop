import Item from "./Item";

const Article = () => {
    const data = [
        {
            id: 1,
            name: "Item name 1",
            image: "https://satyr.dev/800x500/1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            price: 10
        },
        {
            id: 2,
            name: "Item name 2",
            image: "https://satyr.dev/800x500/2",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            price: 150
        },
        {
            id: 3,
            name: "Item name 3",
            image: "https://satyr.dev/800x500/3",
            description: "Quam lacus suspendisse faucibus interdum posuere lorem. Sit amet cursus sit amet dictum sit amet justo.",
            price: 3257
        },
        {
            id: 4,
            name: "Item name 4",
            image: "https://satyr.dev/800x500/4",
            description: "Rutrum tellus pellentesque eu tincidunt tortor. Odio ut sem nulla pharetra diam sit amet.",
            price: 9999999999.99
        },
        {
            id: 5,
            name: "Item name 5",
            image: "https://satyr.dev/800x500/5",
            description: "Condimentum vitae sapien pellentesque habitant morbi tristique.",
            price: 1.50
        },
        {
            id: 6,
            name: "Item name 6",
            image: "https://satyr.dev/800x500/6",
            description: "Odio facilisis mauris sit amet massa vitae.",
            price: 1234
        },
        {
            id: 7,
            name: "Item name 7",
            image: "https://satyr.dev/800x500/7",
            description: "Nunc mattis enim ut tellus elementum sagittis vitae et. Eu nisl nunc mi ipsum.",
            price: 800
        },
        {
            id: 8,
            name: "Item name 8",
            image: "https://satyr.dev/800x500/8",
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
                            id={ item.id }
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