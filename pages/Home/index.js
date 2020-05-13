import React, {useState, useEffect} from "react";
import "./home.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import {FaUserCircle} from 'react-icons/fa';
import CategoryBox from '../../comps/CategoryBox';
import CategoryBoxforRecipes from '../../comps/CategoryBoxforRecipes';
import NavigationBar from '../../comps/NavigationBar';

import {data, changeData} from '../data';

function ClickRecipe() {
    document.querySelector("#home_categorybox1").style.right = "-100%";
    Router.push("/Recipe");
}

function ClickRestaurant() {
    document.querySelector("#home_categorybox1").style.right = "-100%";
    Router.push("/Restaurants");
}

const Home = ({}) => {
    console.log(data);
        return <div>
            <div className="home_page">
            <div className="head">
                <div className="home_user">
                    <FaUserCircle size="4.5em" color="#789174"/>
                </div>
                <div className="home_header">
                    <Header text="Good Afternoon!" fontSize={14}/>
                </div>
            </div>
                <div className="home_categorybox1" onClick={ClickRestaurant}>
                    <CategoryBox defaultText="Stores" description="Find the freshest ingredients you can."/>
                </div>
                <div className="home_categorybox2" onClick={ClickRecipe}>
                    <CategoryBoxforRecipes description="Popular and easy-to-make recipes!"/>
                </div>
            </div>
                <NavigationBar />
            </div>

    // } else if (data.veganismType == "food" && veganismMakeOrDIY == "premade") {
    //     return <div>
    //     <div className="home_page">
    //     <div className="head">
    //         <div className="home_user">
    //             <FaUserCircle size="4.5em" color="#789174"/>
    //         </div>
    //         <div className="home_header">
    //             <Header text="Good Afternoon!" fontSize={14}/>
    //         </div>
    //     </div>
    //         <div className="home_categorybox1" onClick={ClickRestaurant}>
    //             <CategoryBox description="Find local vegan restaurants to satisfy your cravings."/>
    //         </div>
    //         <div className="home_categorybox2" onClick={ClickRecipe}>
    //             <CategoryBoxforRecipes description="Popular and easy-to-make recipes!"/>
    //         </div>
    //     </div>
    //         <NavigationBar />
    //     </div>

//     } else if (data.veganismType == "product") {
//         return <div>
//         <div className="home_page">
//         <div className="head">
//             <div className="home_user">
//                 <FaUserCircle size="4.5em" color="#789174"/>
//             </div>
//             <div className="home_header">
//                 <Header text="Good Afternoon!" fontSize={14}/>
//             </div>
//         </div>
//             <div className="home_categorybox1" onClick={ClickRestaurant}>
//                 <CategoryBox description="PRODUCT"/>
//             </div>
//             <div className="home_categorybox2" onClick={ClickRecipe}>
//                 <CategoryBoxforRecipes description="Popular and easy-to-make recipes!"/>
//             </div>
//         </div>
//             <NavigationBar />
//         </div>
//     }
}

Home.defaultProps = {

}

export default Home;