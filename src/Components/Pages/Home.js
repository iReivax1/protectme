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
                    <HeroSection section="home"/>
                </div>
                <HeroSection/>
                <div id="about">
                    <HeroSection section="about"/>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

