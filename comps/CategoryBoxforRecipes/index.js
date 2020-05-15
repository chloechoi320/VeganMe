import React from 'react';
import Header from '../Header';
import './categoryboxforrecipes.css';
import {FaListUl} from 'react-icons/fa';


const CategoryBoxforRecipes = ({headerText, defaultText, img, description}) => 

<div className="category">
<div className="category_container">
    <div style={{backgroundImage:img}} className="category_image"></div>
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
</div>

CategoryBoxforRecipes.defaultProps = {
    defaultText: "Recipes", // recipe / DIY
    description: "A delicious breakfast bowl!",
    img: 'url("https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
};

export default CategoryBoxforRecipes;