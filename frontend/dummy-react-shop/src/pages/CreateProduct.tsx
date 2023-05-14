import React, {useEffect, useState} from 'react';
import {Box, Container, MenuItem, TextField, Typography} from "@mui/material";
import {Field, Form, Formik, useFormik} from "formik";
import TextInputField from "../components/TextInputField";
import {useQuery} from "@apollo/client";
import {LOAD_PRODUCT_CATEGORIES} from "../graphQL/queries";
import ProductCategoryField from "../components/ProductCategoryField";
import ProductCategorySelectFields from "../components/ProductCategorySelectFields";

export type ProductCategory = {
    id: string;
    name: string;
}

export type ProductCategories = {
    findAllProductCategories: ProductCategory[];
}
function CreateProduct() {
    const [productCategories, setProductCategories] = useState<ProductCategory[]>([]);
    const { loading, error, data } = useQuery(LOAD_PRODUCT_CATEGORIES);
   /* const [category, setCategory] = useState<ProductCategory>({id: "", name: ""});
    const [newCategory, setNewCategory] = useState(false);*/
    const newProductForm = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: 0.0,
            productCategory: "",
            quantity:0,
        },

        onSubmit: values => {

        },
    });



    useEffect(() => {
        console.log(data)
        if(data){
            setProductCategories(data.findAllProductCategories);
        }
    },[data]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    //setProductCategories(data.findAllProductCategories);
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

                    <Typography component="h2" variant="h5">
                        Create a new Product
                    </Typography>
                    <form>
                        <TextField align="left"
                                   sx={{ m: 1, width: '300px',  minWidth:"300px" }}
                                   margin="normal"
                                   id="outlined-select-measurement"
                                   name="productCategory"
                                   select
                                   label="Product Category"
                                   value={newProductForm.values.productCategory}
                                   onChange={newProductForm.handleChange}
                        >
                            {/*<ProductCategorySelectFields productCategories={productCategories}/>*/}
                            {productCategories.map(productCategory => (
                                <MenuItem key={productCategory.id} value={productCategory.id}>
                                    {productCategory.name}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextInputField
                            value={newProductForm.initialValues.name}
                            type="text"
                            label="Name"
                            placeholder="Product Name"
                            handleInput={newProductForm.handleChange}
                        />

                    </form>
                </Box>
            </Container>

        </>
    );
}

export default CreateProduct;