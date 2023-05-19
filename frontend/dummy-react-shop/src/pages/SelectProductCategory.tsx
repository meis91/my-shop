import React, {useState} from 'react';
import {Button, FormControl, Grid, MenuItem, TextField, Typography} from "@mui/material";
import {useFormik} from "formik";
import {useCreateProductCategoryMutation} from "../__generated__/graphql";
import {useNavigate} from "react-router-dom";
import {Category} from "../types";

type SelectNewCategoryProps = {
    categories: Category[],
    isNewCategory: boolean,
    handleNewCategory(): void
    handleCategoryId(id: string): void
}
function SelectProductCategory({categories, isNewCategory, handleNewCategory, handleCategoryId}: SelectNewCategoryProps) {
    const [createProductCategory, { loading, error, data}] = useCreateProductCategoryMutation()
    const [newCategory, setNewCategory] = useState(false);
    const navigate = useNavigate();
    function handleChangeNewCategory(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        let chosenCategory: string = event.target.value
        console.log(chosenCategory)
        if(chosenCategory === "new"){
            setNewCategory(true);
        } else {
            setNewCategory(false);
            handleCategoryId(chosenCategory);
        }
    }




    const newCategoryForm = useFormik({
        initialValues: {
            name: "",
                    },
        onSubmit: values => {
            console.log(values);
            if(newCategory){
                createProductCategory({
                    variables: {
                        name: values.name,
                    },
                })
                    .then((response) => {
                        console.log(response.data?.createProductCategory);
                        if(data?.createProductCategory?.id){
                            handleCategoryId(data?.createProductCategory?.id);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            } else {

            }
            navigate("/create-new-product/product");
        },
    });

    return (
        <form onSubmit={newCategoryForm.handleSubmit}>
            <Grid container spacing={2} rowSpacing={2} >
                <Grid item xs={12}>
                    <Typography component="h2" variant="h5">
                        Select a Category
                    </Typography>
                </Grid>

                <Grid item xs={12} minWidth="400">
                    <FormControl sx={{width: "100%", minWidth:600}} >
                        <TextField
                            sx={{width: "100%"}}
                            id="outlined-select"
                            name="productCategory"
                            select
                            align="left"
                            margin="normal"
                            label="Product Category"
                            onChange={event => handleChangeNewCategory(event)}
                        >
                                <MenuItem value={"new"} sx={{width: "100%"}}>
                                    Create New Category
                                </MenuItem>
                            {categories.map((productCategory: { id: string, name: string }) => (
                                <MenuItem sx={{width: "100%"}} key={productCategory.id} value={productCategory.id}>
                                    {productCategory.name}
                                </MenuItem>
                            ))}
                        </TextField>
                    </FormControl>
                </Grid>
                { newCategory ? <Grid item xs={12}>
                    <TextField
                        sx={{width: "100%"}}
                        name="name"
                        margin="normal"
                        onChange={newCategoryForm.handleChange}
                        label="Name"
                        id="outlined-start"
                        placeholder= "New Category Name"
                    />
                </Grid> : null}
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }} >
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, width: "50%"}}
                    >
                        Next
                    </Button>
                </Grid>
            </Grid>
            <div>{JSON.stringify(newCategoryForm.values)}</div>
        </form>
    );
}

export default SelectProductCategory;