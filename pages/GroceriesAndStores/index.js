import React, {useState, useEffect} from "react";
import "./gas.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import Restaurants from "../../comps/Restuarants";
import NavigationBar from "../../comps/NavigationBar";

import {FaStore} from 'react-icons/fa';
import {data, changeData} from '../../data';

function ToResult() {
    document.querySelector(".rest-listings").style.right = "-100%";
    Router.push("/Result");
}

const GroceriesAndStores = ({}) => {
    console.log(data)
    switch (data.veganismLocation) {
        case "vancouver":
            if (data.veganismBudget == "$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="No Frvills ($)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "No Frvills",
                                changeData(data)}} />
                            <Restaurants name ="Banana Grove Grocery ($)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Banana Grove Grocery",
                                changeData(data)}}/>
                            <Restaurants name ="Mikey's Craft ($)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Mikey's Craft",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "$$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="VeganMart ($$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "VeganMart",
                                changeData(data)}}/>
                            <Restaurants name ="Everyday Vegan Supplies ($$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Everyday Vegan Supplies",
                                changeData(data)}}/>
                            <Restaurants name ="Valmart ($$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Valmart",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "$$$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="vgan. ($$$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "vgan.",
                                changeData(data)}}/>
                            <Restaurants name ="Safevay ($$$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Safevay",
                                changeData(data)}}/>
                            <Restaurants name ="Whole Foods ($$$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Whole Foods",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            }
            break;

        case "burnaby":
            if (data.veganismBudget == "$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Dollarvama ($)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Dollarvama",
                                changeData(data)}}/>
                            <Restaurants name ="No Frvills($)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "No Frvills",
                                changeData(data)}}/>
                            <Restaurants name ="Yewniqlo ($)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Yewniqlo",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "$$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Save on Foods ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Save on Foods",
                                changeData(data)}}/>
                            <Restaurants name ="Valmart ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Valmart",
                                changeData(data)}}/>
                            <Restaurants name ="Superstore ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Superstore",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "$$$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="vgan. ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "vgan.",
                                changeData(data)}}/>
                            <Restaurants name ="Truly Vegan Supplies ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Truly Vegan Supplies",
                                changeData(data)}}/>
                            <Restaurants name ="Whole Foods ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Whole Foods",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            }
            break;

        case "richmond":
            if (data.veganismBudget == "$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Dollarvama ($)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Dollarvama",
                                changeData(data)}}/>
                            <Restaurants name ="No Frvills ($)" location="Richond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "No Frvills",
                                changeData(data)}}/>
                            <Restaurants name ="Karen's Paradise ($)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Karen's Paradise",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "$$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="T&V ($$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "T&V",
                                changeData(data)}}/>
                            <Restaurants name ="Valmart ($$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Valmart",
                                changeData(data)}}/>
                            <Restaurants name ="Superstore ($$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Superstore",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "$$$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Chlo's ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Chlo's",
                                changeData(data)}}/>
                            <Restaurants name ="Soph's ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Soph's",
                                changeData(data)}}/>
                            <Restaurants name ="Cin's ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Cin's",
                                changeData(data)}}/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            }
            break;

            default: 
                return <div>Oops... There seems to have been an error.</div>
                break;
    }
}

GroceriesAndStores.defaultProps = {

}

export default GroceriesAndStores;