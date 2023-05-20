import './App.css'
import CreateProduct from "./pages/CreateProduct";
import React, { useEffect, useState} from "react";
import {useFindAllProductCategoriesQuery, useFindAllProductsQuery} from "./__generated__/graphql";
import NewProductForm from "./pages/NewProductForm";
import {Link, Route, Routes, Switch} from "react-router-dom";
import SelectProductCategory from "./pages/SelectProductCategory";
import Discounts from './pages/Discounts';
import Index from "./pages/Index";
import {Box, Container} from "@mui/material";
import Categories from "./pages/Categories";
import Products from "./pages/Products";




function App() {
    const { data, loading, error } = useFindAllProductsQuery();

    useEffect(() => {
        console.log(data)

    }, [data]);
    // @ts-ignore
    // @ts-ignore
    return (
    <div className="App">
      <h1>Admin Shop</h1>
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
                    <Route path="/" element={<Index/>}/>
                    <Route path="/product/*" element={<Products/>}/>
                    <Route path="/category" element={<Categories/>}/>
                    <Route path="/discount" element={<Discounts/>}/>
                    <Route path="/brands/*" element={<NewProductForm/>}/>
                </Routes>
            </Box>
        </Container>

    </div>
  )
}

export default App
