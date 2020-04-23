import React, {useState, useEffect} from "react";
import "./asu.css";
import Header from "../../comps/Header";
import CustomForm from "../../comps/CustomForm";

const AccountSetUp = ({}) => {
    return <div id="asu_page">
        <div id="asu_logo"></div>

        <Header text="Let's get started." fontSize={14}/>
        <Header text="What is your name?" fontSize={14}/>

        <CustomForm/>

        <Header text="What kind of veganism do you want to achieve?" fontSize={12}/>
        <div class="display_flex">
            <div class="selection">
                <div class="asu_circle" id="asu_food"></div>
                <Header fontSize={8} text="Food"/>
            </div>

            <div class="selection">
                <div class="asu_circle" id="asu_product"></div>
                <Header fontSize={8} text="Product"/>
            </div>
        </div>

        <Header text="Why do you want to be vegan?" fontSize={12}/>
        <div class="display_flex">
            <div class="selection">
                <div class="asu_circle" id="asu_ethical"></div>
                <Header fontSize={8} text="Ethical"/>
            </div>

            <div class="selection">
                <div class="asu_circle" id="asu_environmental"></div>
                <Header fontSize={8} text="Environmental"/>
            </div>

            <div class="selection">
                <div class="asu_circle" id="asu_health"></div>
                <Header fontSize={8} text="Health"/>
            </div>
        </div>

        <Header text="How strict will you be?" fontSize={12}/>
        <div class="display_flex">
            <div class="selection">
                <div class="asu_circle" id="asu_individual"></div>
                <Header fontSize={8} text="Individual"/>
            </div>

            <div class="selection">
                <div class="asu_circle" id="asu_social"></div>
                <Header fontSize={8} text="Social"/>
            </div>
        </div>
    </div>
}

AccountSetUp.defaultProps = {

}

export default AccountSetUp;