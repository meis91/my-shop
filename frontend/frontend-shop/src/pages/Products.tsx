/*
import React, {useEffect, useState} from 'react';
import {Button, Grid, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import {
    ProductCategory,
    ProductInput,
    useCreateProductMutation,
    useFindAllProductCategoriesQuery,
} from "../__generated__/graphql";
import {useFormik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import * as yup from 'yup';
import Loading from "../components/Loading";
import TextInputField from "../components/TextInputField";

function Products() {
    const navigate = useNavigate();
    const { data: categoriesData, loading: categoriesLoading, error: categoriesError, refetch: refetchCategories } = useFindAllProductCategoriesQuery();
    const [createProduct, { loading: createProductLoading, error: createProductError }] = useCreateProductMutation();
    const [categories , setCategories] = useState<ProductCategory[]>([]);


    const createProductValidationSchema = yup.object({
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
        initialValues: {
            name: "",
            brandId: "",
            description: "",
            price: "",
            productCategoryId: "",
            quantity: "",
        },
        validationSchema: createProductValidationSchema,
        onSubmit: async (values) => {
            try {
                let newProduct : ProductInput = {
                    name: values.name,
                    description: values.description,
                    price: parseFloat(values.price),
                    productCategoryId: values.productCategoryId,
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
        },
    });

    useEffect(() => {
        if(categoriesData){
            // @ts-ignore
            setCategories(categoriesData.findAllProductCategories);
        }
    }, [categoriesData]);

    useEffect(() => {
        // @ts-ignore
        refetchCategories();
    }, [refetchCategories]);

    if (categoriesLoading) {
        return <Loading />;
    }

    if (categoriesError) {
        return <p>Error retrieving categories</p>; // Handle the error case appropriately
    }

    if (categories.length === 0) {
        return <p>No categories found.</p>;
    }

    return (
        <div style={{ maxWidth: "300px" }}>
            {createProductLoading && <Loading />}
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5">
                            Create a new Product
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Select
                            fullWidth
                            id="productCategoryId"
                            name="productCategoryId"
                            value={formik.values.productCategoryId}
                            onChange={formik.handleChange}
                            error={formik.touched.productCategoryId && Boolean(formik.errors.productCategoryId)}
                            displayEmpty
                            sx={{ textAlign: "left" }}
                        >
                            <MenuItem value="" disabled>
                                Select Category
                            </MenuItem>
                            {categories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            ))}
                        </Select>
                        <Link to="/category">Create a new Category</Link>
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
                            {...formik.getFieldProps("quantity")}
                            error={formik.touched.quantity && Boolean(formik.errors.description)}
                            helperText={formik.touched.description && formik.errors.description}
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

export default Products;*/
