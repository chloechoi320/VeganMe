import React from 'react';
import Header from '../Header'
import './favouritesbox.css';
import { FaStar } from 'react-icons/fa'

const FavouritesBox = () => 

<div className="favourites_container">
    <div className="favourites_image"></div>
    <div className="favourites_icon">
        <FaStar color="#FFF" size="1.5em"/>
    </div>
    <div className="favourites_header_container">
        <Header fontSize={11}/>
    </div>
</div>

FavouritesBox.defaultProps = {

};

export default FavouritesBox;