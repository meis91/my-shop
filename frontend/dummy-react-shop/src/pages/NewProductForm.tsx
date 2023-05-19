import React, {useEffect, useState} from 'react';
/*import {Category} from "../App";*/
import {useFindAllProductCategoriesQuery} from "../__generated__/graphql";
import {Box, Button, Container, FormControl, Grid, MenuItem, Select, TextField, Typography} from "@mui/material";
import TextInputField from "../components/TextInputField";
import SelectProductCategory from "./SelectProductCategory";
import {Route, Routes} from "react-router-dom";
import CreateProduct from "./CreateProduct";
import {Category} from "../types";

function NewProductForm() {
    const { data, loading, error } = useFindAllProductCategoriesQuery()
    const [isNewCategory, setIsNewCategory] = useState(false);
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryId, setCategoryId] = useState("");

    function handleNewCategory(){
        setIsNewCategory(!isNewCategory)
    }

    function handleCategoryId(newId: string){
        setCategoryId(newId);
    }


    useEffect(() => {
        console.log(data)
        if (data) {
           let allCategories: Category[] = [];
            data.findAllProductCategories?.map(category => {
                let productCategory: Category = {id: category?.id!, name: category?.name!};
                allCategories.push(productCategory)
            })
            console.log(allCategories);
            setCategories(allCategories);
            console.log(categories);
        }
    }, [data]);
    return (
        <>
                <Container
                    component="main"
                    maxWidth="md"
                    className="mui-container-fluid"
                    sx={{ minWidth: 600, maxWidth: 600 }}
                >
                    <Box
                        sx={{
                            boxShadow: 3,
                            borderRadius: 2,
                            px: 4,
                            py: 6,
                            marginTop: 8,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Routes>
                            <Route path="/category" element={<SelectProductCategory categories={categories} handleNewCategoryId={handleCategoryId} handleNewCategory={handleNewCategory} isNewCategory={isNewCategory}/> }/>
                            <Route path="/product" element={<CreateProduct categoryId={categoryId}/>}/>
                        </Routes>
                    </Box>

                </Container>
        </>
    );
}

export default NewProductForm;