import beautifyCategoryName from "../utils/utils.js";

const Categories = ({ categories, category, handleSelectCategory, isCategoriesLoading }) => {
    return (
        <>
            <h2>Categories</h2>
            <a
                className="link-dark link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                href="#"
                onClick={() => handleSelectCategory("")}
            >
                {isCategoriesLoading ? "" : "All Products"}
            </a>

            {categories.map((selectedCategory) => (
                <div key={selectedCategory} className="col">
                    <a
                        className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                            category === selectedCategory ? "link-info" : "link-dark"
                        }`}
                        href="#"
                        onClick={() => handleSelectCategory(selectedCategory)}
                    >
                        {beautifyCategoryName(selectedCategory)}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
