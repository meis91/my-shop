import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import { useCreateDiscountMutation } from "../__generated__/graphql";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup';
import Loading from "../components/Loading";
import {createDiscountValidationSchema} from "../schemas/yupSchemas";

function Discounts() {
    const navigate = useNavigate();
    const [createDiscount, {loading, error, data}] = useCreateDiscountMutation();

    const formik = useFormik({
        initialValues: {
            name: "",
            percentage: 5,
        },
        validationSchema: createDiscountValidationSchema,
        onSubmit: async (values) => {
            try {
                const response = await createDiscount({
                    variables: {
                        name: values.name,
                        percentage: values.percentage,
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
                            Create a new Discount
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
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            fullWidth
                            id="percentage"
                            label="Percentage"
                            {...formik.getFieldProps("percentage")}
                            error={formik.touched.percentage && Boolean(formik.errors.percentage)}
                            helperText={formik.touched.percentage && formik.errors.percentage}
                            InputProps={{
                                endAdornment: <Typography variant="body1">%</Typography>,
                            }}
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
            <div>{JSON.stringify(formik.values)}</div>
        </div>
    );
}

export default Discounts;