import React, {useState, useEffect} from "react";
import "./resources.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from '../../comps/Header';
import NavigationBar from '../../comps/NavigationBar';

import {MdLocalGroceryStore} from 'react-icons/md';

function ClickMap() {
    document.querySelector("#resources_page").style.right = "-100%";
    Router.push("/Locations");
}

const Resources = ({}) => {
    return <div id="resources_page" onClick={ClickMap}>
            <BackHeader />
        <div id="resources_header">
            <div id="resources_icon"><MdLocalGroceryStore size="0.75em" color="#FFF" /></div>
            <Header text="Groceries" fontSize={12}/>
        </div>
        <div id="resources_list>">
            <ul>
                <li>Banana</li>
                <li>Kiwi</li>
                <li>Dates</li>
                <li>Pomegranate</li>
                <li>Carrots</li>
                <li>Artichokes</li>
                <li>Tomatoes</li>
                <li>Garlic</li>
                <li>Eggplant</li>
                <li>Ginger</li>
                <li>Sweet Potatoes</li>
            </ul>
        </div>
        <div id="resources_navigationbar">
            <NavigationBar />
        </div>
    </div>
}

Resources.defaultProps = {

}

export default Resources;