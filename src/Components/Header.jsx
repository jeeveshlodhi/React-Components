import React from "react";
import '../Style/css/header.css';

const Header = () => {
    return(
        <div className="headerWrapper">
            <div className="logoWrapper">
                <span>React Components</span>
            </div>
            <div className="menuWrapper">
                <a href=""><div className="menuOption">Home</div></a>
                <a href=""><div className="menuOption">Components</div></a>
                <a href=""><div className="menuOption">About</div></a>
                <a href=""><div className="menuOption">Docs</div></a>
                <a href=""><div className="menuOption">Support</div></a>
                <a href=""><div className="menuOption">Contribute</div></a>
            </div>
            <a href="" className="rightMenu"><div>Sign In</div></a> 
        </div>
    );
}

export default Header