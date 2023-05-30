import React, {useEffect, useState} from 'react';
import {Box, Container, Grid, Typography} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import {Product, useFindAllProductsQuery} from "../__generated__/graphql";
import Loading from "../components/Loading";
import {styles} from "../styles/styles";

function Index() {
    const { data, loading, error, refetch } = useFindAllProductsQuery();
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (data) {
            // @ts-ignore
            setProducts(data.findAllProducts);
        }
    }, [data]);

    useEffect(() => {
        // @ts-ignore
        refetch();
    }, [refetch]);

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
        <>products
            {loading && <Loading/>}
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
                {products.map((product: Product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <div style={styles.productContainer}>
                            <Link
                                to={`/product-details/${product.id}`}
                            >
                            <Typography variant="h6" style={styles.productName}>
                                {product.name}
                            </Typography>
                            <Typography variant="body1" style={styles.productDescription}>
                                {product.description}
                            </Typography>
                            <Typography variant="body2" style={styles.productCategory}>
                                Category: {product.productCategory.name}
                            </Typography>
                            <Typography variant="body2" style={styles.productPrice}>
                                Price: {product.price}€
                            </Typography>
                            {product.discountedPrice && (
                                <Typography variant="body2" style={styles.productDiscount}>
                                    Discounted Price: {product.discountedPrice}
                                </Typography>
                            )}
                            </Link>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    );
}

export default Index;