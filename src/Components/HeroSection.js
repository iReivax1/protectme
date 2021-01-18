import "../App.css";
// import {Button} from "./Button";
import "./HeroSection.css";
import React, { Component } from 'react'

export default class Herosection extends Component {
    constructor(props){
        super(props);
     
    }
    
    render() {
        let text = null
        switch (this.props.section) {
            case "about":
                text = <p>about</p>
                break;
            case "home":
                text = <p>hello</p>
                break;
            default:
                break;
        }
        return (
            <div className="hero-container">
                <h1>Welcome</h1>
            {text}
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
