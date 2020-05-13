import React from 'react';
import Header from '../Header';
import './categoryboxforrecipes.css';
import {FaListUl} from 'react-icons/fa';


const CategoryBoxforRecipes = ({headerText, defaultText, description}) => 

<div className="category_container">
    <div className="category_image"><img src={require('../../pages/Recipe/veganburger.png')}></img></div>
    <div className="category_header_container">
    <div className="category_icon">
            <FaListUl color="#FFF" size="1em"/>
        </div>
        <div>
            <Header fontSize={10} text={defaultText}/>
        </div>
    </div>
    <p class="category_description">{description}</p>
</div>

CategoryBoxforRecipes.defaultProps = {
    defaultText: "Recipes", // recipe / DIY
    description: "A delicious breakfast bowl!"
};

export default CategoryBoxforRecipes;