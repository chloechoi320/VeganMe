import React, {useState, useEffect} from "react";
import "./home.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import {FaUserCircle} from 'react-icons/fa';
import CategoryBox from '../../comps/CategoryBox';
import CategoryBoxforRecipes from '../../comps/CategoryBoxforRecipes';
import NavigationBar from '../../comps/NavigationBar';

import {data, changeData} from '../../data';

function ClickRecipe() {
    document.querySelector("#home_categorybox1").style.right = "-100%";
    Router.push("/Recipe");
}

function ClickRestaurant() {
    document.querySelector("#home_categorybox1").style.right = "-100%";
    Router.push("/Restaurants");
}

const Home = ({}) => {
    console.log(data);
    switch (data.veganismType) {
        case "food":
            if (data.veganismMakeOrDIY == "premade") {
            return <div>
                    FOOD AND PREMADE
                    <div className="home_page">
                    <div className="head">
                        <div className="home_user">
                            <FaUserCircle size="4.5em" color="#789174"/>
                        </div>
                        <div className="home_header">
                            <Header text="Good Afternoon!" fontSize={14}/>
                        </div>
                    </div>
                        <div className="home_categorybox1" onClick={ClickRestaurant}>
                            <CategoryBox defaultText="Restaurants" description="Find local restaurants to satisfy your cravings."/>
                        </div>
                    </div>
                        <NavigationBar />
                    </div>
            } else if (data.veganismMakeOrDIY == "diy") {
                return <div>
                    FOOD AND DIY
                    <div className="home_page">
                    <div className="head">
                        <div className="home_user">
                            <FaUserCircle size="4.5em" color="#789174"/>
                        </div>
                        <div className="home_header">
                            <Header text="Good Afternoon!" fontSize={14}/>
                        </div>
                    </div>
                        <div className="home_categorybox1" onClick={ClickRestaurant}>
                            <CategoryBox defaultText="Stores" description="Find the freshest ingredients you can."/>
                        </div>
                        <div className="home_categorybox2" onClick={ClickRecipe}>
                            <CategoryBoxforRecipes description="Popular and easy-to-make recipes!"/>
                        </div>
                    </div>
                        <NavigationBar />
                    </div>
            }
            break;

        case "product":
            if (data.veganismMakeOrDIY == "premade") {
                return <div>
                        PRODUCT AND PREMADE
                        <div className="home_page">
                        <div className="head">
                            <div className="home_user">
                                <FaUserCircle size="4.5em" color="#789174"/>
                            </div>
                            <div className="home_header">
                                <Header text="Good Afternoon!" fontSize={14}/>
                            </div>
                        </div>
                            <div className="home_categorybox1" onClick={ClickRestaurant}>
                                <CategoryBox defaultText="Stores" description="Find stores that sell vegan products and household items."/>
                            </div>
                        </div>
                            <NavigationBar />
                        </div>
                } else if (data.veganismMakeOrDIY == "diy") {
                    return <div>
                        FOOD AND DIY
                        <div className="home_page">
                        <div className="head">
                            <div className="home_user">
                                <FaUserCircle size="4.5em" color="#789174"/>
                            </div>
                            <div className="home_header">
                                <Header text="Good Afternoon!" fontSize={14}/>
                            </div>
                        </div>
                            <div className="home_categorybox1" onClick={ClickRestaurant}>
                                <CategoryBox defaultText="Stores" description="Find the supplies and tools you need to create things."/>
                            </div>
                            <div className="home_categorybox2" onClick={ClickRecipe}>
                                <CategoryBoxforRecipes defaultText="How Tos & DIYs" description="Learn how to create your own items, using only vegan products!"/>
                            </div>
                        </div>
                            <NavigationBar />
                        </div>
                }
                break;

        default:
            return <div>Oops... there was a mistake.</div>
    }
}

Home.defaultProps = {

}

export default Home;