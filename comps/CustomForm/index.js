import React from 'react';
import './customform.css';
import Header from "../../comps/Header";

const CustomForm = ({text, color}) => 
<div>
    <input 
    style = {
        {borderBottom: "solid 1px" + color} 
    }
        className="form_box"
        type={text} 
        placeholder={text}/>
    <p><Header text={text} fontSize={8}/></p>
</div>

CustomForm.defaultProps = {
    text: "Your name",
    color: "#789174"
};

export default CustomForm;