import React from 'react';
import {MenuItem, Select} from "@mui/material";
import {FormikProps} from "formik";
import {capitalizeFirstLetter} from "../../util";

type SelectFieldProps = {
    formik: FormikProps<any>
    fields: any[]
    name: string
}
function SelectField({formik, fields, name}: SelectFieldProps) {
    return (
        <div>
            <Select
                fullWidth
                id={name}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                error={formik.touched[name] && Boolean(formik.errors[name])}
                displayEmpty
                sx={{ textAlign: "left" }}
            >
                <MenuItem value="" disabled>
                    Select {capitalizeFirstLetter(name)}
                </MenuItem>
                {fields.map((field) => (
                    <MenuItem key={field.id} value={field.id}>
                        {field.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
}

export default SelectField;
