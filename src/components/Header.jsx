import logo from "/src/assets/logo.svg";
import Search from "./Search";

const Header = ({ searchInputValue, setSearchInputValue, onSubmitSearchForm }) => {
    return (
        <header className="container mt-4 mb-4">
            <div className="row align-items-center">
                <div className="col-12 col-md-3 mb-3 mb-md-0 text-center text-md-start">
                    <img src={logo} alt="Logo" className="img-fluid" style={{maxHeight: "50px"}} />
                </div>
                <div className="col-12 col-md-6">
                    <div className="d-flex justify-content-center">
                        <div className="w-100" style={{maxWidth: "500px"}}>
                            <Search 
                                searchInputValue={searchInputValue}
                                setSearchInputValue={setSearchInputValue}
                                onSubmitSearchForm={onSubmitSearchForm}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    {/* You can add additional header elements here if needed */}
                </div>
            </div>
        </header>
    )
}

export default Header;