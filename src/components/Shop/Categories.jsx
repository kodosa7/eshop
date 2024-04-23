const Categories = (props) => {
    const categories = props.categories;

    console.log(typeof categories);
    console.log(categories);

    return (
        <>
            <h2>Categories</h2>
            {categories.map((item, index) => (
                <div className="col-sm-6 col-md-4 col-lg-3">{item}</div>
            ))}
        </>
    );
};

export default Categories;
