import React, {useState, useEffect} from "react";
import "./asu.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import CustomForm from "../../comps/CustomForm";
import Buttons from "../../comps/Buttons";

// icons
import { FaCarrot } from "react-icons/fa";
import { FaTshirt } from "react-icons/fa";
import { FaGift } from "react-icons/fa";
import { FaHammer} from "react-icons/fa";

import {data, changeData} from '../../data';

function FinishSetUp() {
    document.querySelector("#asu_page").style.right = "-100%";
    Router.push("/Home");
}

const AccountSetUp = ({}) => {
    const [food_opacity, foodClicked] = useState(0.5);
    const [product_opacity, productClicked] = useState(0.5);

    const [premade_opacity, premadeClicked] = useState(0.5);
    const [diy_opacity, diyClicked] = useState(0.5);

    const [vancouver_opacity, vancouverClicked] = useState(0.5);
    const [burnaby_opacity, burnabyClicked] = useState(0.5);
    const [richmond_opacity, richmondClicked] = useState(0.5);

    const [finish_opacity, finishClicked] = useState(0.5);

    return <div id="asu_page">
        <div id="asu_container">
            <div id="asu_logo"><img src={require('./logo.png')}/></div>

            <Header text="Let's get started with some questions." fontSize={14}/>

            <div className="asu_question_container">
                <Header text="What kind of veganism do you want to achieve?" fontSize={12}/>
                <div className="display_flex">
                    <div className="selection">

                        <div className="asu_circle" id="asu_food" style = {{
                            opacity: food_opacity
                        }}
                        onClick={() => {
                            if (data.veganismType == "product") {
                                productClicked(0.5);
                        }
                            foodClicked(1);
                            data.veganismType = "food";
                            changeData(data);
                            console.log("Veganism type = " + data.veganismType);
                        }}>
                            <FaCarrot color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Food"/>
                    </div>

                    <div className="selection">
                        <div className="asu_circle" id="asu_product" style = {{
                            opacity: product_opacity
                        }}
                        onClick={() => {
                            if (data.veganismType == "food") {
                                foodClicked(0.5);
                            }
                            productClicked(1);
                            data.veganismType = "product";
                            changeData(data);
                            console.log("Veganism type = " + data.veganismType);
                        }}>
                            <FaTshirt color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Product"/>
                    </div>
                </div>
            </div>

            <div className="asu_question_container">
                <Header text="Are you looking to buy premade vegan items or make them yourself?" fontSize={12}/>
                <div className="display_flex">

                    <div className="selection">
                        <div className="asu_circle" id="asu_premade" style = {{
                            opacity: premade_opacity
                        }}
                        onClick={() => {
                            if (data.veganismMakeOrDIY == "diy") {
                                diyClicked(0.5);
                        }
                            premadeClicked(1);
                            data.veganismMakeOrDIY = "premade";
                            changeData(data);
                            console.log("Veganism Make/DIY = " + data.veganismMakeOrDIY);
                        }}>
                            <FaGift color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Pre-made"/>
                    </div>

                    <div className="selection">
                        <div className="asu_circle" id="asu_diy" style = {{
                            opacity: diy_opacity
                        }}
                        onClick={() => {
                            if (data.veganismMakeOrDIY == "premade") {
                                premadeClicked(0.5);
                        }
                            diyClicked(1);
                            data.veganismMakeOrDIY = "diy";
                            changeData(data);
                        console.log("Veganism Make/DIY = " + data.veganismMakeOrDIY);
                        }}>
                            <FaHammer color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Make Them"/>
                    </div>

                </div>
            </div>

            <div className="asu_question_container">
                <Header text="Where are you closest to?" fontSize={12}/>
                <div className="display_flex">
                    <div className="selection">

                        <div className="asu_circle" id="asu_vancouver" style = {{
                            opacity: vancouver_opacity
                        }}
                        onClick={() => {
                            vancouverClicked(1);
                            data.veganismLocation = "vancouver";
                            changeData(data);
                        console.log("Veganism location = " + data.veganismLocation);
                            if (data.veganismLocation == "burnaby" || "richmond") {
                                burnabyClicked(0.5);
                                richmondClicked(0.5);
                        }
                        }}>
                            <Header fontSize={8} text="VAN" color="#FFF"/>
                        </div>
                        <Header fontSize={8} text="Vancouver"/>
                    </div>

                    <div className="selection">
                        <div className="asu_circle" id="asu_burnaby" style = {{
                            opacity: burnaby_opacity
                        }}
                        onClick={() => {
                            burnabyClicked(1);
                            data.veganismLocation = "burnaby";
                            changeData(data);
                        console.log("Veganism location = " + data.veganismLocation);
                            if (data.veganismLocation == "vancouver" || "richmond") {
                                vancouverClicked(0.5);
                                richmondClicked(0.5);
                        }
                        }}>
                            <Header fontSize={8} text="BBY" color="#FFF"/>
                        </div>
                        <Header fontSize={8} text="Burnaby"/>
                    </div>

                    <div className="selection">
                        <div className="asu_circle" id="asu_richmond" style = {{
                            opacity: richmond_opacity
                        }}
                        onClick={() => {
                            richmondClicked(1);
                            data.veganismLocation = "richmond";
                            changeData(data);
                        console.log("Vegansim location = " + data.veganismLocation);
                            if (data.veganismLocation == "vancouver" || "burnaby") {
                                vancouverClicked(0.5);
                                burnabyClicked(0.5);
                        }
                        }}>
                            <Header fontSize={8} text="RICH" color="#FFF"/>
                        </div>
                        <Header fontSize={8} text="Richmond"/>
                    </div>
                </div>
            </div>

            <div className="asu_question_container">
                <Header text="How much money can you commit to veganism?" fontSize={12}/>
                <div className="display_flex">
                <div id="radio_container">
                    <div id="choices_container">

                        <div className="likert_choice" id="likert_money1">
                            <input type="radio" id="js_likert_money1" value="money1" name="vegan_budget"
                            onClick = {() => {
                                data.veganismBudget = "$$$";
                                changeData(data);
                                console.log("Veganism budget = " + data.veganismBudget);
                                finishClicked(1);
                            }}/>
                            <span className="checkmark"></span>
                            <Header fontSize={8} text="$"/>
                        </div>

                        <div className="likert_choice" id="likert_money2">
                            <input type="radio" id="js_likert_money2" value="money2" name="vegan_budget"
                                onClick = {() => {
                                    data.veganismBudget = "$$";
                                    changeData(data);
                                    console.log("Veganism budget = " + data.veganismBudget);
                                finishClicked(1);
                            }}/>
                            <span className="checkmark"></span>
                            <Header fontSize={8} text="$$"/>
                        </div>

                        <div className="likert_choice"  id="likert_money3">
                            <input type="radio" id="js_likert_money3" value="money3" name="vegan_budget"
                                onClick = {() => {
                                    data.veganismBudget = "$$$";
                                    changeData(data);
                                    console.log("Veganism budget = " + data.veganismBudget);
                                finishClicked(1);
                            }}/>
                            <span className="checkmark"></span>
                            <Header fontSize={8} text="$$$"/>
                        </div>
                    </div>
                    <div id="background-bar"></div>
                </div>
                </div>
            </div>

            <div id="asu_button" style = {{
                    opacity: finish_opacity
                }}>
                <Buttons text="Finish" onClick={FinishSetUp}/>
            </div>
        </div>
    </div>
}

AccountSetUp.defaultProps = {

}

export default AccountSetUp;