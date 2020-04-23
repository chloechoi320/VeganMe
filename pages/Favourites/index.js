import React, {useState, useEffect} from "react";
import "./favourites.css";
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import FavouritesBox from "../../comps/FavouritesBox";
import NavigationBar from "../../comps/NavigationBar";
import { FaStar } from 'react-icons/fa'

const FavouritesPage = ({}) => {
    return <div id="favourites_page">
        <BackHeader/>
        <div id="favourites_header">
            <div id="favourite-star-icon"><FaStar size="0.75em" color="#FFF"/></div>
            <Header text="Favourites" fontSize={12}/>
        </div>

        <div id="favourites_box">
            <FavouritesBox/>
        </div>
        <NavigationBar/>
    </div>
}

FavouritesPage.defaultProps = {

}

export default FavouritesPage;