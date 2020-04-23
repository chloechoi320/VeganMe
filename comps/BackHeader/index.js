import React from 'react';
import Header from '../Header';
import './backheader.css';
import { IoIosArrowBack } from 'react-icons/io';

const BackHeader = () =>

<div className="bh_container">
    <div className="bh_arrow"><IoIosArrowBack size="1.25em" color="#1E1D1D"/></div>
    <div><Header color="#1E1D1D" fontSize={10} text="Back"/></div>
</div>

export default BackHeader; 