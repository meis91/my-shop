import React from "react";
import { CircularProgress, Backdrop } from "@mui/material";

const LoadingComponent = () => {
    return (
        <Backdrop open={true}>
            <CircularProgress color="primary"/>
        </Backdrop>
    );
};

export default LoadingComponent;