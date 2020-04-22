import React from 'react';
import CustomForm from '../comps/CustomForm';
import FavouritesBox from '../comps/FavouritesBox';

export default {
    title: "Cindy's Components",
    component: MyCustomForm
}

export const MyCustomForm = () => 
<div>
    This is the "form":
    <CustomForm/>
    <p>This is the "favourites box":</p>
    <FavouritesBox/>
</div>