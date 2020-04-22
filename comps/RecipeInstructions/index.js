import React from 'react';
import './recipeinstructions.css';

const RecipeInstructions = ({text}) => <div className="r-instructions">
    <div className="r-instructions-bg">
        <div className="r-instructions-num">1</div>
    </div>
    <div className="r-instructions-step">{text}</div>
</div>

RecipeInstructions.defaultProps = {
    text: "lorem ipsum"
}

export default RecipeInstructions;