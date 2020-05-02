import React from 'react';
import Header from '../Header';
import './backheader.css';
import { IoIosArrowBack } from 'react-icons/io';

function GoBack() {
    window.history.back();
}

const BackHeader = () =>


<div className="bh_container">
    <div id="clickable_back" onClick={GoBack}>
        <div className="bh_arrow"><IoIosArrowBack size="1.25em" color="#1E1D1D"/></div>
        <div id="header_pointer"><Header color="#1E1D1D" fontSize={10} text="Back"/></div>
    </div>
</div>

export default BackHeader; 