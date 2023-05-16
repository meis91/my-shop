import React from 'react';
import {TextField} from "@mui/material";

function TextInputField({name, handleInput}:{
    name:string, handleInput:Function
}) {
    return (
        <>
            <TextField
                name={name}
                margin="normal"
                onChange={handleInput}
                label={capitalizeFirstLetter(name)}
                id="outlined-start"
                placeholder={capitalizeFirstLetter(name)}
                sx={{ width:'100%' }}
            />
        </>
    );
}

export default TextInputField;

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}