import React, {useEffect} from 'react';
import {useQuery} from "@apollo/client";
import {LOAD_PRODUCT_CATEGORIES} from "../graphQL/queries";
import {Field} from "formik";
import {MenuItem, TextField} from "@mui/material";

const ProductCategoryField = () => {
    const { loading, error, data } = useQuery(LOAD_PRODUCT_CATEGORIES);

    useEffect(() => {
        console.log(data);
    },[data]);

    return (
        <>

        </>
    );
};

export default ProductCategoryField;
