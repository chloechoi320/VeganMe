import React, {useState, useEffect} from "react";
import "./recipe.css";
import Link from 'next/link';
import Router from 'next/router';

import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import RecipeIngredients from "../../comps/RecipeIngredients";
import RecipeInstructions from "../../comps/RecipeInstructions";
import NavigationBar from "../../comps/NavigationBar";
import GBforBacktoTop from "../../comps/GBforBacktoTop";

import {FaStar} from 'react-icons/fa';

var toggleState = false; // false: not favourited > add to fave

function ClickFav() {
    if (toggleState === false) {
        document.querySelector(".fav-icon").style.backgroundColor = "#e6cf25";
        document.querySelector(".fav-text").innerHTML = "Added to Favourites";
        toggleState = true;
    } else if (toggleState === true) {
        document.querySelector(".fav-icon").style.backgroundColor = "#e6cf2573";
        document.querySelector(".fav-text").innerHTML = "Add to Favourites";
        toggleState = false;
    }
}


const RecipePage = () => {
    return <div>
    <div className="recipe-pg">
        <BackHeader />
        <div className="rp-container">
            <div className="rp-head">
                <Header text="Savoury Breakfast Bowl" fontSize={14}/>
            </div>
            <div className="rp-details">
                <div>Author: Deryn Macey Prep Time: 10 min</div>
                <div>Cook Time: 10 min Category: Recipes</div>
            </div>
            <div className="top-img"></div>
            <div className="rp-favourite">
                <div className="fav-icon" onClick={ClickFav}><FaStar size="15px" color="#fff" /></div>
                <div className="fav-text">Add to Favourites</div>
            </div>
            <div className="rp-desc">This savory vegan breakfast bowl recipe features healthy ingredients like kale, mushrooms, onions, tofu scramble, avocado, brown rice and salsa for a nutritious breakfast that doesn’t skimp on flavour. It’s high in protein and contains healthy fats and complex carbohydrates for a balanced breakfast that will leave you energized all morning. </div>
            <div className="r-ingredients">INGREDIENTS</div>
            <RecipeIngredients text="1 serving medium or firm tofu, crumbled" />
            <RecipeIngredients text="1 tsp turmeric" />
            <RecipeIngredients text="salt and pepper" />
            <RecipeIngredients text="dash or soy sauce" />
            <RecipeIngredients text="1 tbsp water" />
            <RecipeIngredients text="1 big handful of kale, de-stemmed and chopped" />
            <RecipeIngredients text="1 cup sliced mushrooms" />
            <RecipeIngredients text="1/2 cup diced white onions" />
            <RecipeIngredients text="1/2 avocado" />
            <RecipeIngredients text="salsa" />
            <RecipeIngredients text="1/2 cup cooked brown rice" />
            <div className="line"></div>
            <Header text="Instructions" fontSize={14} />
            <RecipeInstructions text="In a small dish, mix up the tofu scramble ingredients then set aside. If you’re only making one serving, I’d recommend mixing it up in a dish before cooking. If you’re making a whole package of tofu, you can add everything right into the pan as it’s easier to mix." />
            <RecipeInstructions num="2" text="Next, cook the kale, mushrooms and onions. To make them, add them to a skillet over medium-high heat with either a splash of water or 1/2 tsp olive or avocado oil. Cook for 5-8 minutes until tender and browned. Don’t stir too often in order to let them brown. Once they’re cooked, scoop into a bowl." />
            <RecipeInstructions num="3" text="In the same pan, add the tofu mixture and cook for 5 minutes until heated through and starting to brown. Alternatively, you can just add the tofu scramble mixture to the kale and mushrooms as they cook and serve it all mixed up." />
            <RecipeInstructions num="4" text="To assemble the breakfast bowls, add the tofu scramble to the bowl with the kale mixture then add brown rice, avocado and salsa. Serve right away or pack up for meal prep." />
            <div className="btm-img"></div>
            <div className="gry-btn">
            <GBforBacktoTop />
            </div>
        </div>
        </div>
        <NavigationBar />
    </div>
}

export default RecipePage;