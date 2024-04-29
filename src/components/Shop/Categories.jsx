const Categories = (props) => {
    const { categories, category, handleSelectCategory } = props;

    return (
        <>
            <h2>Categories</h2>
            {category && (
                <a href="#" onClick={() => handleSelectCategory("")}>
                    All Products
                </a>
            )}
            {categories.map((category, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                    <a href="#" onClick={() => handleSelectCategory(category)}>
                        {category}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
