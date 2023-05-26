import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import {Product, useFindAllProductsQuery} from "../__generated__/graphql";
import Loading from "../components/Loading";


function Index() {
    const { data, loading, error } = useFindAllProductsQuery();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (data) {
            // @ts-ignore
            setProducts(data.findAllProducts);
        }
    }, [data]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error retrieving products</p>; // Handle the error case appropriately
    }

    if (products.length === 0) {
        return <p>No products found.</p>;
    }

    return (
        <>
            <Grid container spacing={2} rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        Index
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/product">Products</Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/category">Categories</Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/discount">Discounts</Link>
                </Grid>
                <Grid item xs={12}>
                    <Link to="/brands">Brands</Link>
                </Grid>
            </Grid>

            <Grid container spacing={2}>
                {products.map((product : Product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <div>
                            <Typography variant="h6">{product.name}</Typography>
                            <Typography variant="body1">{product.description}</Typography>
                            <Typography variant="body2">Category: {product.productCategory.name}</Typography>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Index;