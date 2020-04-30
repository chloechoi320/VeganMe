import React from 'react';
import './gbforbacktotop.css';
import {FaArrowUp} from 'react-icons/fa';


const GBforBacktoTop = ({text, onClick}) => <div
className="gbbt"
onClick={onClick}>
    <div className="gbbt-icon">
        <FaArrowUp />
    </div>
    <div className="gbbt-label">{text}</div>
</div>

GBforBacktoTop.defaultProps = {
    text: "Back to Top"
}

export default GBforBacktoTop;