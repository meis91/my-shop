import React, {useEffect, useState} from 'react';
import {
    Button,
    Grid,
    Typography
} from "@mui/material";

import { useFormik} from "formik";
import TextInputField from "../components/forms/TextInputField";
import {
    ProductInput,
    useCreateProductMutation, useFindAllBrandsQuery, useFindAllCategoriesQuery,
} from "../__generated__/graphql";
import * as yup from "yup";
import {Link, useNavigate} from "react-router-dom";
import {productValidationSchema} from "../schemas/yupSchemas";
import SelectField from "../components/forms/SelectField";
import FormikSubmitButton from "../components/forms/FormikSubmitButton";
import Loading from "../components/Loading";

type CreateProductProps = {
    categoryId: string
}
// @ts-ignore
function CreateProduct() {
    const navigate = useNavigate();
    const { data: categoriesData, loading: categoriesLoading, error: categoriesError, refetch: refetchCategories } = useFindAllCategoriesQuery();
    const { data: brandsData, loading: brandsLoading, error: brandsError, refetch: refetchBrands } = useFindAllBrandsQuery();
    const [createProduct, { loading, error, data}] = useCreateProductMutation();





    const formik = useFormik({
        initialValues: {
            brand: "",
            category: "",
            name: "",
            description: "",
            price: "",
            quantity: "",
        },
        validationSchema: productValidationSchema,
        onSubmit: async (values) => {
            try {
                let newProduct : ProductInput = {
                    brandId: values.brand,
                    categoryId: values.category,
                    name: values.name,
                    description: values.description,
                    price: parseFloat(values.price),
                    quantity: parseInt(values.quantity),
                }
                const response = await createProduct({
                    variables: {
                        productInput: newProduct,
                    },
                });
                console.log(response.data);
                navigate("/");
            } catch (error) {
                console.error(error);
            }
        }
    });


    useEffect(() => {

        // @ts-ignore
        refetchCategories();
        // @ts-ignore
        refetchBrands();
    }, [refetchCategories, refetchBrands]);
    return (
        <div style={{minWidth:"500px",  }}>
            {loading && <Loading/>}
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5">
                            Create a new Product
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectField
                            name="category"
                            formik={formik}
                            fields={categoriesData ? categoriesData.findAllCategories : []}
                        />
                        <Link to="/create-category">
                            Click here to create a new Category
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <SelectField
                            name="brand"
                            formik={formik}
                            fields={brandsData ? brandsData.findAllBrands : []}
                        />
                        <Link to="/create-brand">
                                Click here to create a new Brand
                        </Link>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="name"
                            formik={formik}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="description"
                            formik={formik}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="price"
                            formik={formik}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="quantity"
                            formik={formik}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                        <FormikSubmitButton isSubmitting={formik.isSubmitting}/>
                    </Grid>
                </Grid>
            </form>

            <div>{JSON.stringify(formik.values)}</div>
        </div>
    );
}

export default CreateProduct;