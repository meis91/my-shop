import './App.css'
import React from "react";
import { Route, Routes} from "react-router-dom";
import Discounts from './pages/Discounts';
import Index from "./pages/Index";
import {Box, Container} from "@mui/material";
import Categories from "./pages/Categories";
import Products from "./pages/Products";
import Brands from "./pages/Brands";
import ProductDetails from "./pages/ProductDetails";
import ProductEdit from "./pages/ProductEdit";




function App() {
    return (
    <div className="App">
      <h1>Admin Shop</h1>
        <Container
            component="main"
            maxWidth="md"
            className="mui-container-fluid"
            sx={{ minWidth: 600, }}
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
                    <Route path="/product-details/:productId" element={<ProductDetails/>}/>
                    <Route path="/product-details/edit/:productId" element={<ProductEdit/>}/>
                    <Route path="/category" element={<Categories/>}/>
                    <Route path="/discount" element={<Discounts/>}/>
                    <Route path="/brands/*" element={<Brands/>}/>
                </Routes>
            </Box>
        </Container>

    </div>
  )
}

export default App
