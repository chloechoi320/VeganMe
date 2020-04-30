import React from 'react';
import Header from '../Header'
import './favouritesbox.css';
import { FaStar } from 'react-icons/fa'

const FavouritesBox = ({text}) => 

<div className="favourites_container">
    <div className="favourites_image"><img src={require('../../pages/Recipe/veganburger.png')}></img></div>
    <div className="favourites_icon">
        <FaStar color="#FFF" size="1.5em"/>
    </div>
    <div className="favourites_header_container">
        <Header fontSize={10} text={text}/>
    </div>
</div>

FavouritesBox.defaultProps = {
    text: "Meet on Main"
};

export default FavouritesBox;