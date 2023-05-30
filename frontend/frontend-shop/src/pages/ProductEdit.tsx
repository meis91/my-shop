import React, {useEffect, useState} from 'react';
import {Link, useLocation, useParams} from "react-router-dom";
import {ProductId} from "../types";
import {
    Product, ProductCategory,
    ProductInput,
    useCreateProductMutation,
    useFindAllProductCategoriesQuery,
    useFindProductQuery
} from "../__generated__/graphql";
import Loading from "../components/Loading";
import {Button, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import * as yup from "yup";
import {useFormik} from "formik";

function ProductEdit() {
    const {productId} = useParams<ProductId>();
    const location = useLocation();
    const product = location.state;
    console.log(product);

    const editProductValidationSchema = yup.object({
        name: yup
            .string()
            .required("Name is required!"),
        description: yup
            .string(),
        price: yup
            .number()
            .typeError("Please enter a valid number")
            .required("Price is required"),
        quantity: yup
            .number()
            .typeError("Please enter a valid number")
            .min(1, "Quantity must be at least 1")
            .required("Quantity is required"),
    });

    const formik = useFormik({
        initialValues: product.findProduct,
        enableReinitialize: true,
        validationSchema: editProductValidationSchema,
        onSubmit: async (values) => {
            console.log(values);
        }
    });




    if (product) {
        return (
            <div style={{ maxWidth: "300px" }}>

                <form onSubmit={formik.handleSubmit}>
                    <Grid container spacing={2} rowSpacing={2}>
                        <Grid item xs={12}>
                            <Typography component="h2" variant="h5">
                                Edit Product
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="name"
                                label="Name"

                                {...formik.getFieldProps("name")}
                                error={formik.touched.name && Boolean(formik.errors.name)}
                                helperText={formik.touched.name && formik.errors.name}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="description"
                                label="Description"
                                {...formik.getFieldProps("description")}
                                error={formik.touched.description && Boolean(formik.errors.description)}
                                helperText={formik.touched.description && formik.errors.description}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="price"
                                label="Price"
                                {...formik.getFieldProps("price")}
                                error={formik.touched.price && Boolean(formik.errors.price)}
                                helperText={formik.touched.price && formik.errors.price}
                                InputProps={{
                                    endAdornment: <Typography variant="body1">€</Typography>,
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                margin="normal"
                                fullWidth
                                id="quantity"
                                label="Quantity"
                                {...formik.getFieldProps("productInventory.quantity")}
                                error={formik.touched.quantity && Boolean(formik.errors.quantity)}
                                helperText={formik.touched.quantity && formik.errors.quantity}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{display: "flex", justifyContent: "center"}}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{mt: 3, mb: 2, width: "50%"}}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        );
    }
}
export default ProductEdit;