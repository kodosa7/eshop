import { useState, useEffect } from "react";
import Product from "./Product";
import Cart from "./Cart";
import Categories from "./Categories";
import Search from "./Search";
import beautifyCategoryName from "../utils/utils.js";

export const Shop = () => {
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [isOrderSent, setIsOrderSent] = useState(false);
    const [products, setProducts] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [categories, setCategories] = useState([]);
    const [category, setCategory] = useState("");
    const [isCategoriesLoading, setIsCategoriesLoading] = useState(false);
    const [isProductsLoading, setIsProductsLoading] = useState(false);
    const [searchedValue, setSearchedValue] = useState("");
    const [searchInputValue, setSearchInputValue] = useState("");
    const [isFetchProductError, setIsFetchProductError] = useState(false);
    const [isFetchCategoriesError, setIsFetchCategoriesError] = useState(false);
    const [isCheckoutFormVisible, setIsCheckoutFormVisible] = useState(false);

    // fetch categories from API (first time)
    useEffect(() => {
        fetchCategories();
    }, []);

    // fetch products from API (first time and everytime 'category' state changes)
    // using async func to ignore double trigger of the effect when in StrictMode
    useEffect(() => {
        let ignore = false;

        async function startFetching() {
            await null;
            if (!ignore) {
                fetchProducts();
            }
        }
        startFetching();

        return () => {
            ignore = true;
        };
    }, [searchedValue, category]);

    // fetch products API
    const fetchProducts = () => {
        let fetchUrl = "";
        const skip = products.length;
        if (!category && searchedValue === "") {
            fetchUrl = `https://dummyjson.com/products?skip=${skip}&limit=8`;
        } else if (category && searchedValue === "") {
            fetchUrl = `https://dummyjson.com/products/category/${category}?skip=${skip}&limit=8`;
        } else {
            fetchUrl = `https://dummyjson.com/products/search?q=${searchedValue}&skip=${skip}&limit=8`;
        }

        setIsProductsLoading(true);
        fetch(fetchUrl)
            .then((res) => res.json())
            .then((data) => {
                setTotalCount(data.total);
                // calculate product discount price and put it to fetched data object
                const productsWithDiscountPrice = data.products.map((product) => {
                    const discountPrice = Math.round(
                        product.price - (product.discountPercentage * product.price) / 100
                    );
                    return { ...product, discountPrice };
                });
                setProducts((prev) => [...prev, ...productsWithDiscountPrice]);
                setIsProductsLoading(false);
            })
            .catch(() => {
                setIsFetchProductError(true);
            });
    };

    // fetch all categories API
    const fetchCategories = () => {
        setIsCategoriesLoading(true);
        fetch(`https://dummyjson.com/products/categories/`)
            .then((res) => res.json())
            .then((data) => {
                setCategories(data);
                setIsCategoriesLoading(false);
            })
            .catch(() => {
                setIsFetchCategoriesError(true);
            });
    };

    const handleSelectCategory = (newCategory) => {
        setSearchedValue("");
        setSearchInputValue("");
        if (category !== newCategory) {
            setCategory(newCategory);
            setProducts([]);
        }
    };

    // Insert product to cart (Add to cart button pressed)
    const handleAddToCartBtn = (product) => {
        if (selectedProducts.some((prod) => prod.id === product.id)) {
            increaseQuantity(product.id);
        } else {
            setSelectedProducts([...selectedProducts, { ...product, quantity: 1, totalPrice: product.discountPrice }]);
        }
        // hide "order was sent" green element
        setIsOrderSent(false);
    };

    // Remove from cart button pressed
    const handleRemoveFromCart = (product) => {
        const updatedProducts = selectedProducts.filter((prod) => prod.id !== product.id);
        setSelectedProducts(updatedProducts);
        // hide "order was sent" green element
        setIsOrderSent(false);
    };

    // increase quantity (+)
    const increaseQuantity = (id) => {
        const newCart = selectedProducts.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1,
                    totalPrice: product.discountPrice * (product.quantity + 1),
                };
            } else {
                return product;
            }
        });
        setSelectedProducts(newCart);
    };

    // increase quantity (-)
    const decreaseQuantity = (id) => {
        const newCart = selectedProducts.map((product) => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity - 1,
                    totalPrice: product.discountPrice * (product.quantity - 1),
                };
            } else {
                return product;
            }
        });
        setSelectedProducts(newCart);
    };

    // remove from cart button
    const onRemoveFromCart = (product) => {
        const updatedProducts = selectedProducts.filter((prod) => prod.id !== product.id);
        setSelectedProducts(updatedProducts);
        handleRemoveFromCart(product); // remove button disabled

        // if cart gets emptied then hide the checkout form
        if (selectedProducts.length === 1) {
            setIsCheckoutFormVisible(false);
        }
    };

    return (
        <>
            <h1>E-shop</h1>
            {/* Cart */}
            <Cart
                productsInCart={selectedProducts}
                setProductsInCart={setSelectedProducts}
                onIncrease={handleAddToCartBtn}
                onDecrease={decreaseQuantity}
                handleRemoveFromCartBtn={handleRemoveFromCart}
                isOrderSent={isOrderSent}
                setIsOrderSent={setIsOrderSent}
                onRemove={onRemoveFromCart}
                isCheckoutFormVisible={isCheckoutFormVisible}
                setIsCheckoutFormVisible={setIsCheckoutFormVisible}
            />
            {/* Search */}
            <Search
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                setCategory={setCategory}
                setProducts={setProducts}
                onSearch={setSearchedValue}
            />

            <div className="row">
                <div className="col-3">
                    {/* Categories */}
                    {isFetchCategoriesError ? (
                        <p>No categories found, no internet?</p>
                    ) : (
                        <Categories
                            categories={categories}
                            category={category}
                            handleSelectCategory={handleSelectCategory}
                            isLoadingMessage={isCategoriesLoading}
                        />
                    )}
                    {isCategoriesLoading && !isFetchCategoriesError && <p>Loading categories...</p>}
                </div>

                <div className="col">
                    {searchedValue === "" ? (
                        !category ? (
                            <h2>All products</h2>
                        ) : (
                            <h2>{beautifyCategoryName(category)}</h2>
                        )
                    ) : (
                        <h2>Search results</h2>
                    )}

                    {isFetchProductError ? (
                        <p>No products found, no internet?</p>
                    ) : isProductsLoading ? (
                        <p>Loading products...</p>
                    ) : products.length !== 0 ? (
                        <div className="row row-gap-4">
                            {products.map((prod) => (
                                <div key={prod.id} className="col-sm-6 col-md-4 col-lg-3">
                                    <Product product={prod} onAddToCartBtn={() => handleAddToCartBtn(prod)} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        !isProductsLoading && <p>There are no such products :-(</p>
                    )}

                    {products.length < totalCount && !isProductsLoading && (
                        <div className="row">
                            <button className="btn btn-primary my-4" onClick={() => fetchProducts()}>
                                Load next items
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Shop;
