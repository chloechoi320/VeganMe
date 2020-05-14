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
            if (data.veganismBudget == "money1") {
                return <div> 
                <div className="rest-page">
                    <BackHeader/>
                    <div className="rest-container">
                        <div className="rest-header">
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Auntie's Vegan Pizza ($)" onClick={ToResult} />
                            <Restaurants name ="Four Guys Vegan Burgers ($)" />
                            <Restaurants name ="Vegan Cave Cafe ($)" />
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Meet on Main ($$)" onClick={ToResult} />
                            <Restaurants name ="CHOMP Restaurant ($$)" />
                            <Restaurants name ="Dharma Kitchen ($$)" />
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Succulent Club Cafe ($$$)" onClick={ToResult} />
                            <Restaurants name ="Mika Sushi Restaurant + Bar ($$$)" />
                            <Restaurants name ="White & Red Eatery ($$$)" />
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Uncle's Vegan Pizza ($)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Six Guys Vegan Burgers ($)" location="Burnaby, BC" />
                            <Restaurants name ="Vegan Island Cafe ($)" location="Burnaby, BC" />
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Meet at Metrotown ($$)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="CHONK Restaurant ($$)" location="Burnaby, BC"/>
                            <Restaurants name ="Dharkma Kitchen ($$)" location="Burnaby, BC"/>
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Earlz Restaurant + Bar ($$$)" location="Burnaby, BC" onClick={ToResult} />
                            <Restaurants name ="Minamee Sushi Bar ($$$)" location="Burnaby, BC"/>
                            <Restaurants name ="Gotham Eatery ($$$)" location="Burnaby, BC" />
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Grandma's Vegan Pizza ($)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Three Guys Vegan Burgers ($)" location="Richmond, BC" />
                            <Restaurants name ="Vegan Inlet Cafe ($)" location="Richmond, BC" />
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Meet at Aberdeen ($$)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Ding Restaurant ($$)" location="Richmond, BC"/>
                            <Restaurants name ="Mama's Kitchen ($$)" location="Richmond, BC"/>
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
                            <div className="head-icon"><FaWineGlassAlt size="0.75em" color="#FFF"/></div>
                            <Header text="Restaurants" fontSize={12}/>
                        </div>
                        <div className="rest-listings">
                            <Restaurants name="Joue's Restaurant + Bar ($$$)" location="Richmond, BC" onClick={ToResult} />
                            <Restaurants name ="Green Leaf Sushi Bar ($$$)" location="Richmond, BC"/>
                            <Restaurants name ="Lightingale Eatery ($$$)" location="Richmond, BC" />
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