import React, {useState, useEffect} from "react";
import "./restaurants.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import Restaurants from "../../comps/Restuarants";
import NavigationBar from "../../comps/NavigationBar";

import {FaWineGlassAlt} from 'react-icons/fa';
import {data, changeData} from '../../data';

function ToResult() {
    document.querySelector(".rest-listings").style.right = "-100%";
    Router.push("/Result");
}

const RestaurantPage = ({}) => {
    console.log(data)
    switch (data.veganismLocation) {
        case "vancouver":
            if (data.veganismBudget == "$") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Auntie's Vegan Pizza ($)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Auntie's Vegan Pizza",
                                changeData(data)}} />
                            <Restaurants name ="Four Guys Vegan Burgers ($)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Four Guys Vegan Burgers",
                                changeData(data)}}/>
                            <Restaurants name ="Vegan Cave Cafe ($)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Vegan Cave Cafe",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Meet on Main ($$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Meet on Main",
                                changeData(data)}} />
                            <Restaurants name ="CHOMP Restaurant ($$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "CHOMP Restaurant",
                                changeData(data)}}/>
                            <Restaurants name ="Dharma Kitchen ($$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Dharma Kitchen",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Succulent Club Cafe ($$$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Succulent Club Cafe",
                                changeData(data)}} />
                            <Restaurants name ="Mika Sushi Restaurant + Bar ($$$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Mika Sushi Restaurant + Bar",
                                changeData(data)}}/>
                            <Restaurants name ="White & Red Eatery ($$$)" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "White & Red Eatery",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Uncle's Vegan Pizza ($)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Uncle's Vegan Pizza",
                                changeData(data)}} />
                            <Restaurants name ="Six Guys Vegan Burgers ($)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Six Guys Vegan Burgers",
                                changeData(data)}}/>
                            <Restaurants name ="Vegan Island Cafe ($)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Vegan Island Cafe",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Meet at Metrotown ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Meet at Metrotown",
                                changeData(data)}} />
                            <Restaurants name ="CHONK Restaurant ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "CHONK Restaurant",
                                changeData(data)}}/>
                            <Restaurants name ="Dharkma Kitchen ($$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Dharkma Kitchen",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Earlz Restaurant + Bar ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Earlz Restaurant + Bar",
                                changeData(data)}} />
                            <Restaurants name ="Minamee Sushi Bar ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Minamee Sushi Bar",
                                changeData(data)}}/>
                            <Restaurants name ="Gotham Eatery ($$$)" location="Burnaby, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Gotham Eatery",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Grandma's Vegan Pizza ($)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Grandma's Vegan Pizza",
                                changeData(data)}}/>
                            <Restaurants name ="Three Guys Vegan Burgers ($)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Three Guys Vegan Burgers",
                                changeData(data)}}/>
                            <Restaurants name ="Vegan Inlet Cafe ($)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Vegan Inlet Cafe",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Meet at Aberdeen ($$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Meet at Aberdeen",
                                changeData(data)}} />
                            <Restaurants name ="Ding Restaurant ($$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Ding Restaurant",
                                changeData(data)}}/>
                            <Restaurants name ="Mama's Kitchen ($$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Mama's Kitchen",
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Joue's Restaurant + Bar ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Joue's Restaurant + Bar",
                                changeData(data)}} />
                            <Restaurants name ="Green Leaf Sushi Bar ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Green Leaf Sushi Bar",
                                changeData(data)}}/>
                            <Restaurants name ="Lightingale Eatery ($$$)" location="Richmond, BC" onClick={() => {
                                ToResult();  
                                data.clickedLocation = "Lightingale Eatery",
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

RestaurantPage.defaultProps = {

}

export default RestaurantPage;