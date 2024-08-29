import logo from "/src/assets/logo.webp";
import heart from "/src/assets/heart.svg";
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
            <div className="col-3">
                <h6>Follow us</h6>
                <a href="#"><i className="bi bi-facebook fs-2 pe-3"></i></a>
                <a href="#"><i className="bi bi-instagram fs-2 pe-3"></i></a>
                <a href="#"><i className="bi bi-youtube fs-2 pe-3"></i></a>
                <a href="#"><i className="bi bi-twitter-x fs-2"></i></a>
            </div>
            <div className="perex row pt-4">
                <div className="d-flex justify-content-center">
                <img src={heart}></img>&nbsp;
                © {currentYear} Azia.mart |&nbsp;<i className="bi bi-info-circle-fill pe-1"></i><a href="#">Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;