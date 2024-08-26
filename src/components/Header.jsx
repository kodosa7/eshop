import logo from "/src/assets/logo.svg";

const Header = () => {
    return (
        <>
            <div className="mt-2 mb-2">
                <div className="logo">
                    <img src={ logo } alt="Logo" className="logo" />
                </div>
            </div>
            <div className="row mt-3 mb-3">
                <div className="col-sm-2">
                    <div className="row">
                        <div className="title-first">MIRA</div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="row">
                        <div className="title-second">&nbsp;</div>
                        <div className="title-second">MALL</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;