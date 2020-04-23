import React, {useState, useEffect} from "react";
import "./resources.css";
import BackHeader from "../../comps/BackHeader";
import Header from '../../comps/Header';
import NavigationBar from '../../comps/NavigationBar';

const Resources = ({}) => {
    return <div id="resources_page">
            <BackHeader />
        <div id="resources_header">
            <div id="resources_icon"></div>
            <Header fontSize={12}/>
        </div>
        <div id="resources_list>">
            <ul>
                <li>Banana</li>
                <li>Kiwi</li>
                <li>Dates</li>
                <li>Pomegranate</li>
                <li>Carrots</li>
                <li>Artichokes</li>
                <li>Tomatoes</li>
                <li>Garlic</li>
                <li>Eggplant</li>
                <li>Ginger</li>
                <li>Sweet Potatoes</li>
            </ul>
        </div>
        <div id="resources_navigationbar">
            <NavigationBar />
        </div>
    </div>
}

Resources.defaultProps = {

}

export default Resources;