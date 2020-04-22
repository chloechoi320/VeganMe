import React from 'react';
import './header.css';

const Header = ({text,fontsize, color}) => <div className="custom_header"
    style={{text:text, fontSize:fontsize, color:color}}>
    <h1>Header</h1>
</div>

Header.defaultProps = {
    fontsize: 36,
    color: "#789174",
    text: "Header"
}

export default Header;