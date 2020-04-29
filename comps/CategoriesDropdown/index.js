import React from 'react';
import './categoriesdropdown.css';
import { MdRestaurant } from 'react-icons/md';
import {FaWineGlassAlt} from 'react-icons/fa';
import {MdStore} from'react-icons/md';

const CategoriesDropdown = () => <div className="cd-container">
    <div className="top">
        <div className="rec">
            <div className="rec-icon"><MdRestaurant color="#fff" size="2em" /></div>
            <div className="text">Recipes</div>
        </div>
        <div className="rest">
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