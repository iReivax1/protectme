import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Contact us for more information
        </p>
                <p className='footer-subscription-text'>
                    ask@protectmi2.com
        </p>

            </section>
            {/* <div className="footer-links">
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>About Us</h2>
                        <Link to={{pathname: "http://scse.ntu.edu.sg/aboutus/Pages/Overview.aspx"}}
                              target="_blank">Overview</Link>
                        <Link to={{pathname: "http://scse.ntu.edu.sg/aboutus/career/Pages/default.aspx"}}
                              target="_blank">Career Prospects</Link>
                        <Link to={{pathname: "https://www.ntu.edu.sg/Pages/Disclaimer.aspx"}} target="_blank">Terms of
                                                                                                              Service</Link>
                        <Link to={{pathname: "https://www.ntu.edu.sg/Pages/Privacy.aspx"}} target="_blank">Data
                                                                                                           protection
                                                                                                           and
                                                                                                           privacy</Link>
                        <Link to={{pathname: "https://www.ntu.edu.sg/Pages/Copyright.aspx"}}
                              target="_blank"> Copyright</Link>
                    </div>
                    <div className="footer-link-items">
                        <h2>Contact Us</h2>
                        <Link to={{pathname: "http://scse.ntu.edu.sg/ContactUs/Pages/General-Office.aspx"}}
                              target="_blank">Contact</Link>
                        <Link to={{pathname: "http://scse.ntu.edu.sg/Pages/Home.aspx"}} target="_blank">NTU
                                                                                                        Website</Link>
                    </div>
                </div>
                <div className="footer-link-wrapper">
                    <div className="footer-link-items">
                        <h2>Social Media</h2>
                        <Link to={{pathname: "https://www.instagram.com/scse_ntu/"}} target="_blank">Instagram</Link>
                        <Link to={{pathname: "https://www.facebook.com/scse.ntu"}} target="_blank">Facebook</Link>
                        <Link to={{pathname: "https://www.youtube.com/user/SCEMarketing"}}
                              target="_blank">Youtube</Link>
                    </div>
                </div>
            </div> */}
            <section className="social-media">
                <div className="social-media-wrap">
                    <div className="footer-logo">

                        <Link to="/" className="social-logo">
                            <i class="fas fa-shield-alt"></i>        ProtectMe
                            {/* <i class='fab fa-typo3' /> */}
                        </Link>
                    </div>

                    {/* <div className="social-icons">
                        <Link
                            className="social-icon-link facebook"
                            to={{pathname: "https://www.facebook.com/scse.ntu"}}
                            target="_blank"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"/>
                        </Link>
                        <Link
                            className="social-icon-link instagram"
                            to={{pathname: "https://www.instagram.com/scse_ntu/"}}
                            target="_blank"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"/>
                        </Link>
                        <Link
                            className="social-icon-link youtube"
                            to={{pathname: "https://www.youtube.com/user/SCEMarketing"}}
                            target="_blank"
                            aria-label="Youtube"
                        >
                            <i className="fab fa-youtube"/>
                        </Link>
                        <Link
                            className="social-icon-link twitter"
                            to={{pathname: "https://www.linkedin.com/in/scse-ntu/"}}
                            target="_blank"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin"/>
                        </Link>
                    </div> */}
                </div>
            </section>
        </div>
    );
}

export default Footer;
