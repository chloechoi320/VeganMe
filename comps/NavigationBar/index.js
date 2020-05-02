import React from 'react';
import './navigationbar.css';
import Link from 'next/link';
import Router from 'next/router';

function ClickMap() {
    document.querySelector("#map").style.right = "-100%";
    Router.push("/Locations");
}

function ClickHome() {
    document.querySelector("#home").style.right = "-100%";
    Router.push("/Home");
}

function ClickRecources() {
    document.querySelector("#resources").style.right = "-100%";
    Router.push("/Resources");
}

const NavigationBar = () => <div>
    <nav class="bar">
        <div class="container">
            <div id="map" onClick={ClickMap}>
                <img src={require('./map.png')}></img>
            </div>
            <div id="home" onClick={ClickHome}>
                <img src={require('./home.png')}></img>
            </div>
            <div id="resources" onClick={ClickRecources}>
                <img src={require('./resources.png')}></img>
            </div>
        </div>
    </nav>
</div>

export default NavigationBar;