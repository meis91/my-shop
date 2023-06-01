import React from "react";
import { useFormik } from "formik";
import { useNavigate} from "react-router-dom";
import {useCreateCategoryMutation} from "../__generated__/graphql";
import { Grid, Typography} from "@mui/material";
import Loading from "../components/Loading";
import TextInputField from "../components/forms/TextInputField";
import FormikSubmitButton from "../components/forms/FormikSubmitButton";
import {createCategoryValidationSchema} from "../schemas/yupSchemas";


const CreateCategory = () => {
    const navigate = useNavigate();
    const [createCategory, { loading, error, data }] = useCreateCategoryMutation();



    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: createCategoryValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await createCategory({
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
        <div style={{ maxWidth: "500px" }}>
            {loading && <Loading/>}
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5">
                            Create new Category
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField formik={formik} name="name"/>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <FormikSubmitButton isSubmitting={formik.isSubmitting}/>
                    </Grid>
                </Grid>
            </form>
            <div>{JSON.stringify(formik.values)}</div>
        </div>
    );
};

export default CreateCategory;