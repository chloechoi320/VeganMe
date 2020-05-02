// import Link from 'next/link';
// import Router from 'next/router';
// import './app.css';

// function ClickIndex() {
//     document.querySelector("#index_page").style.right = "-100%";
//     Router.push("/Welcome");
// }

// const Index = () =>
//     <div id="index_page" onClick={ClickIndex}>
//     Hello.
//     </div>

// export default Index;

import React, {useState, useEffect} from "react";
import "./Welcome/welcome.css";
import './app.css';
import Link from 'next/link';
import Router from 'next/router';

import Header from "../comps/Header";
import Buttons from "../comps/Buttons";

function ClickHome() {
    document.querySelector(".welcome-url").style.right = "-100%";
    Router.push("/Home");
}

function ClickASU() {
    document.querySelector(".welcome-url").style.right = "-100%";
    Router.push("/AccountSetUp");
}

const WelcomePage = () => {
    return <div className="welcome-pg">
        <div className="VMLogo"><img src={require('./logo.png')}></img></div>
        <div className="welcome-pg-h">
            <Header text="Welcome to VeganMe!" fontSize={24} />
        </div>
        <div className="welcome-txt">Your guide to veganism begins here.</div>
        <Buttons text="Get Started" onClick={ClickASU} />
        <div className="welcome-url" onClick={ClickHome}>I already have an account.</div>
    </div>
}

export default WelcomePage;