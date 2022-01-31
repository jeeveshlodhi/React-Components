import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Comp from "./Pages/Comp";
import Home from "./Pages/Home";


const App = () => {
    console.log("App")
    return (
        <Router>
            <Routes>
                <Route exact path='/' element = {<Home/> } > </Route>
                <Route exact path='comp' element = {<Comp/> } > </Route>
            </Routes>
        </Router>
    );
}

export default App;