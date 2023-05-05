import React from 'react';
import {TextField} from "@mui/material";

function TextInputField({name, type, label, placeholder, handleInput}:{
    name: string, type: string, label: string, placeholder:string, handleInput: Function
}) {
    return (
        <>
            <TextField
                margin="normal"
                type={type}
                name={name}
                value={name}
                onChange={event => handleInput(event)}
                label={label}
                id="outlined-start"
                placeholder={placeholder}
                sx={{ m: 1, width: '300px',  minWidth:"300px" }}
            />
        </>
    );
}

export default TextInputField;