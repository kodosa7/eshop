import beautifyCategoryName from "../utils/utils.js";

const Categories = ({ categories, category, handleSelectCategory, isCategoriesLoadingMessage }) => {
    return (
        <>
            <h2>Categories</h2>
            <a
                className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                    category === "" ? "link-info" : "link-dark"
                }`}
                href="#"
                onClick={() => handleSelectCategory("")}
            >
                {isCategoriesLoadingMessage ? "" : "All Producsdfsdts"}
            </a>

            {categories.map((categoryItem) => (
                <div key={categoryItem} className="col">
                    <a
                        className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                            category === categoryItem ? "link-info" : "link-dark"
                        }`}
                        href="#"
                        onClick={() => handleSelectCategory(categoryItem)}
                    >
                        {beautifyCategoryName(categoryItem)}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
