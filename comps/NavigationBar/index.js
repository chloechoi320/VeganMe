import React from 'react';
import './navigationbar.css';
import Link from 'next/link';
import Router from 'next/router';
import {FiMapPin} from 'react-icons/fi';
import {FiHome}  from 'react-icons/fi';
import {GoGear} from 'react-icons/go';
import {FaRegStar} from 'react-icons/fa';

function ClickHome() {
    document.querySelector("#home").style.right = "-100%";
    Router.push("/Home");
}

function ClickMap() {
    document.querySelector("#map").style.right = "-100%";
    Router.push("/Locations");
}

function ClickStar() {
    document.querySelector("#star").style.right = "-100%";
    Router.push("/Favourites")
}

function ClickGear() {
    document.querySelector("#gear").style.right = "-100%";
    Router.push("/Settings");
}

const NavigationBar = () => <div>
    <nav class="bar">
        <div class="container">
            <div id="home" onClick={ClickHome}>
                <FiHome size="1.8em"/>
            </div>
            <div id="map" onClick={ClickMap}>
                <FiMapPin size="1.8em"/>
            </div>
            <div id="star" onClick={ClickStar}>
                <FaRegStar size="1.8em"/>
            </div>
            <div id="gear" onClick={ClickGear}>
                <GoGear size="1.8em"/>
            </div>
        </div>
    </nav>
</div>

export default NavigationBar;