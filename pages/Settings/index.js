import React, {useState, useEffect} from "react";
import "./settings.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from '../../comps/Header';
import NavigationBar from '../../comps/NavigationBar';

import {GoGear} from 'react-icons/go';

function GoUserPreference() {
    document.querySelector("#settings_page").style.right = "-100%";
    Router.push("/UserPreference");
}

const Settings = ({}) => {
    return <div>
    <div id="settings_page">
        <div id="settings_header">
            <div id="settings_icon"><GoGear size="0.75em" color="#FFF" /></div>
            <Header text="Settings" fontSize={12}/>
        </div>
        <div id="settings_list>">
            <ul>
                <li><Header text="User Preference" fontSize={9}/></li>
                <li><Header text="FAQ" fontSize={9}/></li>
                <li id="border-bottom"><Header text="Tutorial" fontSize={9}/></li>
            </ul>
        </div>
        </div>
            <NavigationBar />
    </div>
}

Settings.defaultProps = {

}

export default Settings;