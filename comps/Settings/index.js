import React from 'react';
import './settings.css';
import {FiMenu} from 'react-icons/fi';

const Settings = () => <div>
    <div id="mymenu" class="menu">
        {/* <a href="javascript:voide(0)" class="closebtn" onClick="closeNav()">Back</a>
        <a href="#">A</a>
        <a href="#">B</a>
        <a href="#">C</a>
        <a href="#">D</a> */}
    </div>
    <div id="main">
        {/* <button class="openbtn" onClick="openNav()"><img src={require('./settingsimg.png')}></img></button> */}
        <FiMenu size="2em"/>
    </div>
</div>

export default Settings;