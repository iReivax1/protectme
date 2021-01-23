import "../App.css";
// import {Button} from "./Button";
import "./HeroSection.css";
import React, { Component } from 'react'

export default class Herosection extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        let homeText = null
        let aboutText = null
        let productText = null
        let image = null
        let companyText = null

        switch (this.props.section) {
            case "home":
                homeText = <p>We are here to connect you to the right equipments</p>
                productText = <p>Our partners and their products</p>
                break;
            case "about":
                aboutText = <p>We are a startup that is passionate about connecting the right organizations to benefit the medical community </p>
                break;
            case "sritang0":
                image = <img src="images/sritang/0.png" alt="Sri Tang" />
                break;
            case "sritang1":
                image = <img src="images/sritang/1.png" alt="powdered latex gloves" />
                break;
            case "sritang2":
                image = <img src="images/sritang/2.png" alt="powder free latex gloves" />
                break;
            case "sritang3":
                image = <img src="images/sritang/3.png" alt="nitrile gloves" />
                break;
            case "sritang4":
                image = <img src="images/sritang/4.png" alt="sterile latex gloves" />
                break;
            case "savemed0":
                image = <img className="savemed" src="images/savemed/0.png" alt="nitrile gloves" />
                break;
            default:
                break;
        }
        return (
            <div className="hero-container">
                <h1>{homeText}</h1>
                <h1>{companyText}</h1>
                <h3>{aboutText}</h3>
                <p>{productText}</p>
                {image}
            </div>
            /* <div className="hero-btns">
                <Button
                    className="btns"
                    buttonStyle="btn--outline"
                    buttonSize="btn--large"
                >
                    GET STARTED
                </Button>

                <Button
                    className="btns"
                    buttonStyle="btn--primary"
                    buttonSize="btn--large"
                    onClick={() => window.location.href = "/videos"}
                >
                    WATCH TOUR <i className="far fa-play-circle"/>
                </Button>

            </div> */
        )
    }
}
