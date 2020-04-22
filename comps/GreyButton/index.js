import React from 'react';
import './greybutton.css';

const GreyButton = ({text, onClick}) => <div
className="grey-btn"
onClick={onClick}>
    <div className="grey-btn-icon">
        {/* insert icon here */}
    </div>
    <div className="grey-btn-label">{text}</div>
</div>

GreyButton.defaultProps = {
    text: "Label Name"
}

export default GreyButton;