import React from 'react';
import './categoriesdropdown.css';
import Router from 'next/router';
import { MdRestaurant } from 'react-icons/md';
import {FaWineGlassAlt} from 'react-icons/fa';
import {MdStore} from'react-icons/md';


function ClickRecipe() {
    document.querySelector("#homecd_categoriesdropdown").style.right = "-100%";
    Router.push("/Recipe")
}

function ClickRestaurants() {
    document.querySelector("#homecd_categoriesdropdown").style.right = "-100%";
    Router.push("/Restaurants")
}

const CategoriesDropdown = () => <div className="cd-container">
    <div className="top">
        <div className="rec" onClick={ClickRecipe}>
            <div className="rec-icon"><MdRestaurant color="#fff" size="2em" /></div>
            <div className="text">Recipes</div>
        </div>
        <div className="rest" onClick={ClickRestaurants}>
            <div className="rest-icon"><FaWineGlassAlt color="#fff" size="2em" /></div>
            <div className="text">Restaurants</div>
        </div>
    </div>
    <div className="bottom">
        <div className="store">
            <div className="store-icon"><MdStore color="#fff" size="2em" /></div>
            <div className="text">Stores</div>
        </div>
    </div>
</div>

CategoriesDropdown.defaultProps = {
}

export default CategoriesDropdown;