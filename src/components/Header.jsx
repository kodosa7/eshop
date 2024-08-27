import logo from "/src/assets/logo.svg";
import mascot from "/src/assets/mascot.webp";
import Search from "./Search";

const Header = ({ searchInputValue, setSearchInputValue, onSubmitSearchForm }) => {
    return (
        <header className="container mb-4 position-relative">
            <div className="row pt-4">
                <div className="col-12 col-md-3 mb-3 mb-md-0 text-center text-md-start">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: "50px", position: "relative", zIndex: 2 }} />
                </div>
                <div className="col-12 col-md-6 position-relative" style={{ zIndex: 2 }}>
                    <div className="d-flex justify-content-center">
                        <div className="w-100 mt-2" style={{ maxWidth: "500px" }}>
                            <Search 
                                searchInputValue={searchInputValue}
                                setSearchInputValue={setSearchInputValue}
                                onSubmitSearchForm={onSubmitSearchForm}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="position-absolute top-0 end-0" style={{ zIndex: 1, maxWidth: "15%" }}>
                <img 
                    src={mascot} 
                    alt="Mascot" 
                    className="img-fluid"
                />
            </div>
        </header>
    )
}

export default Header;