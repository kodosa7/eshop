import logo from "/src/assets/logo.svg";

const Header = () => {
    return (
        <div className="d-flex flex-row" style={{border: '1px solid red'}}>
            <div className="logo">
                <img src={ logo } alt="Logo" className="logo" />
            </div>
            <div className="title d-flex mt-2 align-items-end" style={{border: '1px solid blue'}}>MIRAMALL</div>
            <div className="subtitle d-flex align-items-end" style={{border: '1px solid green'}}>Where Retail Dreams Come True</div>
        </div>
    )
}

export default Header;