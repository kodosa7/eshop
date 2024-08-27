const Categories = ({ categories, category, handleSelectCategory, isLoadingMessage }) => {

    // Define a mapping of category slugs to Bootstrap icon classes
    const categoryIcons = {
        "": "bi-three-dots",
        "beauty": "bi-stars",
        "fragrances": "bi-droplet",
        "furniture": "bi-lamp",
        "groceries": "bi-cart",
        "home-decoration": "bi-house-heart",
        "kitchen-accessories": "bi-cup-hot",
        "laptops": "bi-laptop",
        "mens-shirts": "bi-person",
        "mens-shoes": "bi-gender-male",
        "mens-watches": "bi-watch",
        "mobile-accessories": "bi-phone",
        "motorcycle": "bi-bicycle",
        "skin-care": "bi-moisture",
        "smartphones": "bi-phone-fill",
        "sports-accessories": "bi-trophy",
        "sunglasses": "bi-sunglasses",
        "tablets": "bi-tablet",
        "tops": "bi-person-standing-dress",
        "vehicle": "bi-car-front",
        "womens-bags": "bi-handbag",
        "womens-dresses": "bi-gender-female",
        "womens-jewellery": "bi-gem",
        "womens-shoes": "bi-gender-female",
        "womens-watches": "bi-watch"
    };

    return (
        <>
            <h4>Categories</h4>
            <a className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                    category === "" ? "link-primary" : "link-dark"
                }`}
                href="#"
                onClick={() => handleSelectCategory("")}
            >
                {isLoadingMessage ? "" : (
                    <>
                        <i className={`bi ${categoryIcons[""]}`}></i>&nbsp;
                        All Products
                    </>
                )}
            </a>

            {categories.map((categoryItem, i) => (
                <div key={i} className="col">
                    
                    <a className={`link-underline link-underline-opacity-0 link-underline-opacity-75-hover ${
                            category === categoryItem.slug ? "link-primary" : "link-dark"
                        }`}
                        href="#"
                        onClick={() => handleSelectCategory(categoryItem.slug)}
                    >
                        <i className={`bi ${categoryIcons[categoryItem.slug] || 'bi-tag'}`}></i>&nbsp;
                        {categoryItem.name}
                    </a>
                </div>
            ))}
        </>
    );
};

export default Categories;