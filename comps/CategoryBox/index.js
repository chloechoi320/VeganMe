import React from 'react';
import './cb.css';

const CategoryBox = ({img, text, color, onClick}) => <div
style={{backgroundColor:color, boxShadow: "0 0 5px"+color}}
className="Category-Box"
onClick={onClick}
>
    <div className="Category-Box-Inner">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png"/>
        {text}
    </div>
</div>

CategoryBox.defaultProps = {
    color: "#efeeeb",
    text: "Categories"
}

export default CategoryBox;