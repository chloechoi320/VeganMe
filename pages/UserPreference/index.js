import React, {useState, useEffect} from "react";
import "./userpreference.css";
import Link from 'next/link';
import Router from 'next/router';
import Header from "../../comps/Header";
import CustomForm from "../../comps/CustomForm";
import Buttons from "../../comps/Buttons";

// icons
import { FaCarrot } from "react-icons/fa"
import { FaTshirt } from "react-icons/fa"
import { FaHandHoldingHeart } from "react-icons/fa"
import { FaLeaf } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { FaUser } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"

function ClickUP() {
    document.querySelector("#up_page").style.right = "-100%";
    Router.push("/Home");
}


const UserPreference = ({}) => {
    return <div id="up_page" onClick={ClickUP}>
        <div id="up_container">
            <div id="up_logo">LOGO</div>

            <Header text="Let's update your preferences." fontSize={14}/>

            <div id="up_form">
                <CustomForm/>
            </div>

            <div class="up_question_container">
                <Header text="What kind of veganism do you want to achieve?" fontSize={12}/>
                <div class="display_flex">
                    <div class="selection">
                        <div class="up_circle" id="up_food">
                            <FaCarrot color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Food"/>
                    </div>

                    <div class="selection">
                        <div class="up_circle" id="up_product">
                            <FaTshirt color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Product"/>
                    </div>
                </div>
            </div>

            <div class="up_question_container">
                <Header text="Why do you want to be vegan?" fontSize={12}/>
                <div class="display_flex">
                    <div class="selection">
                        <div class="up_circle" id="up_ethical">
                            <FaHandHoldingHeart color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Ethical"/>
                    </div>

                    <div class="selection">
                        <div class="up_circle" id="up_environmental">
                            <FaLeaf color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Environmental"/>
                    </div>

                    <div class="selection">
                        <div class="up_circle" id="up_health">
                            <FaHeart color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Health"/>
                    </div>
                </div>
            </div>

            <div class="up_question_container">
                <Header text="How strict will you be?" fontSize={12}/>
                <div class="display_flex">
                    <div class="selection">
                        <div class="up_circle" id="up_individual">
                            <FaUser color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Individual"/>
                    </div>

                    <div class="selection">
                        <div class="up_circle" id="up_social">
                            <FaUsers color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Social"/>
                    </div>
                </div>
            </div>

            <div class="up_question_container">
                <Header text="How often do you buy or use vegan products?" fontSize={12}/>
                <div class="display_flex">
                    INSERT LINKERT HERE.
                </div>
            </div>

            <div id="up_button">
                <Buttons text="Finish"/>
            </div>
        </div>
    </div>
}

UserPreference.defaultProps = {

}

export default UserPreference;