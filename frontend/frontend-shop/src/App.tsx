
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
import SideMenu from "./components/sideMenu/SideMenu";

function App() {
    const [sideMenu, setSideMenu] = useState<boolean>(false);

    const toggleSideMenu = () => {setSideMenu(!sideMenu);}
    const closeSideMenu = () => {setSideMenu(false)}

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Grid container
                      spacing={2}
                      sx={{
                          bgcolor: '#f6f6f6',
                          paddingTop: '20px',  // Add top spacing
                          paddingBottom: '20px',
                          paddingLeft: "10px", // Add bottom spacing
                      }}>
                    <Grid item xs={12}>
                        <AdminMenu toggleDrawer={toggleSideMenu}/>
                    </Grid>
                    <Grid item xs={2}
                          sx={{paddingLeft: "10px"}}>
                        {sideMenu ? <SideMenu closeSideMenu={closeSideMenu}/> : null}
                    </Grid>
                    <Grid item
                          xs={8}
                          >
                        <Box
                            margin="40px"
                            display="flex"
                            justifyContent="center"
                            minHeight="100vh"
                        >
                            <Routes>
                                <Route path="/" element={<Index/>}/>
                                <Route path="/create-product" element={<CreateProduct/>}/>
                                <Route path="/create-category" element={<CreateCategory/>}/>
                                <Route path="/create-discount" element={<Discounts/>}/>
                                <Route path="/create-brand" element={<CreateBrand/>}/>
                            </Routes>
                        </Box>
                    </Grid>
                </Grid>

            </ThemeProvider>
        </div>
  )
}

export default App
