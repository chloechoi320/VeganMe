import React, {useState, useEffect} from "./node_modules/react";
import "./homemenu.css";
import Link from './node_modules/next/link';
import Router from './node_modules/next/router';
import Home from '../Home';
import HamburgerMenu from '../../comps/HamburgerMenu';


function ClickHCS() {
    document.querySelector("#homec_hamburgermenu").style.right = "-100%";
    Router.push("/Home");
}

const Homemenu = ({}) => {

    return <div id="homec">
    <div id="homec_page">
        <Home />
    </div>
    <div id="homec_hamburgermenu" onClick={ClickHCS}>
        <HamburgerMenu />
    </div>
    </div>
}

Homemenu.defaultProps = {

}

export default Homemenu;