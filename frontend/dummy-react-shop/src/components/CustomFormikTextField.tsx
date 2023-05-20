import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import {useField} from "formik";

interface CustomInputFieldProps extends TextFieldProps {
    name: string;
}

const CustomTextField: React.FC<CustomInputFieldProps> = ({ name, ...rest }) => {
    const [field, meta] = useField(name);

    return (
        <TextField
            {...field}
            {...rest}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error ? meta.error : ""}
        />
    );
};

export default CustomTextField;