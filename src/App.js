import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import Form from "./Components/Mailer/Form";
function App() {
    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/contactUs" exact component={Form} />
            </Switch>
        </Router>

    );
}

export default App;
