import React, {useState, useEffect} from "react";
import "./veganpizzahouse.css";
import Link from 'next/link';
import Router from 'next/router';

import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import NavigationBar from "../../comps/NavigationBar";

const VeganPizzaHousePage = () => {
    return <div>
    <div className="vph-pg">
        <BackHeader />
        <div className="vph-container">
            <div vph-head>
                <Header text="Vegan Pizza House" fontSize={14}/>
            </div>
            <div className="vph-img"></div>
            <div className="adr">
                <div className="adr-head">Address</div>
                <div>2119 Kingsway, Vancouver, BC V5N 2T4</div>
            </div>
            <div className="desc">
                <p>Vegan pizzeria offering pies, slices, pasta dishes and salads with house-made sauces and dressings.</p>
                <p>For more info, visit <a href="http://www.veganpizzahouse.ca/">veganpizzahouse.ca</a></p>
            </div>
        </div>
        </div>
            <NavigationBar />
    </div>
}

export default VeganPizzaHousePage;