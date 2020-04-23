import React, {useState, useEffect} from "react";
import "./asu.css";
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

function ClickASU() {
    document.querySelector("#asu_page").style.right = "-100%";
    Router.push("/ChloeHome");
}


const AccountSetUp = ({}) => {
    return <div id="asu_page" onClick={ClickASU}>
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
                        <div class="asu_circle" id="asu_food">
                            <FaCarrot color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Food"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_product">
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
                        <div class="asu_circle" id="asu_ethical">
                            <FaHandHoldingHeart color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Ethical"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_environmental">
                            <FaLeaf color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Environmental"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_health">
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
                        <div class="asu_circle" id="asu_individual">
                            <FaUser color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Individual"/>
                    </div>

                    <div class="selection">
                        <div class="asu_circle" id="asu_social">
                            <FaUsers color="#FFF" size="2em"/>
                        </div>
                        <Header fontSize={8} text="Social"/>
                    </div>
                </div>
            </div>

            <div class="asu_question_container">
                <Header text="How often do you buy or use vegan products?" fontSize={12}/>
                <div class="display_flex">
                    INSERT LINKERT HERE.
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