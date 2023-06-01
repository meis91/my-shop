
import React, {useState} from "react";
import { Route, Routes} from "react-router-dom";
import Discounts from './pages/Discounts';
import Index from "./pages/Index";
import {Box, Container, CssBaseline, Grid, ThemeProvider} from "@mui/material";
import CreateCategory from "./pages/CreateCategory";
import theme from "./context/theme/Theme"
import CreateBrand from "./pages/CreateBrand";

import CreateProduct from "./pages/CreateProduct";
import AdminMenu from "./components/AdminMenu";
import SideMenu from "./components/SideMenu";

function App() {
    const [drawer, setDrawer] = useState<boolean>(false);

    function toggleDrawer(){
        setDrawer(!drawer);
    }

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Grid container
                      spacing={3}
                      columnSpacing={2}
                      sx={{
                          bgcolor: '#f6f6f6',
                          paddingTop: '20px',  // Add top spacing
                          paddingBottom: '20px',
                          paddingLeft: "10px", // Add bottom spacing
                      }}>
                    <Grid xs={12}>
                        <AdminMenu toggleDrawer={toggleDrawer}/>
                    </Grid>
                    <Grid xs={2}
                          sx={{paddingLeft: "10px"}}>
                        {drawer ? <SideMenu toggleDrawer={toggleDrawer} drawer={drawer}/> : null}
                    </Grid>
                    <Grid xs={8}>
                        <Routes>
                            <Route path="/" element={<Index/>}/>
                            <Route path="/create-product" element={<CreateProduct/>}/>
                            <Route path="/create-category" element={<CreateCategory/>}/>
                            <Route path="/create-discount" element={<Discounts/>}/>
                            <Route path="/create-brand" element={<CreateBrand/>}/>
                        </Routes>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </div>
  )
}

export default App
