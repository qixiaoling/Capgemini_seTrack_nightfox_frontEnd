import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../src/Pages/Home";
import PonyDetails from "./Component/ConcertDetails";
import Navbar from "./Component/Navbar";
import SearchDetails from "../src/Pages/SearchDetails"
import Footer from "./Component/Footer";



function App() {

    // const[searchText, setSearchText] = useState('');

    return (
        <Router>
            <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>

        </Router>



    );
}

export default App;