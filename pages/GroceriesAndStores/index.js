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
            if (data.veganismBudget == "money1") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="No Frvills ($)" onClick={ToResult} />
                            <Restaurants name ="Banana Grove Grocery ($)" />
                            <Restaurants name ="Mikey's Craft ($)" />
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "money2") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="VeganMart ($$)" onClick={ToResult} />
                            <Restaurants name ="Everyday Vegan Supplies ($$)" />
                            <Restaurants name ="Valmart ($$)" />
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "money3") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="vgan. ($$$)" onClick={ToResult} />
                            <Restaurants name ="Safevay ($$$)" />
                            <Restaurants name ="Whole Foods ($$$)" />
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            }
            break;

        case "burnaby":
            if (data.veganismBudget == "money1") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Dollarvama ($)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="No Frvills($)" location="Burnaby, BC" />
                            <Restaurants name ="Yewniqlo ($)" location="Burnaby, BC" />
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "money2") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Save on Foods ($$)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Valmart ($$)" location="Burnaby, BC"/>
                            <Restaurants name ="Superstore ($$)" location="Burnaby, BC"/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "money3") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="vgan. ($$$)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Truly Vegan Supplies ($$$)" location="Burnaby, BC"/>
                            <Restaurants name ="Whole Foods ($$$)" location="Burnaby, BC" />
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            }
            break;

        case "richmond":
            if (data.veganismBudget == "money1") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Dollarvama ($)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="No Frvills ($)" location="Richond, BC" />
                            <Restaurants name ="Karen's Paradise ($)" location="Richmond, BC" />
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "money2") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="T&V ($$)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Valmart ($$)" location="Richmond, BC"/>
                            <Restaurants name ="Superstore ($$)" location="Richmond, BC"/>
                        </div>
                    </div>
                    </div>
                        <NavigationBar />
                </div>
            } else if (data.veganismBudget == "money3") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Groceries & Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Chlo's ($$$)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Soph's ($$$)" location="Richmond, BC"/>
                            <Restaurants name ="Cin's ($$$)" location="Richmond, BC" />
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