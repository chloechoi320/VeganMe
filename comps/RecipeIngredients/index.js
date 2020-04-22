import React from 'react';
import './recipeingredients.css';

const RecipeIngredients = ({text}) => <div className="ingredients">
    <div className="r-ingredients">INGREDIENTS</div>
    <div className="r-ingredients-topic">{text}</div>
    <div className="r-ingredients-list">
        <ul>
            <li>{text}</li>
        </ul>
    </div>
</div>

RecipeIngredients.defaultProps = {
    text: "lorem ipsum"
}

export default RecipeIngredients;