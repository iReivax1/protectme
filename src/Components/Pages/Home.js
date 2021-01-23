import "../../App.css";
// import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";
import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="home">
                    <HeroSection section="home" />
                </div>
                <br/>
                <br/>
                <HeroSection section="sritang0" />
                <HeroSection section="sritang1" />
                <HeroSection section="sritang2" />
                <HeroSection section="sritang3" />
                <br></br>
                <HeroSection section="sritang4" />
                <br/>
                <HeroSection section="savemed0" />
                <br/>
                <div id="about">
                <HeroSection section="about" />
                </div>
                <br/>
                <Footer />
            </React.Fragment>
        )
    }
}

