import React from 'react';
import './header.css';

const Header = ({text, fontSize, color}) => <div className="custom_header"
    style={{fontSize: fontSize, color:color}}>
    <h1>{text}</h1>
</div>

Header.defaultProps = {
    fontSize: 36,
    color: "#789174",
    text: "Header"
}

export default Header;