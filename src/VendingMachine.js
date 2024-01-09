import React from "react";
import Snacks from "./Snacks";
import Home from "./Home";
import './VendingMachine.css'

import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'


function VendingMachine(){

    return(
        <div className="container">

            <BrowserRouter>
            <Routes>
                    <Route 
                    exact path="/" 
                    element={<Home/>}/> 
            </Routes>

            <div>
            <nav className="navbar">
            <Link style={{backgroundColor: "red"}} to="/">Home</Link>
            <Link style={{backgroundColor: "orange"}} to="/orange-juice">Orange Juice</Link>
            <Link style={{backgroundColor: "brown"}} to="/cookies">Cookies</Link>
            <Link style={{backgroundColor: "yellow"}} to="/chips">Chips</Link>
            <Link style={{backgroundColor:"green"}} to="/soda">Soda</Link>
            <Link style={{backgroundColor:"pink"}} to="/pop-tart">Pop Tart</Link>
            <Link style={{backgroundColor: "mint"}} to="/bubble-gum">Bubble Gum</Link>
            </nav>
            </div>

                <Routes>
                    <Route 
                    exact path="/orange-juice" 
                    element={<Snacks 
                    item="orange juice" 
                    price="$2.25"/>} /> 
                </Routes>

                <Routes>
                    <Route 
                    exact path="/cookies" 
                    element={<Snacks 
                    item="cookies" 
                    price="$1.00"/>} /> 
                </Routes>

                <Routes>
                    <Route 
                    exact path="/chips" 
                    element={<Snacks 
                    item="chips" 
                    price="$1.25"/>} /> 
                </Routes>

                <Routes>
                    <Route 
                    exact path="/soda" 
                    element={<Snacks 
                    item="soda" 
                    price="$1.25"/>} /> 
                </Routes>

                <Routes>
                    <Route 
                    exact path="/bubble-gum" 
                    element={<Snacks 
                    item="bubble gum" 
                    price="$0.75"/>} /> 
                </Routes>

                <Routes>
                    <Route 
                    exact path="/pop-tart" 
                    element={<Snacks 
                    item="pop-Tart" 
                    price="$2.00"/>} /> 
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default VendingMachine;