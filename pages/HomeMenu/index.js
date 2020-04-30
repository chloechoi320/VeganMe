import React, {useState, useEffect} from "react";
import "./homemenu.css";
import Link from 'next/link';
import Router from 'next/router';
import Home from '../Home';
import HamburgerMenu from '../../comps/HamburgerMenu';


function ClickHCS() {
    document.querySelector("#homec_hamburgermenu").style.right = "-100%";
    Router.push("/Home");
}

const HomeMenu = ({}) => {

    return <div id="homec">
    <div id="homec_page">
        <Home />
    </div>
    <div id="homec_hamburgermenu" onClick={ClickHCS}>
        <HamburgerMenu />
    </div>
    </div>
}

HomeMenu.defaultProps = {

}

export default HomeMenu;