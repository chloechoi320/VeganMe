import React from 'react';
import './navigationbar.css';

const NavigationBar = () => <div>
    <nav class="bar">
        <div class="container">
            <a href="#map"><img src={require('./map.png')}></img></a>
            <a href="#home"><img src={require('./home.png')}></img></a>
            <a href="#resources"><img src={require('./resources.png')}></img></a>
        </div>
    </nav>
</div>

export default NavigationBar;