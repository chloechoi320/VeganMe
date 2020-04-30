import React from 'react';
import Header from '../Header'
import './favouritesbox.css';
import { FaStar } from 'react-icons/fa'

const FavouritesBox = ({text, img}) => 

<div className="favourites_container">
    <div style={{backgroundImage:img}}className="favourites_image"></div>
    <div className="favourites_icon">
        <FaStar color="#FFF" size="1.5em"/>
    </div>
    <div className="favourites_header_container">
        <Header fontSize={10} text={text}/>
    </div>
</div>

FavouritesBox.defaultProps = {
    text: "Meet on Main",
    img: 'url("https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
};

export default FavouritesBox;