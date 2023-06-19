import React, {useEffect, useState} from 'react';
import {Box, Button, Container, Grid, Typography} from "@mui/material";
import {Link, Route, Routes} from "react-router-dom";
import {Product, useFindAllProductsPagedQuery, useFindAllProductsQuery} from "../__generated__/graphql";
import Loading from "../components/Loading";
import {styles} from "../styles/styles";

function Index() {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(12);
    /*const { data, loading, error, refetch } = useFindAllProductsQuery();*/
    const [products, setProducts] = useState<Product[]>([]);
    const {data, loading, error, refetch: refetchProducts, fetchMore }= useFindAllProductsPagedQuery({
        variables: {
            page: page, // Set the desired page number
            size: size, // Set the desired page size
        },
    });

    useEffect(() => {
        if (data) {
            console.log(data)
            // @ts-ignore
            setProducts(data.findAllProductsPaged);
        }
    }, [data]);

    useEffect(() => {
        // @ts-ignore
        refetchProducts();
    }, [refetchProducts]);

    if (loading) {
        return <Loading />;
    }

    if (error) {
        return <p>Error retrieving products</p>; // Handle the error case appropriately
    }

    if (products.length === 0) {
        return <p>No products found.</p>;
    }
    if(data?.findAllProductsPaged){

    }
    return (
        <>
            {loading && <Loading/>}
            <Grid container spacing={2}>
                {data?.findAllProductsPaged ? products.map((product: Product) => (
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
                                    Brand: {product.brand.name}
                                </Typography>
                            <Typography variant="body2" style={styles.productCategory}>
                                Category: {product.category.name}
                            </Typography>
                            {product.discountedPrice ?
                                <div>
                                    <Typography variant="body2" style={styles.productPriceLineThrough}>
                                        Price: {product.price}€
                                    </Typography>
                                    <Typography variant="body2" style={styles.productDiscount}>
                                        - {product.discount?.percentage}% OFF
                                    </Typography>
                                    <Typography variant="body1" style={styles.productDiscount}>
                                       New Price : {product.discountedPrice}€
                                    </Typography>
                                    <Typography variant="body2">
                                        {product.discount?.name}
                                    </Typography>
                                </div> :
                                <Typography variant="body2" style={styles.productPrice}>
                                    Price: {product.price}€
                                </Typography>
                            }
                            </Link>
                        </div>
                    </Grid>
                    )): null}
                <Grid item xs={3} columnSpacing={8}>
                </Grid>
                <Grid item xs={2} columnSpacing={8}>
                    <Button variant="outlined">Back</Button>
                </Grid>
                <Grid item xs={2} columnSpacing={8}>
                    <Typography>{page}</Typography>
                </Grid>
                <Grid item xs={2} columnSpacing={8}>
                    <Button variant="outlined">Forward</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default Index;