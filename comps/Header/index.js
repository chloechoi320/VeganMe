import React from 'react';
import './header.css';

const Header = ({text, fontSize, color}) => <div className="custom_header"
    style={{text:text, fontSize: fontSize, color:color}}>
    <h1>Header</h1>
</div>

Header.defaultProps = {
    fontSize: 36,
    color: "#789174",
    text: "Header"
}

export default Header;