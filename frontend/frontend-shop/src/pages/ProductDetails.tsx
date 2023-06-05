import React, {useEffect} from 'react';
import {
    useDeleteProductMutation,
    useFindProductQuery
} from "../__generated__/graphql";
import {styles} from "../styles/styles";
import {Button, Grid, Typography} from "@mui/material";
import {Link, useNavigate, useParams} from "react-router-dom";
import Loading from "../components/Loading";
import {ProductId} from "../types";



function ProductDetails() {
    const { productId } = useParams<ProductId>();
    if (productId === undefined) {
        return <p>Error No Product Id</p>; // Handle the error case appropriately
    }
    /*const [product, setProduct] = useState<Product | undefined>();*/
    const {loading, error, data: product } = useFindProductQuery({
        variables: { id: productId,},
    });
    const navigate = useNavigate();
    const [deleteProduct] = useDeleteProductMutation();
    const handleDelete = async () => {
        try {
            const { data } = await deleteProduct({
                variables: {
                    productId,
                },
            });
            console.log(data);
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (product?.findProduct) {
            console.log(product.findProduct);

        }
    }, [product]);
    console.log(productId);

    if (loading ) {
        return <Loading />;
    }

    if (error) {
        return <p>Error retrieving products</p>; // Handle the error case appropriately
    }
    if(product){
        return (
            <>
                    {loading && <Loading/>}
                    <Grid container spacing={2} >
                        <Grid item xs={12}>
                            <Typography variant="h6" style={styles.productName}>
                                {product?.findProduct?.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" style={styles.productDescription}>
                                {product?.findProduct?.description}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" style={styles.productCategory}>
                                Category: {product?.findProduct?.name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body2" style={styles.productPrice}>
                                Price: {product?.findProduct?.price}€
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            {product?.findProduct?.discountedPrice && (
                                <Typography variant="body2" style={styles.productDiscount}>
                                    Discounted Price: {product?.findProduct?.discountedPrice}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={12} columnSpacing={8}>
                            <Button onClick={handleDelete} variant="outlined" color="error">Delete</Button>
                            <Link to={`/edit-product/${productId}`}  state={product}>
                                <Button variant="outlined">Edit</Button>
                            </Link>
                            <Link to="..">
                                <Button variant="outlined" color="secondary">Back</Button>
                            </Link>
                        </Grid>
                    </Grid>
            </>
        );
    }
}

export default ProductDetails;