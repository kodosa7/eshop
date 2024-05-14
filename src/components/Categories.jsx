const Categories = ({ categories, category, handleSelectCategory }) => {
    return (
        <>
            <h2>Categories</h2>
            <a
                className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
                onClick={() => handleSelectCategory("")}
            >
                All Products
            </a>

            {categories.map((selectedCategory, index) => (
                <div key={index} className="col">
                    <a
                        className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                            category === selectedCategory ? "link-info" : "link-dark"
                        }`}
                        href="#"
                        onClick={() => handleSelectCategory(selectedCategory)}
                    >
                        {selectedCategory
                            .split("-")
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(" ")}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
