import React from 'react';
import './customform.css';

const CustomForm = ({text, color}) => 
<div>
    <input 
    style = {
        {borderBottom: "solid 1px" + color} 
    }
        className="form_box"
        type={text} 
        placeholder={text}/>
    <p><b>{text}</b></p>
</div>

CustomForm.defaultProps = {
    text: "Your name",
    color: "#789174"
};

export default CustomForm;