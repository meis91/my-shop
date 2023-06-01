import React from 'react';
import {useNavigate} from "react-router-dom";
import {useCreateBrandMutation} from "../__generated__/graphql";
import {useFormik} from "formik";
import Loading from "../components/Loading";
import {Grid, Typography} from "@mui/material";
import TextInputField from "../components/TextInputField";
import FormikSubmitButton from "../components/FormikSubmitButton";
import {createBrandValidationSchema} from "../schemas/yupSchemas";

function CreateBrand(){
    const navigate = useNavigate();
    const [createBrand, { loading, error, data }] = useCreateBrandMutation();



    const formik = useFormik({
        initialValues: {
            name: "",
        },
        validationSchema: createBrandValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await createBrand({
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
                            Create new Brand
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
export default CreateBrand;