import React from 'react';
import Header from '../Header';
import './categorybox.css';
import { MdRestaurant } from 'react-icons/md'

const CategoryBox = ({headerText, defaultText, description}) => 

<div className="category_container">
    <div className="category_image"><img src={require ('../../pages/Recipe/dish.png')}></img></div>
    <div className="category_header_container">

        <div className="category_icon">
            <MdRestaurant color="#FFF" size="1em"/>
        </div>
        
        <div>
            <Header fontSize={10} text={defaultText}/>
        </div>
    </div>
        <p class="category_description">{description}</p>
</div>

CategoryBox.defaultProps = {
    defaultText: "Restaurants", // location (restaurants / grocery)
    description: "A delicious breakfast bowl!"
};

export default CategoryBox;