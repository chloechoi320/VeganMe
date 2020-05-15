import React from 'react';
import './restaurants.css';

const Restaurants = ({name, location, onClick}) => 
<div className="list-container">
<div className="list-box"
onClick={onClick}>
    <div className="txt">
        <div className="loc">{name}</div>
        <div>{location}</div>
    </div>
</div>
</div>

Restaurants.defaultProps = {
    name: "Vegan Pizza House",
    location: "Vancouver, BC"
}

export default Restaurants;