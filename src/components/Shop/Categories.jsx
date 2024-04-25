const Categories = (props) => {
    const { categories, handleSelectCategory } = props;

    return (
        <>
            <h2>Categories</h2>
            <button type="button" onClick={() => handleSelectCategory("")}>
                All Categories
            </button>
            {categories.map((category, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                    <button type="button" onClick={() => handleSelectCategory(category)}>
                        {category}
                    </button>
                </div>
            ))}
        </>
    );
};

export default Categories;
