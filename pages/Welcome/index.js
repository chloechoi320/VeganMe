import React, {useState, useEffect} from "react";
import "./welcome.css";


import Link from 'next/link';
import Router from 'next/router';

import Header from "../../comps/Header";
import Buttons from "../../comps/Buttons";

function ClickHome() {
    document.querySelector(".welcome-pg").style.right = "-100%";
    Router.push("/AccountSetUp");
}

const WelcomePage = () => {
    return <div className="welcome-pg" onClick={ClickHome}>
        <div className="VMLogo"><img src={require('./logo.png')}></img></div>
        <div className="welcome-pg-h">
            <Header text="Welcome to VeganMe!" fontSize={24} />
        </div>
        <div className="welcome-txt">Your guide to veganism begins here.</div>
        <Buttons text="Get Started"/>
        <div className="welcome-url">I already have an account.</div>
    </div>
}

export default WelcomePage;