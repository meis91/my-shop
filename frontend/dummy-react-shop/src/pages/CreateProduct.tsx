import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    Container,
    FormControl,
    Grid,
    MenuItem,
    TextField,
    Typography
} from "@mui/material";

import {Field, Form, Formik, useFormik, useFormikContext} from "formik";
import TextInputField from "../components/TextInputField";
import {gql, useMutation, useQuery} from "@apollo/client";
import {ProductCategoriesProps} from "../App";
import {CreateProductDocument, InputMaybe, Maybe, ProductCategory, ProductInput, Scalars} from "../gql/graphql";



type ProductInput = {
    description?: InputMaybe<Scalars['String']>;
    name?: InputMaybe<Scalars['String']>;
    price?: InputMaybe<Scalars['BigDecimal']>;
    productCategoryId?: InputMaybe<Scalars['ID']>;
    quantity?: InputMaybe<Scalars['Int']>;
};

const CREATE_PRODUCT = gql`
    mutation createProduct(
        $productInput: ProductInput
        ){
        createProduct(
            productInput: $productInput
        ){
            id
            name
        }
    }
`;

function CreateProduct({productCategories}: ProductCategoriesProps) {
    /*const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);*/
    const [createProduct, { loading, error, data}] = useMutation(CREATE_PRODUCT);


    const newProductForm = useFormik({
        initialValues: {
                name: "",
                description: "",
                price: 0,
                productCategory: "1",
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
                    console.log(response.data.createProduct);
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });


    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    if(!productCategories) return <p>Fetching...</p>;


    return (
        <>
            <Container component="main" maxWidth="sm" className="mui-container-fluid">

                    <Box
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            px: 4,
                            py: 6,
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <form onSubmit={newProductForm.handleSubmit}>
                        <Grid container spacing={2} rowSpacing={2}>
                            <Grid item xs={12}>
                                <Typography component="h2" variant="h5">
                                    Create a new Product
                                </Typography>
                            </Grid>

                            <Grid item xs={12}>
                                {/*https://codesandbox.io/s/66749678custom-text-in-mui-select-component-zm5lc?file=/index.js*/}
                                <FormControl sx={{width: "100%"}}>
                                    <TextField
                                        id="outlined-select"
                                        name="productCategory"
                                        select
                                        align="left"
                                        margin="normal"
                                        label="Product Category"
                                        /*value={newProductForm.values.productCategory}*/
                                        onChange={newProductForm.handleChange}
                                    >
                                        {productCategories.map((productCategory: { id: string, name: string }) => (
                                            <MenuItem key={productCategory.id} value={productCategory.id}>
                                                {productCategory.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12}>
                                <TextInputField
                                    name="name"
                                    handleInput={newProductForm.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} >
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
                            <Grid item xs={12} >
                                <TextInputField
                                    name="quantity"
                                    handleInput={newProductForm.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }} >
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
                    </Box>
                <div>{JSON.stringify(newProductForm.values)}</div>
            </Container>

        </>
    );
}

export default CreateProduct;