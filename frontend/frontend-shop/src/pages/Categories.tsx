import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate} from "react-router-dom";
import {useCreateProductCategoryMutation, useFindAllProductCategoriesQuery} from "../__generated__/graphql";
import { Grid, Typography, TextField, Button} from "@mui/material";
import Loading from "../components/Loading";


const Categories = () => {
    const navigate = useNavigate();
    const [createProductCategory, { loading, error, data }] = useCreateProductCategoryMutation();

    const createCategoryValidationSchema = yup.object({
        name: yup.string().required("Category Name is required!"),
    });

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: createCategoryValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await createProductCategory({
                    variables: {
                        name: values.name,
                    },
                });
                console.log(response.data);
                navigate(-1);
            } catch (error) {
                console.error(error);
            }
        },
    });

    return (
        <div style={{ maxWidth: "300px" }}>
            {loading && <Loading/>}
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5">
                            Create new Category
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="name"
                            label="Name"
                            autoFocus
                            {...formik.getFieldProps("name")}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                        />
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, width: "50%" }}
                            disabled={formik.isSubmitting || loading}
                        >
                            {formik.isSubmitting ? "Submitting..." : "Submit"}
                        </Button>
                    </Grid>
                </Grid>
            </form>
            <div>{JSON.stringify(formik.values)}</div>
        </div>
    );
};

export default Categories;