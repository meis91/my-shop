import React from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import TextInputField from "../components/TextInputField";
import {
    Discount,
    DiscountInput,
    ProductInput,
    useCreateDiscountMutation,
    useCreateProductMutation
} from "../__generated__/graphql";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";

function Discounts() {
    const [createDiscount, { loading, error, data}] = useCreateDiscountMutation();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: "",
            percentage: 0,
        },
        onSubmit: values => {
            console.log(values);
            createDiscount({
                variables: {
                    name: values.name,
                    percentage: values.percentage
                },
            })
                .then((response) => {
                    // @ts-ignore
                    console.log(response.data);
                    navigate("/");
                })
                .catch((error) => {
                    console.error(error);
                });
        },
    });

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} rowSpacing={2}>
                    <Grid item xs={12}>
                        <Typography component="h2" variant="h5">
                            Create a new Discount
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextInputField
                            name="name"
                            handleInput={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="percentage"
                            type="number"
                            onChange={formik.handleChange}
                            label="Percentage"
                            id="outlined-start"
                            placeholder="Price Reduction Percentage"
                            sx={{ width:"100%" }}
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
        </>
    );
}

export default Discounts;