import React from 'react';
import './mainbuttons.css';

const MainButton = ({text, color, onClick}) => <div
style={{backgroundColor:color, boxShadow: "0 0 5px"+color}}
className="Main-Btn-Box"
onClick={onClick}
>
    <div className="Main-Btn-Box-Inner">
        {text}
    </div>
</div>

MainButton.defaultProps = {
    text: "active button",
    color: "#789174",
}

export default MainButton;