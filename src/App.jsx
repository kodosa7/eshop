import Header from "./components/Header";
import Cart from "./components/Cart";
import Article from "./components/Article";

const App = (props) => {
    const cart = props.cart;

    return (
        <div className="container">
            <Header />
            <Cart cart={ cart } />
            <Article />
        </div>
    )
}

export default App;