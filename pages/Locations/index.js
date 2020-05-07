import React, {useState, useEffect} from "react";
import "./locations.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import {MdLocationOn} from 'react-icons/md';
import {MdStore} from 'react-icons/md';
import {FaWineGlassAlt} from 'react-icons/fa';
import NavigationBar from "../../comps/NavigationBar";

function ClickCat() {
    document.querySelector(".rest").style.right = "-100%";
    Router.push("/Restaurants");
}

const LocationsPage = ({}) => {
    return <div className="locations-page">
        <div className="locations-container">
            <div className="locations-header">
                <div className="locations-icon"><MdLocationOn size="0.75em" color="#FFF"/></div>
                <Header text="Locations" fontSize={12}/>
            </div>
            <div className="categories">
                <div className="sto">
                    <div className="sto-icon"><MdStore color="#fff" size="2em" /></div>
                    <div className="text">Stores</div>
                </div>
                <div className="rest" onClick={ClickCat}>
                    <div className="rest-icon"><FaWineGlassAlt color="#fff" size="2em" /></div>
                    <div className="text">Restaurants</div>
                </div>
            </div>
        </div>
        <div className="nav-bar">
            <NavigationBar />
        </div>
    </div>
}

LocationsPage.defaultProps = {

}

export default LocationsPage;