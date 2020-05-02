import React from "react";
import "./hamburgermenu.css";
import Link from 'next/link';
import Router from 'next/router';

function ClickFavourites() {
    document.querySelector(".hm-container").style.right = "-100%";
    Router.push("/Favourites");
}

function ClickUP() {
    document.querySelector(".hm-container").style.right = "-100%";
    Router.push("/UserPreference");
}

const HamburgerMenu = () => <div className="hm-container">
    <ul>
        <li onClick={ClickFavourites}>Favourites</li>
        <li onClick={ClickUP}>User Preferences</li>
        <li>Tutorial</li>
        <li>FAQ</li>
    </ul>
</div>

export default HamburgerMenu;