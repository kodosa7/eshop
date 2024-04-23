const Categories = (props) => {
    const categories = props.categories;
    return (
        <>
            <h2>Categories</h2>
            {/* {categories.forEach((category) => (
                <div className="col-sm-6 col-md-4 col-lg-3">{category}</div>
            ))} */}
            {typeof categories}
        </>
    );
};

export default Categories;
