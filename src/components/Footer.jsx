import logo from "/src/assets/logo.svg";
import mascot from "/src/assets/mascot.webp";
import { getYear } from "../utils/utils.js";
import { useState } from "react";

const Footer = () => {
    const [currentYear, setCurrentDate] = useState(getYear());

    return (
        <footer className="footer-container mt-4 pb-5 position-relative row pt-4">
            <div className="col-12 col-md-3 mb-3 mb-md-0 text-center text-md-start">
                <img src={ logo } alt="Logo" className="img-fluid" style={{ maxHeight: "50px", position: "relative", zIndex: 2 }} />
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
                    <li><a href="#">X</a></li>
                </ul>
            </div>
            {/* <div className="position-absolute top-0 end-0" style={{ zIndex: 1, maxWidth: "3%" }}>
                <img 
                    src={mascot} 
                    alt="Mascot" 
                    className="img-fluid"
                />
            </div> */}
            <div className="perex row pt-4 d-flex justify-content-center">
                ❤️ © {currentYear} Azia.mart Limited | Privacy Policy
            </div>
        </footer>
    )
}

export default Footer;