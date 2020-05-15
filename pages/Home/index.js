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
    document.querySelector(".home_categorybox1").style.right = "-100%";
    Router.push("/Recipe");
}

// location functions

function ClickRestaurant() {
    document.querySelector(".home_categorybox1").style.right = "-100%";
    Router.push("/Restaurants");
}

function ClickStores() {
    document.querySelector(".home_categorybox1").style.right = "-100%";
    Router.push("/Stores");
}

function ClickGroceriesAndStores() {
    document.querySelector(".home_categorybox1").style.right = "-100%";
    Router.push("/GroceriesAndStores");
}

const Home = ({}) => {
    console.log(data);
    switch (data.veganismType) {
        case "food":
            if (data.veganismMakeOrDIY == "premade") {
            return <div>
                    <div className="home_page">
                    <div className="head">
                        <div className="home_user">
                            <FaUserCircle size="4.5em" color="#789174"/>
                        </div>
                        <div className="home_header">
                            <Header text="Hello!" fontSize={14}/>
                        </div>
                    </div>
                        <div className="home_categorybox1" onClick={ClickRestaurant}>
                            <CategoryBox defaultText="Restaurants" description="Visit these local and popular vegan restaurants to satisfy your cravings... while staying within your budget!"/>
                        </div>
                    </div>
                        <NavigationBar />
                    </div>
            } else if (data.veganismMakeOrDIY == "diy") {
                return <div>
                    <div className="home_page">
                    <div className="head">
                        <div className="home_user">
                            <FaUserCircle size="4.5em" color="#789174"/>
                        </div>
                        <div className="home_header">
                            <Header text="Hello!" fontSize={14}/>
                        </div>
                    </div>
                        <div className="home_categorybox1" onClick={ClickGroceriesAndStores}>
                            <CategoryBox defaultText="Groceries & Stores" description="Find the freshest ingredients you can at these local, vegan groceries and stores that fit within your budget." img="url(https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)"/>
                        </div>
                        <div className="home_categorybox2" onClick={ClickRecipe}>
                            <CategoryBoxforRecipes description="Popular and easy-to-make recipes!" img="url(https://images.unsplash.com/photo-1513135065346-a098a63a71ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2249&q=80)"/>
                        </div>
                    </div>
                        <NavigationBar />
                    </div>
            }
            break;

        case "product":
            if (data.veganismMakeOrDIY == "premade") {
                return <div>
                        <div className="home_page">
                        <div className="head">
                            <div className="home_user">
                                <FaUserCircle size="4.5em" color="#789174"/>
                            </div>
                            <div className="home_header">
                                <Header text="Hello!" fontSize={14}/>
                            </div>
                        </div>
                            <div className="home_categorybox1" onClick={ClickStores}>
                                <CategoryBox defaultText="Stores" description="Find stores that sell vegan clothes, household items, and more." img="url(https://images.unsplash.com/photo-1527368746281-798b65e1ac6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80)"/>
                            </div>
                        </div>
                            <NavigationBar />
                        </div>
                } else if (data.veganismMakeOrDIY == "diy") {
                    return <div>
                        <div className="home_page">
                        <div className="head">
                            <div className="home_user">
                                <FaUserCircle size="4.5em" color="#789174"/>
                            </div>
                            <div className="home_header">
                                <Header text="Hello!" fontSize={14}/>
                            </div>
                        </div>
                            <div className="home_categorybox1" onClick={ClickGroceriesAndStores}>
                                <CategoryBox defaultText="Groceries & Stores" description="Find the supplies and tools you need to create things at these recommended stores." img="url(https://images.unsplash.com/photo-1534723452862-4c874018d66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80)"/>
                            </div>
                            <div className="home_categorybox2" onClick={ClickRecipe}>
                                <CategoryBoxforRecipes defaultText="How To's & DIY's" description="Learn how to create your own items, using only vegan products!" img="url(https://images.unsplash.com/photo-1489435518427-e047d52082f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80)"/>
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