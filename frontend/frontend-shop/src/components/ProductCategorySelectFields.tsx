import React from 'react';

import {MenuItem} from "@mui/material";

interface productCategory {
    id: number;
    name: string;
}
function ProductCategorySelectFields({productCategories}:{productCategories:Array<productCategory>}) {
    if(!Array.isArray(productCategories)){
        return null;
    }
    console.log(productCategories)
    return (
        <>
            {productCategories.map(productCategory => (
                <MenuItem key={productCategory.id} value={productCategory.id}>
                    {productCategory.name}
                </MenuItem>
            ))}
        </>
);
}

export default ProductCategorySelectFields;