import React from 'react';
import {TextField} from "@mui/material";

function TextInputField({name, label, placeholder, handleInput}:{
    name: string, label: string, placeholder:string, handleInput: Function
}) {
    return (
        <>
            <TextField
                name={name}
                value={name}
                onChange={event => handleInput(event)}
                label={label}
                id="outlined-start"
                placeholder={placeholder}
                sx={{ m: 1, width: '1500ch',  minWidth:"730px" }}
            />
        </>
    );
}

export default TextInputField;