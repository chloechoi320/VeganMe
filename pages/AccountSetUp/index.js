import React, {useState, useEffect} from "react";
import "./asu.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import CustomForm from "../../comps/CustomForm";
import Buttons from "../../comps/Buttons";
import NewLikert from "../../comps/NewLikert";

// icons
import { FaCarrot } from "react-icons/fa"
import { FaTshirt } from "react-icons/fa"
import { FaHandHoldingHeart } from "react-icons/fa"
import { FaLeaf } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"

// function ClickASU() {
//     document.querySelector("#asu_page").style.right = "-100%";
//     Router.push("/Home");
// }

var veganismType = "none";
var veganismWhy = "none";
var veganismStrict = "none";

const AccountSetUp = ({}) => {
    const [food_opacity, foodClicked] = useState("0.5");
    const [product_opacity, productClicked] = useState("0.5");

    const [ethical_opacity, ethicalClicked] = useState("0.5");
    const [environment_opacity, environmentClicked] = useState("0.5");
    const [health_opacity, healthClicked] = useState("0.5");

    const [individual_opacity, individualClicked] = useState("0.5");
    const [social_opacity, socialClicked] = useState("0.5");


    return <div id="asu_page">
        <div id="asu_container">
            <div id="asu_logo">LOGO</div>

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
                <Header text="Why do you want to be vegan?" fontSize={12}/>
                <div class="display_flex">

                    <div class="selection">
                        <div class="asu_circle" id="asu_ethical" style = {{
                            opacity: ethical_opacity
                        }}
                        onClick={() => {
                            ethicalClicked(1);
                            if (veganismWhy = "health" || "environmental") {
                                environmentClicked(0.5);
                                healthClicked(0.5);
                        }
                            veganismWhy = "ethical";
                        }}>
                            <FaHandHoldingHeart color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Ethical"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_environmental" style = {{
                            opacity: environment_opacity
                        }}
                        onClick={() => {
                            environmentClicked(1);
                            if (veganismWhy = "ethical" || "health") {
                                ethicalClicked(0.5);
                                healthClicked(0.5);
                        }
                            veganismWhy = "environmental";
                        }}>
                            <FaLeaf color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Environmental"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_health" style = {{
                            opacity: health_opacity
                        }}
                        onClick={() => {
                            healthClicked(1);
                            if (veganismWhy = "environmental" || "ethical") {
                                environmentClicked(0.5);
                                ethicalClicked(0.5);
                        }
                            veganismWhy = "health";
                        }}>
                            <FaHeart color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Health"/>
                    </div>
                </div>
            </div>

            <div class="asu_question_container">
                <Header text="How strict will you be?" fontSize={12}/>
                <div class="display_flex">
                    <div class="selection">

                        <div class="asu_circle" id="asu_individual" style = {{
                            opacity: individual_opacity
                        }}
                        onClick={() => {
                            individualClicked(1);
                            if (veganismStrict = "social") {
                                socialClicked(0.5);
                        }
                            veganismStrict = "individual";
                        }}>
                            <FaUser color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Individual"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_social" style = {{
                            opacity: social_opacity
                        }}
                        onClick={() => {
                            socialClicked(1);
                            if (veganismStrict = "individual") {
                                individualClicked(0.5);
                        }
                            veganismStrict = "social";
                        }}>
                            <FaUsers color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Social"/>
                    </div>
                </div>
            </div>

            <div class="asu_question_container">
                <Header text="How often do you buy or use vegan products?" fontSize={12}/>
                <div class="display_flex">
                    <NewLikert/>
                </div>
            </div>

            <div id="asu_button">
                <Buttons text="Finish"/>
            </div>
        </div>
    </div>
}

AccountSetUp.defaultProps = {

}

export default AccountSetUp;