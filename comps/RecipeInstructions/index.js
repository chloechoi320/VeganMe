import React from 'react';
import './recipeinstructions.css';

const RecipeInstructions = ({num, text}) => <div className="r-instructions">
    <div className="r-instructions-bg">
        <div className="r-instructions-num">{num}</div>
    </div>
    <div className="r-instructions-step">{text}</div>
</div>

RecipeInstructions.defaultProps = {
    num: "1",
    text: "lorem ipsum"
}

export default RecipeInstructions;