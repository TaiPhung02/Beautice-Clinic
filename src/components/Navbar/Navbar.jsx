import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo1 from "../../assets/img/logo1.png";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <div className="navbar">
            <div className="navbar__links-logo">
                <img src={logo1} alt="logo" />
            </div>
            <ul className={click ? "navbar__links active" : "navbar__links"}>
                <li className="navbar__links-item">
                    <Link to="/home2">Home</Link>
                </li>
                <li className="navbar__links-item">
                    <Link to="/about">About</Link>
                </li>
                <li className="navbar__links-item">
                    <Link to="/service">Service</Link>
                </li>
                <li className="navbar__links-item">
                    <Link to="/gallery">Gallery</Link>
                </li>
                <li className="navbar__links-item">
                    <Link to="/blog">Blog</Link>
                </li>
            </ul>
            <div className="navbar__cta">
                <div className="navbar__btn">
                    <Link to="/">
                        <button className="btn">Contact</button>
                    </Link>
                </div>
                <div
                    onClick={handleClick}
                    className={click ? "navbar__icons open" : "navbar__icons"}
                >
                    <div className="navbar__icon"></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
