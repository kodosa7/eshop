const beautifyCategoryName = (categoryName) => {
    let newCategoryName = categoryName;
    newCategoryName = newCategoryName
        .split("-")
        .reduce((formattedCategory, word) => {
            if (word === "mens") {
                return formattedCategory + "Men's ";
            } else if (word === "womens") {
                return formattedCategory + "Women's ";
            } else {
                return formattedCategory + word.charAt(0).toUpperCase() + word.slice(1) + " ";
            }
        }, "")
        .trim();
    return newCategoryName;
};

export default beautifyCategoryName;
