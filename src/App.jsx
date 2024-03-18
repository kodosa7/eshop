import Header from "./components/Header";
import Cart from "./components/Cart";
import Article from "./components/Article";


const App = () => {
    return (
        <>
            <div className="container">
                <Header />
                <Cart />
                <Article />
            </div>
        </>
    )
}

export default App;