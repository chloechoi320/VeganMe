import React from 'react';
import './gbforcategories.css';
import {MdApps} from 'react-icons/md';

const GBforCategories = ({text, onClick}) => <div
className="gbc"
onClick={onClick}>
    <div className="gbc-icon">
        <MdApps />
    </div>
    <div className="gbc-label">{text}</div>
</div>

GBforCategories.defaultProps = {
    text: "Categories"
}

export default GBforCategories;