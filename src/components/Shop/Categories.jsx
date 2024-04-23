const Categories = (props) => {
    const { categories } = props;

    return (
        <>
            <h2>Categories</h2>
            {categories.map((item, index) => (
                <div className="col-sm-6 col-md-4 col-lg-3">{item.charAt(0).toUpperCase() + item.slice(1)}</div>
            ))}
        </>
    );
};

export default Categories;
