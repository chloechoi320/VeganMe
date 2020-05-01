import React, {useState} from 'react';
import './customform.css';
import Header from "../../comps/Header";

const CustomForm = ({text, color}) => {

    const [form_value, valuePulled] = useState();

    return <div>
        <input 
        style = {
            {borderBottom: "solid 1px" + color} 
        }
            className="form_box"
            type={text} 
            placeholder={text}/>
        <p><Header text={text} fontSize={8}/></p>
    </div>
}

CustomForm.defaultProps = {
    text: "Your name",
    color: "#789174"
};

export default CustomForm;