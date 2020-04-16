import React from 'react';
import './selectbuttons.css';

const SelectButton = ({img, color, onClick}) => <div
style={{backgroundColor:color, boxShadow: "0 0 5px"+color}}
className="Select-Btn-Box"
onClick={onClick}
>
    <div className="Select-Btn-Box-Inner">
        <img src="https://img.icons8.com/material-outlined/24/000000/carrot.png"/>
    </div>
</div>

SelectButton.defaultProps = {
    color: "#789174"
}

export default SelectButton;