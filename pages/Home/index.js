import React, {useState, useEffect} from "react";
import "./home.css";
import Settings from "../../comps/Settings";
import Header from "../../comps/Header";
import { MdRestaurant } from 'react-icons/md';
import {FaUserCircle} from 'react-icons/fa';
import {IoMdApps} from 'react-icons/io';
import {FaWineGlassAlt} from 'react-icons/fa';
import GreyButton from '../../comps/GreyButton';
import CategoryBox from '../../comps/CategoryBox';
import CategoryBoxforRecipes from '../../comps/CategoryBoxforRecipes';
import NavigationBar from '../../comps/NavigationBar';

const Home = ({}) => {
    return <div id="home_page">
    <div id="home_settings">
        <Settings />
    </div>
    <div className="head">
    <div id="home_user">
        <FaUserCircle size="4.5em" color="#789174"/>
    </div>
    <div id="home_header">
        <Header text="Good Afternoon!" fontSize={14}/>
    </div>
    </div>
    <div id="home_greybutton">
    {/* <IoMdApps size="2em"/>*/}
    <GreyButton text="Categories"></GreyButton>
    </div>
    <div id="home_categorybox1">
        <CategoryBox description="This savory vegan breakfast bowl recipe features healthy…"/>
    </div>
    <div id="home_categorybox2">
        <CategoryBoxforRecipes description="Innovative vegan & vegetarian dishes are the draw at this…"/>
    </div>
    <div id="home_more">
        <p>Load More</p>
    </div>
    <div id="home_navigationbar">
        <NavigationBar />
    </div>
    </div>
}

Home.defaultProps = {

}

export default Home;