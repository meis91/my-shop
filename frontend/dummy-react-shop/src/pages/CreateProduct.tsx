import React from 'react';
import {
    Button,
    Grid,
    Typography
} from "@mui/material";

import { useFormik} from "formik";
import TextInputField from "../components/TextInputField";
import {ProductInput, useCreateProductMutation} from "../__generated__/graphql";

type CreateProductProps = {
    categoryId: string
}
// @ts-ignore
function CreateProduct({categoryId} : CreateProductProps) {
    const [createProduct, { loading, error, data}] = useCreateProductMutation();

    const newProductForm = useFormik({
        initialValues: {
                name: "",
                description: "",
                price: 0,
                productCategory: categoryId,
                quantity: 0,
        },

        onSubmit: values => {
            console.log(values);
            let newProduct : ProductInput = {
                name: values.name,
                description: values.description,
                price: values.price,
                productCategoryId: values.productCategory,
                quantity: values.quantity
            }
            createProduct({
                variables: {
                    productInput: newProduct,
                },
            })
                .then((response) => {
                    // @ts-ignore
                    console.log(response.data.createProduct);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });

    return (
        <>
            <form onSubmit={newProductForm.handleSubmit}>
                <Grid container spacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5">
                            Create a new Product
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="name"
                            handleInput={newProductForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="description"
                            handleInput={newProductForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="price"
                            handleInput={newProductForm.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="quantity"
                            handleInput={newProductForm.handleChange}
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

            <div>{JSON.stringify(newProductForm.values)}</div>
        </>
    );
}

export default CreateProduct;