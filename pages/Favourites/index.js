import React, {useState, useEffect} from "react";
import "./favourites.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import FavouritesBox from "../../comps/FavouritesBox";
import NavigationBar from "../../comps/NavigationBar";
import { FaStar } from 'react-icons/fa'

function ClickFav() {
    document.querySelector("#favourites_page").style.right = "-100%";
    Router.push("/Resources");
}

const FavouritesPage = ({}) => {
    return <div id="favourites_page" onClick={ClickFav}>
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