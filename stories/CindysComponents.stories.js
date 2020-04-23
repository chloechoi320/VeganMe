import React from 'react';
import CustomForm from '../comps/CustomForm';
import FavouritesBox from '../comps/FavouritesBox';
import CategoryBox from '../comps/CategoryBox';
import BackHeader from '../comps/BackHeader';

export default {
    title: "Cindy's Components",
    component: CindysComponents
}

export const CindysComponents = () => 
<div>
    This is the "form":
    <CustomForm/>
    <p>This is the "favourites box":</p>
    <FavouritesBox/>
    <p>This is the "category" box:</p>
    <CategoryBox/>
    <p>This is the "back header":</p>
    <BackHeader/>
</div>