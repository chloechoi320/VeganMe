import React from 'react';
import Header from '../Header';
import './categorybox.css';
import { MdRestaurant } from 'react-icons/md'

const CategoryBox = ({headerText, defaultText, img, description}) => 
<div className="category">
<div className="category_container">
    <div style={{backgroundImage:img}} className="category_image"></div>
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
</div>

CategoryBox.defaultProps = {
    defaultText: "Restaurants", // location (restaurants / grocery)
    description: "A delicious breakfast bowl!",
    img: 'url(https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80)'
}

export default CategoryBox;