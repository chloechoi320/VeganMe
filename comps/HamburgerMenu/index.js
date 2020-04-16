import React from 'react';
import './hamburgermenu.css';
import './Hamburger.js';

const HamburgerMenu = () => <div>
    <div id="mymenu" class="menu">
        <a href="javascript:voide(0)" class="closebtn" onClick="closeNav()">Back</a>
        <a href="#">A</a>
        <a href="#">B</a>
        <a href="#">C</a>
        <a href="#">D</a>
    </div>
    <div id="main">
        <button class="openbtn" onClick="openNav()">☰</button>
    </div>
</div>

export default HamburgerMenu;