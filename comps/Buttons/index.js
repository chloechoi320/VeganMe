import React from 'react';
import './buttons.css';

const Buttons = ({text, color, onClick}) => <div
style={{backgroundColor:color, boxShadow: "0 0 5px"+color}}
className="Btn-Box"
onClick={onClick}
>
    <div className="Btn-Box-Inner">
        {text}
    </div>
</div>

Buttons.defaultProps = {
    text: "active button",
    color: "#789174",
}

export default Buttons;