const Categories = ({ categories, category, handleSelectCategory, isLoadingMessage }) => {
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
                {isLoadingMessage ? "" : "All Products"}
            </a>

            {categories.map((categoryItem, i) => (
                <div key={i} className="col">
                    <a
                        className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                            category === categoryItem.slug ? "link-info" : "link-dark"
                        }`}
                        href="#"
                        onClick={() => handleSelectCategory(categoryItem.slug)}
                    >
                        {categoryItem.name}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
