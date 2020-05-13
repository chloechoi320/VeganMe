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

import {data, changeData} from '../data';

console.log(data);

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
    return <div>
    <div id="home_page">
    <div className="head">
        <div id="home_user">
            <FaUserCircle size="4.5em" color="#789174"/>
        </div>
        <div id="home_header">
            <Header text="Good Afternoon!" fontSize={14}/>
        </div>
    </div>
        <div id="home_categorybox1" onClick={ClickRestaurant}>
            <CategoryBox description="Find local vegan restaurants within your budget."/>
        </div>
        <div id="home_categorybox2" onClick={ClickRecipe}>
            <CategoryBoxforRecipes description="Popular and easy-to-make recipes!"/>
        </div>
    </div>
        <NavigationBar />
    </div>
}

Home.defaultProps = {

}

export default Home;