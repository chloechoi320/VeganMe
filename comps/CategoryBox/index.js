import React from 'react';
import Header from '../Header'
import './categorybox.css';
import { MdRestaurant } from 'react-icons/md'

const CategoryBox = ({headerText, defaultText, description}) => 

<div className="category_container">
    <div className="category_image"></div>
    <div className="category_header_container">
        <Header fontSize={10} text={headerText}/>
        <p class="category_description">{description}</p>
    </div>
    <div className="category_link">
        <div className="category_icon">
            <MdRestaurant color="#FFF" size="1em"/>
        </div>
        <div>
            <Header fontSize={8} text={defaultText}/>
        </div>
        </div>
</div>

CategoryBox.defaultProps = {
    headerText: "Savoury Breakfast Bowl",
    defaultText: "Recipes", // this is either recipes or restaurants
    description: "A delicious breakfast bowl!"
};

export default CategoryBox;