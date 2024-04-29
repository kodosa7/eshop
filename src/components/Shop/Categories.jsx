const Categories = (props) => {
    const { categories, category, handleSelectCategory } = props;

    return (
        <>
            <h2>Categories</h2>
            {category ? (
                <a
                    className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    href="#"
                    onClick={() => handleSelectCategory("")}
                >
                    All Products
                </a>
            ) : (
                <a
                    className="link-info link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                    href="#"
                    onClick={() => handleSelectCategory("")}
                >
                    All Products
                </a>
            )}
            {categories.map((selectedCategory, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                    <a
                        className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                            category === selectedCategory ? "link-info" : "link-dark"
                        }`}
                        href="#"
                        onClick={() => handleSelectCategory(selectedCategory)}
                    >
                        {selectedCategory}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
