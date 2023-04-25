import React, { useState} from 'react';
import { Typography} from "@mui/material";
import { useFormik} from "formik";
import TextInputField from "../components/TextInputField";


function CreateProduct() {
    const [newCategory, setNewCategory] = useState(false);
    const newProductForm = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: 0.0,
            productCategory: 0,
            quantity:0,
        },

        onSubmit: values => {

        },
    });


    return (
        <>
          <Typography component="h2" variant="h5">
              Create a new Product
          </Typography>
            <form>
                <TextInputField
                    name={newProductForm.initialValues.name}
                    label={"Name"}
                    placeholder={"Product Name"}
                    handleInput={newProductForm.handleChange}
                />
            </form>
        </>
    );
}

export default CreateProduct;