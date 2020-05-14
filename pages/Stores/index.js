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
            if (data.veganismBudget == "money1") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaStore size="0.75em" color="#FFF"/></div>
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Patty's Discount Store ($)" onClick={ToResult} />
                            <Restaurants name ="Dollar Vegan ($)" />
                            <Restaurants name ="Mama's Thrifty ($)" />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Cruelty Free & Vegan ($$)" onClick={ToResult} />
                            <Restaurants name ="Everyday Vegan Household ($$)" />
                            <Restaurants name ="Vegan Lifestyle ($$)" />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Extravagent Vegan ($$$)" onClick={ToResult} />
                            <Restaurants name ="High-End Vegan Furniture ($$$)" />
                            <Restaurants name ="Aritzeya ($$$)" />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="M&H Clothing ($)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Forever Vegan 21 ($)" location="Burnaby, BC" />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Supervegan ($$)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Famous Vegan ($$)" location="Burnaby, BC"/>
                            <Restaurants name ="ElevenTree ($$)" location="Burnaby, BC"/>
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Ivea Furniture ($$$)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Fort & Oak ($$$)" location="Burnaby, BC"/>
                            <Restaurants name ="Deviem Beauty ($$$)" location="Burnaby, BC" />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Timmy Hilfiger ($)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Vara Clothing ($)" location="Richond, BC" />
                            <Restaurants name ="Urban Vegan Life ($)" location="Richmond, BC" />
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Aberdeen Vegan ($$)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Mervegan ($$)" location="Richmond, BC"/>
                            <Restaurants name ="Oak & Frank ($$)" location="Richmond, BC"/>
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
                            <Header text="Stores" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Hudson's Tree ($$$)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Muvi ($$$)" location="Richmond, BC"/>
                            <Restaurants name ="Sevora ($$$)" location="Richmond, BC" />
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