import React from 'react';
import './restaurants.css';

const Restaurants = ({name, location}) => <div className="list-box">
    <div className="txt">
        <div className="loc">{name}</div>
        <div>{location}</div>
    </div>
</div>

Restaurants.defaultProps = {
    name: "Vegan Pizza House",
    location: "Vancouver, BC"
}

export default Restaurants;