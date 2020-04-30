import React, {useState, useEffect} from "react";
import "./recipe.css";
import Link from 'next/link';
import Router from 'next/router';

import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import RecipeIngredients from "../../comps/RecipeIngredients";
import RecipeInstructions from "../../comps/RecipeInstructions";
import GBforBacktoTop from "../../comps/GBforBacktoTop";
import NavigationBar from "../../comps/NavigationBar";

import {FaStar} from 'react-icons/fa';

function ClickAdd() {
    document.querySelector(".rp-favourite").getElementsByClassName.right = "-100%";
    Router.push("/Favourites");
}

const RecipePage = () => {
    return <div className="recipe-pg">
        <BackHeader />
        <div className="rp-container">
            <Header text="Savoury Breakfast Bowl" fontSize={16}/>
            <div className="rp-details">
                <div>Author: (author) Prep Time: (min)</div>
                <div>Cook Time: (min) Category: (category)</div>
            </div>
            <img src={require('./rec1.png')}></img>
            <div className="rp-favourite" onClick={ClickAdd}>
                <div className="fav-icon" ><FaStar size="15px" color="#fff" /></div>
                <div className="fav-text">Add to Favourites</div>
            </div>
            <div className="rp-desc">Recipe description.</div>
            <RecipeIngredients />
            <div className="line"></div>
            <Header text="Insturctions" fontSize={14} />
            <RecipeInstructions />
            <img src={require('./rec2.png')}></img>
            <div className="gry-btn">
            <GBforBacktoTop />
            </div>
        </div>
        <div className="nav-bar">
            <NavigationBar />
        </div>
    </div>
}

export default RecipePage;