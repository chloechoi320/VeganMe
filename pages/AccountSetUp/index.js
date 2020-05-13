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

function FinishSetUp() {
    document.querySelector("#asu_page").style.right = "-100%";
    Router.push("/Home");
}

var veganismType = "none";
var veganismMakeOrDIY = "none";
var veganismLocation = "none";

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

            <Header text="Let's get started." fontSize={14}/>
            <Header text="What is your name?" fontSize={14}/>

            <div id="asu_form">
                <CustomForm/>
            </div>

            <div class="asu_question_container">
                <Header text="What kind of veganism do you want to achieve?" fontSize={12}/>
                <div class="display_flex">
                    <div class="selection">

                        <div class="asu_circle" id="asu_food" style = {{
                            opacity: food_opacity
                        }}
                        onClick={() => {
                            foodClicked(1);
                            if (veganismType = "product") {
                                productClicked(0.5);
                        }
                            veganismType = "food";
                        }}>
                            <FaCarrot color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Food"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_product" style = {{
                            opacity: product_opacity
                        }}
                        onClick={() => {
                            productClicked(1);
                            if (veganismType = "food") {
                                foodClicked(0.5);
                            }
                            veganismType = "product";
                        }}>
                            <FaTshirt color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Product"/>
                    </div>
                </div>
            </div>

            <div class="asu_question_container">
                <Header text="Are you looking to buy premade vegan items or make them yourself?" fontSize={12}/>
                <div class="display_flex">

                    <div class="selection">
                        <div class="asu_circle" id="asu_premade" style = {{
                            opacity: premade_opacity
                        }}
                        onClick={() => {
                            premadeClicked(1);
                            if (veganismMakeOrDIY = "diy") {
                                diyClicked(0.5);
                        }
                            veganismMakeOrDIY = "premade";
                        }}>
                            <FaGift color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Premade"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_diy" style = {{
                            opacity: diy_opacity
                        }}
                        onClick={() => {
                            diyClicked(1);
                            if (veganismMakeOrDIY = "premade") {
                                premadeClicked(0.5);
                        }
                            veganismMakeOrDIY = "diy";
                        }}>
                            <FaHammer color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Make them"/>
                    </div>

                </div>
            </div>

            <div class="asu_question_container">
                <Header text="Where are you closest to?" fontSize={12}/>
                <div class="display_flex">
                    <div class="selection">

                        <div class="asu_circle" id="asu_vancouver" style = {{
                            opacity: vancouver_opacity
                        }}
                        onClick={() => {
                            vancouverClicked(1);
                            if (veganismLocation = "burnaby" || "richmond") {
                                burnabyClicked(0.5);
                                richmondClicked(0.5);
                        }
                            veganismLocation = "vancouver";
                        }}>
                            <Header fontSize={8} text="VAN" color="#FFF"/>
                        </div>
                        <Header fontSize={8} text="Vancouver"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_burnaby" style = {{
                            opacity: burnaby_opacity
                        }}
                        onClick={() => {
                            burnabyClicked(1);
                            if (veganismLocation = "vancouver" || "richmond") {
                                vancouverClicked(0.5);
                                richmondClicked(0.5);
                        }
                            veganismLocation = "burnaby";
                        }}>
                            <Header fontSize={8} text="BBY" color="#FFF"/>
                        </div>
                        <Header fontSize={8} text="Burnaby"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_richmond" style = {{
                            opacity: richmond_opacity
                        }}
                        onClick={() => {
                            richmondClicked(1);
                            if (veganismLocation = "vancouver" || "burnaby") {
                                vancouverClicked(0.5);
                                burnabyClicked(0.5);
                        }
                            veganismLocation = "richmond";
                        }}>
                            <Header fontSize={8} text="RICH" color="#FFF"/>
                        </div>
                        <Header fontSize={8} text="Richmond"/>
                    </div>
                </div>
            </div>

            <div class="asu_question_container">
                <Header text="How much money can you commit to veganism?" fontSize={12}/>
                <div class="display_flex">
                <div id="radio_container">
                    <div id="choices_container">

                        <div class="likert_choice" id="likert_money1">
                            <input type="radio" id="js_likert_money1" value="money1" name="vegan_budget"
                            onClick = {() => {
                                var likert_value = document.querySelector("#js_likert_money1").value;
                                console.log(likert_value);
                                finishClicked(1);
                            }}/>
                            <span class="checkmark"></span>
                            <Header fontSize={8} text="$"/>
                        </div>

                        <div class="likert_choice" id="likert_money2">
                            <input type="radio" id="js_likert_money2" value="money2" name="vegan_budget"
                                onClick = {() => {
                                var likert_value = document.querySelector("#js_likert_money2").value;
                                console.log(likert_value);
                                finishClicked(1);
                            }}/>
                            <span class="checkmark"></span>
                            <Header fontSize={8} text="$$"/>
                        </div>

                        <div class="likert_choice"  id="likert_money3">
                            <input type="radio" id="js_likert_money3" value="money3" name="vegan_budget"
                                onClick = {() => {
                                var likert_value = document.querySelector("#js_likert_money3").value;
                                console.log(likert_value);
                                finishClicked(1);
                            }}/>
                            <span class="checkmark"></span>
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