import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {ProductId} from "../types";
import {
    useFindAllBrandsQuery,
    useFindAllCategoriesQuery,
    useFindAllDiscountsQuery,
} from "../__generated__/graphql";
import Loading from "../components/Loading";
import {Grid, Typography} from "@mui/material";
import * as yup from "yup";
import {useFormik} from "formik";
import SelectField from "../components/forms/SelectField";
import TextInputField from "../components/forms/TextInputField";
import FormikSubmitButton from "../components/forms/FormikSubmitButton";
import {productValidationSchema} from "../schemas/yupSchemas";

function EditProduct() {
    const navigate = useNavigate();
    const { data: categoriesData, loading: categoriesLoading, error: categoriesError, refetch: refetchCategories } = useFindAllCategoriesQuery();
    const { data: brandsData, loading: brandsLoading, error: brandsError, refetch: refetchBrands } = useFindAllBrandsQuery();
    const { data: discountsData, loading: discountsLoading, error: discountsError, refetch: refetchDiscounts } = useFindAllDiscountsQuery();

    const {productId} = useParams<ProductId>();
    const location = useLocation();
    const product = location.state;
    console.log(product);


    const formik = useFormik({
        initialValues: {
            brand: product.findProduct.brand.id,
            category: product.findProduct.category.id,
            name: product.findProduct.name,
            description: product.findProduct.description,
            price: product.findProduct.price,
            quantity: product.findProduct.inventory.quantity,
        },
        enableReinitialize: true,
        validationSchema: productValidationSchema,
        onSubmit: async (values) => {
            console.log(values);
        }
    });


    useEffect(() => {

        // @ts-ignore
        refetchCategories();
        // @ts-ignore
        refetchBrands();
        // @ts-ignore
        refetchDiscounts();
    }, [refetchCategories, refetchBrands, refetchDiscounts]);

    if (product) {
        return (
            <div style={{minWidth:"500px",  }}>
                {brandsLoading || categoriesLoading || discountsLoading && <Loading/>}
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
                        <Grid item xs={12}>
                            <SelectField
                                name="discount"
                                formik={formik}
                                fields={discountsData ? discountsData.findAllDiscounts : []}
                            />
                            <Link to="/create-discount">
                                Click here to create a new Discount
                            </Link>
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
}
export default EditProduct;
