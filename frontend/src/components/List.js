import React from "react";
import logo  from '../images/logo.png';
import "../css/style.css";

const List = () => {
    return (
        <>
        <header>
        <nav className="navbar navbar-expand-lg">

            <div className="logoContainer">
                <img src={logo} alt="logo" width="50" height="auto" className="logo"/>
            </div>

                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="/service">Service</a>
                            </li>
                        </ul>               
                    </div>
                </div>
        </nav>
        </header>
        </>
    )
}

export default List;
