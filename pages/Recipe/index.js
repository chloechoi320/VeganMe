import React, {useState, useEffect} from "react";
import "./recipe.css";
import Link from 'next/link';
import Router from 'next/router';

import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import RecipeIngredients from "../../comps/RecipeIngredients";
import RecipeInstructions from "../../comps/RecipeInstructions";
import GreyButton from "../../comps/GreyButton";
import NavigationBar from "../../comps/NavigationBar";

import {FaStar} from 'react-icons/fa';
import {IoIosArrowRoundUp} from 'react-icons/io';

function ClickRP() {
    document.querySelector(".recipe-pg").getElementsByClassName.right = "-100%";
    Router.push("/Favourites");
}

const RecipePage = () => {
    return <div className="recipe-pg" onClick={ClickRP}>
        <BackHeader />
        <div className="rp-container">
            <Header text="Recipe Name" fontSize={14}/>
            <div className="rp-details">
                <div>Author: (author) Prep Time: (min)</div>
                <div>Cook Time: (min) Category: (category)</div>
            </div>
            <img src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-teal-blue-solid-color-background.jpg" />
            <div className="rp-favourite">
                <div className="fav-icon"><FaStar size="15px" color="#fff" /></div>
                <div className="fav-text">Add to Favourites</div>
            </div>
            <div className="rp-desc">Recipe description.</div>
            <RecipeIngredients />
            <div className="line"></div>
            <Header text="Insturctions" fontSize={14} />
            <RecipeInstructions />
            <img src="https://www.solidbackgrounds.com/images/2560x1440/2560x1440-teal-blue-solid-color-background.jpg" />
            <div className="gry-btn">
                <GreyButton text="Back to Top"><IoIosArrowRoundUp color="#1e1d1d" />
                </GreyButton>
            </div>
        </div>
        <div className="nav-bar">
            <NavigationBar />
        </div>
    </div>
}

export default RecipePage;