import React, {useState, useEffect} from "react";
import "./restaurants.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import Restaurants from "../../comps/Restuarants";
import NavigationBar from "../../comps/NavigationBar";

import {FaWineGlassAlt} from 'react-icons/fa';

function ClickRest() {
    document.querySelector(".rest").style.right = "-100%";
    Router.push("/VeganPizzaHouse");
}

const RestaurantsPage = ({}) => {
    return <div className="rest-page">
        <BackHeader/>
        <div className="rest-container">
            <div className="rest-header">
                <div className="rest-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                <Header text="Restaurants" fontSize={12}/>
            </div>
            <div className="rest-listings">
                <div className="rest" onClick={ClickRest}>
                    <Restaurants name="Vegan Pizza House" />
                </div>
                <Restaurants name ="Chickpea Restaurant" />
                <Restaurants name ="Vegan Cave Cafe" />
                <Restaurants name ="Dharma Kitchen" />
                <Restaurants name ="Meet on Main" />
                <Restaurants name ="CHOMP vegan eatery" />
                <Restaurants name ="Lotus Seed Vegan" />
                <Restaurants name ="The Naam" />
                <Restaurants name ="Chau Veggie Express" />
                <Restaurants name ="The Acorn Restaurant" />
            </div>
        </div>
        <NavigationBar />
        {/* <div className="nav-bar">
            <NavigationBar />
        </div> */}
        {/* dude i am so confused. sometimes you don't need a div, sometimes the position is absolute and other times it's relative wth. */}
    </div>
}

RestaurantsPage.defaultProps = {

}

export default RestaurantsPage;