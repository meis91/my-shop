import React from 'react';
import {InputAdornment, TextField} from "@mui/material";

function PriceInputField({name, value, label, placeholder, handleInput, currencySymbol}:{
    name: string, value: string, label: string, placeholder:string, handleInput: Function, currencySymbol: string
}) {
    return (
        <>
            <TextField
                margin="normal"
                type="number"
                name={name}
                value={value}
                onChange={event => handleInput(event)}
                label={label}
                id="outlined-start"
                placeholder={placeholder}
                sx={{ m: 1, width: '300px',  minWidth:"300px" }}
                InputProps={{
                    startAdornment:(
                        <InputAdornment position="start">
                            {currencySymbol}
                        </InputAdornment>
                    )
                }}
            />
        </>
    );
}

export default PriceInputField;