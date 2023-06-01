import React from 'react';
import {TextField} from "@mui/material";
import {FormikProps} from "formik";
import {capitalizeFirstLetter} from "../../util";

type TextInputProps = {
    formik: FormikProps<any>
    name: string
}
function TextInputField({formik, name}: TextInputProps ){
    
    return (
        <>
            <TextField
                margin="normal"
                fullWidth
                id={name}
                label={capitalizeFirstLetter(name)}
                {...formik.getFieldProps(name)}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                // @ts-ignore
                helperText={formik.touched[name] && formik.errors[name]}
            />
        </>
    );
}

export default TextInputField;

