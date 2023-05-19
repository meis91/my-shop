import React from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import SelectProductCategory from "./SelectProductCategory";
import CreateProduct from "./CreateProduct";
import TextInputField from "../components/TextInputField";

function Index() {
    return (
        <>
            <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        Index
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/product">
                        Products
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/category">
                        Categories
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/discount">
                        Discounts
                    </Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/brands">
                        Discounts
                    </Link>
                </Grid>
            </Grid>
        </>
    );
}

export default Index;