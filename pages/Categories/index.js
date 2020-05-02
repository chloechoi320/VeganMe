import React, {useState, useEffect} from "react";
import "./categories.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import {FaUserCircle} from 'react-icons/fa';
import GBforClose from '../../comps/GBforClose';
import CategoriesDropdown from '../../comps/CategoriesDropdown';
import NavigationBar from '../../comps/NavigationBar';


function ClickClose() {
    document.querySelector("#homecd_greybutton").style.right = "-100%";
    Router.push("/Home");
}

const Categories = ({}) => {
    return <div id="homecd_page">
    <div className="homecd_head">
    <div id="homecd_user">
        <FaUserCircle size="4.5em" color="#789174"/>
    </div>
    <div id="homecd_header">
        <Header text="Good Afternoon!" fontSize={14}/>
    </div>
    </div>
    <div id="homecd_greybutton" onClick={ClickClose}>
    <GBforClose />
    </div>
    <div id="homecd_categoriesdropdown">
    <CategoriesDropdown />
    </div>
    <div id="homecd_navigationbar">
        <NavigationBar />
    </div>
    </div>
}

Categories.defaultProps = {

}

export default Categories;