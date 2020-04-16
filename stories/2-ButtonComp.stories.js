import React, { Component } from 'react';
import MainButton from "../comps/MainButtons";
import SelectButton from "../comps/SelectButtons";
import CategoryBox from "../comps/CategoryBox";


export default {
    title: "s's comps",
    Component: MainButton,
}

export const VMMainButton = () => <div>
    <MainButton/>
    <MainButton
        text="inactive button"
        color="#78917473"
    />
</div>

export const VMSelectButton = () => <div>
    <SelectButton/>
    <SelectButton
        color="#ed8733"
    />
</div>

export const VMCategories = () => <div>
    <CategoryBox
    />
    <CategoryBox
        img="https://img.icons8.com/material-rounded/24/000000/cutlery.png"
        text="Recipe"
    />
</div>