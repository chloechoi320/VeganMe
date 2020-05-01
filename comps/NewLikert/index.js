import React from 'react';
import './newlikert.css';

const NewLikert = () => 
<div id="radio_container">
    <div id="choices_container">
        <div class="likert_choice" id="likert_never">
            <input type="radio" value="never" name="vegan_frequency"/>
            <span class="checkmark"></span>
            <p>Never</p>
        </div>

        <div class="likert_choice" id="likert_sometimes">
            <input type="radio" value="sometimes" name="vegan_frequency"/>
            <span class="checkmark"></span>
            <p>Sometimes</p>
        </div>

        <div class="likert_choice"  id="likert_regularly">
            <input type="radio" value="regularly" name="vegan_frequency"/>
            <span class="checkmark"></span>
            <p>Regularly</p>
        </div>
    </div>
    <div id="background-bar"></div>
</div>

export default NewLikert;