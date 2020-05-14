import React, {useState, useEffect} from "react";
import "./stores.css";
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

const StoresPage = ({}) => {
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Patty's Discount Store ($)" onClick={() => {
                                ToResult(); 
                            data.clickedLocation = "Patty's Discount Store",
                            changeData(data)}}/>
                            <Restaurants name ="Dollar Vegan ($)" onClick={() => {
                                ToResult(); 
                            data.clickedLocation = "Dollar Vegan",
                            changeData(data)}}/>
                            <Restaurants name ="Mama's Thrifty ($)"onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Mama's Thrifty",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Cruelty Free & Vegan ($$)" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Cruelty Free & Vegan",
                                changeData(data)}}/>
                            <Restaurants name ="Everyday Vegan Household ($$)" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Everyday Vegan Household",
                                changeData(data)}}/>
                            <Restaurants name ="Vegan Lifestyle ($$)" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Vegan Lifestyle",
                                changeData(data)}} />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Extravagent Vegan ($$$)" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Extravagent Vegan",
                                changeData(data)}} />
                            <Restaurants name ="High-End Vegan Furniture ($$$)" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "High-End Vegan Furniture",
                                changeData(data)}}/>
                            <Restaurants name ="Aritzeya ($$$)" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Aritzeya",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="M&H Clothing ($)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "M&H Clothing",
                                changeData(data)}} />
                            <Restaurants name ="Forever Vegan 21 ($)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Forever Vegan 21",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Supervegan ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Supervegan",
                                changeData(data)}} />
                            <Restaurants name ="Famous Vegan ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Famous Vegan",
                                changeData(data)}}/>
                            <Restaurants name ="ElevenTree ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "ElevenTree",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Ivea Furniture ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Ivea Furniture",
                                changeData(data)}} />
                            <Restaurants name ="Fort & Oak ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Fort & Oak",
                                changeData(data)}}/>
                            <Restaurants name ="Deviem Beauty ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Deviem Beauty",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Timmy Hilfiger ($)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Timmy Hilfiger",
                                changeData(data)}} />
                            <Restaurants name ="Vara Clothing ($)" location="Richond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Vara Clothing",
                                changeData(data)}}/>
                            <Restaurants name ="Urban Vegan Life ($)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Urban Vegan Life",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Aberdeen Vegan ($$)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Aberdeen Vegan",
                                changeData(data)}}/>
                            <Restaurants name ="Mervegan ($$)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Mervegan",
                                changeData(data)}}/>
                            <Restaurants name ="Oak & Frank ($$)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Oak & Frank",
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Hudson's Tree ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Hudson's Tree",
                                changeData(data)}}/>
                            <Restaurants name ="Muvi ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Muvi",
                                changeData(data)}}/>
                            <Restaurants name ="Sevora ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult(); 
                                data.clickedLocation = "Sevora",
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

StoresPage.defaultProps = {

}

export default StoresPage;