import React, {useState, useEffect} from "react";
import "./favourites.css";
import Link from 'next/link';
import Router from 'next/router';
import BackHeader from "../../comps/BackHeader";
import Header from "../../comps/Header";
import FavouritesBox from "../../comps/FavouritesBox";
import NavigationBar from "../../comps/NavigationBar";
import { FaStar } from 'react-icons/fa'


function ClickTitle() {
    document.querySelector("#favourites_page").style.right = "-100%";
    Router.push("/Recipe");
}

const FavouritesPage = ({}) => {
    return <div id="favourites_page">
        <div id="favourites_header">
            <div id="favourite-star-icon"><FaStar size="0.75em" color="#FFF"/></div>
            <Header text="Favourites" fontSize={12}/>
        </div>

        <div id="favourites_box">
            <FavouritesBox text="Savoury Breakfast Bowl"  onClick={ClickTitle} />
            <FavouritesBox text="Meet on Main" img='url("https://images.squarespace-cdn.com/content/v1/53d40e07e4b01ef34f3946af/1587497322064-FVCVNFZ1ZFATV60KCN5I/ke17ZwdGBToddI8pDm48kPv8oLMP7RRkvdldqWBjtJhZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz9o29g7S2ltrzi6KEPy3ksCe76_p4Fh7PdOgz89kYp6p8FS-ilttHt5f5_QERPH3E/image-asset.jpeg")' />
        </div>
        <div className="nav-bar">
            <NavigationBar/>
        </div>
    </div>
}

FavouritesPage.defaultProps = {

}

export default FavouritesPage;