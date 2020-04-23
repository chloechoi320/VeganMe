import React, {useState, useEffect} from "react";
import "./welcome.css";

import Header from "../../comps/Header";
import Buttons from "../../comps/Buttons";

const WelcomePage = () => {
    return <div className="welcome-pg">
        <div className="VMLogo">logo</div>
        <div className="welcome-pg-h">
            <Header text="Welcome to VeganMe!" fontSize={24} />
        </div>
        <div className="welcome-txt">Your guide to veganism begins here.</div>
        <Buttons text="Get Started"/>
        <div className="welcome-url">I already have an account.</div>
    </div>
}

export default WelcomePage;