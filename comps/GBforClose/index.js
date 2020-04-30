import React from 'react';
import './gbforclose.css';
import {IoIosCloseCircle} from 'react-icons/io';

const GBforClose = ({text, onClick}) => <div
className="gb-close"
onClick={onClick}>
    <div className="gb-close-icon">
        <IoIosCloseCircle/>
    </div>
    <div className="gb-close-label">{text}</div>
</div>

GBforClose.defaultProps = {
    text: "Close"
}

export default GBforClose;