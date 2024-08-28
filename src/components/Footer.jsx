import logo from "/src/assets/logo.svg";
import mascot from "/src/assets/mascot.webp";

const Footer = () => {
    return (
        <footer className="container mb-4 position-relative">
            <div className="row pt-4">
                <div className="col-12 col-md-3 mb-3 mb-md-0 text-center text-md-start">
                    <img src={logo} alt="Logo" className="img-fluid" style={{ maxHeight: "50px", position: "relative", zIndex: 2 }} />
                </div>
                <div className="col-2">
                    <h6>Shipping</h6>
                    <ul>
                        <li><a href="#">Delivery Options</a></li>
                        <li><a href="#">Payment Options</a></li>
                        <li><a href="#">Returns and Refunds</a></li>
                        <li><a href="#">Terms and Conditions</a></li>
                        <li><a href="#">Advertising Terms and Conditions</a></li>
                        <li><a href="#">Fraud and Security</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <h6>Orders</h6>
                    <ul>
                        <li><a href="#">How to Buy</a></li>
                        <li><a href="#">Claims</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <h6>About us</h6>
                    <ul>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Compliance</a></li>
                    </ul>
                </div>
                <div className="col-2">
                    <h6>Follow us</h6>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">YouTube</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="position-absolute top-0 end-0" style={{ zIndex: 1, maxWidth: "3%" }}>
                <img 
                    src={mascot} 
                    alt="Mascot" 
                    className="img-fluid"
                />
            </div>
        </footer>
    )
}

export default Footer;