import React, { useEffect, useState } from "react";
import { Link, useLocation, Redirect } from "react-router-dom";
import { Button } from "./Button.js";
import "./Navbar.css";

function Navbar(props) {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const location = useLocation();
    const scrollToAbout = () => {
        console.log(location.pathname)
        if(location.pathname === "/"){
            const anchor = document.querySelector('#about')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
        else{
            <Redirect to="/" />
        }
    }
    const scrollToHome = () => {
        console.log(location.pathname)
        if(location.pathname === "/"){
            const anchor = document.querySelector('#home')
            anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
        else{
            <Redirect to="/" />
        }
    }
    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("reize", showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    ProtectMe
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={()=>{closeMobileMenu(); scrollToHome();}}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/" className="nav-links" onClick={ () =>{closeMobileMenu();scrollToAbout();}}>
                            About Us
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">Contact Us</Button>}
            </div>
        </nav >

    );
}

export default Navbar;
