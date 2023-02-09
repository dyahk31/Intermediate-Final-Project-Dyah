import React from "react";
import icon from "../images/icon.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <div className="home-content">
            <div className="home-text">
                <h1><b>Nora Laundry</b></h1>
                <h6>#1 Laundry Specialist</h6>
            </div>

            <div className="content">
                <div className="button-start">
                    <button>
                        <Link to="/service" className="link">
                            <b>Get Started</b>
                        </Link>
                    </button>
                </div>

                <div className="content-img">
                    <img src={icon} alt="icon" width="80%" height="auto"/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
