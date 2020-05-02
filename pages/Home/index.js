import React, {useState, useEffect} from "react";
import "./home.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import {FaUserCircle} from 'react-icons/fa';
import CategoryBox from '../../comps/CategoryBox';
import CategoryBoxforRecipes from '../../comps/CategoryBoxforRecipes';
import NavigationBar from '../../comps/NavigationBar';
import GBforCategories from '../../comps/GBforCategories';

function ClickGB() {
    document.querySelector("#home_greybutton").style.right = "-100%";
    Router.push("/Categories");
}

function ClickRecipe() {
    document.querySelector("#home_categorybox1").style.right = "-100%";
    Router.push("/Recipe");
}

function ClickRestaurant() {
    document.querySelector("#home_categorybox1").style.right = "-100%";
    Router.push("/Restaurants");
}

const Home = ({}) => {
    return <div id="home_page">
    <div className="head">
    <div id="home_user">
        <FaUserCircle size="4.5em" color="#789174"/>
    </div>
    <div id="home_header">
        <Header text="Good Afternoon!" fontSize={14}/>
    </div>
    </div>
    <div id="home_greybutton" onClick={ClickGB}>
    <GBforCategories />
    </div>
    <div id="home_categorybox1" onClick={ClickRecipe}>
        <CategoryBox description="This savory vegan breakfast bowl recipe features healthy…"/>
    </div>
    <div id="home_categorybox2" onClick={ClickRestaurant}>
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