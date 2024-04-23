const Categories = (props) => {
    const { categories, handleSelectCategory } = props;

    return (
        <>
            <h2>Categories</h2>
            {categories.map((item, index) => (
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <a key={index} onClick={() => handleSelectCategory(item)} href={item}>
                        {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;
