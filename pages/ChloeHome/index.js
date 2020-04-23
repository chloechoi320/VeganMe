import React, {useState, useEffect} from "react";
import "./home.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import Buttons from "../../comps/Buttons";

// function ClickHome() {
//     document.querySelector("#home_page").style.right = "-100%";
//     Router.push("/Recipe");
// }

const HomePage = ({}) => {
    return <div id="home_page">
        <div id="home_logo">
            <img src={require('./logo.png')}></img>
        </div>
        
        <div id="home_header">
            <Header text="Welcome to" fontSize={16}/>
            <Header text="VeganMe" fontSize={16}/>
        </div>

        <div id="home_copy">
            <p>Your guide to veganism begins here.</p>
        </div>

        <div id="home_button">
            <Buttons text="Get Started"/>
        </div>

        <div id="home_signin">
            <p>I already have an account.</p>
        </div>

    </div>
}

HomePage.defaultProps = {

}

export default HomePage;