import logo from "/src/assets/logo.svg";

const Header = () => {
    return (
        <div className="d-flex flex-row">
            <div className="logo">
                <img src={ logo } alt="Logo" className="logo" />
            </div>
            <div className="title d-flex mt-2 align-items-end">MIRAMALL</div>
            <div className="title-gap"></div>
            <div className="subtitle d-flex align-items-end">Where Retail Dreams Come True</div>
        </div>
    )
}

export default Header;