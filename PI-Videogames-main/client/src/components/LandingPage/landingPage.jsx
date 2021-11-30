import React from "react";
import { Link } from "react-router-dom";
import "./landingPage.scss";

const LandingPage = () => {
return(
    <div className="landing">
        <Link to="/home">
            <button className="landingBtn">Play</button>
        </Link>
    </div>
)
}

export default LandingPage;