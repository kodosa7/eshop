const Categories = (props) => {
    const { categories, handleSelectCategory } = props;

    return (
        <>
            <h2>Categories</h2>
            {categories.map((category, index) => (
                <div key={index} className="col-sm-6 col-md-4 col-lg-3">
                    <button type="button" onClick={() => handleSelectCategory(category)}>
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </button>
                </div>
            ))}
        </>
    );
};

export default Categories;
