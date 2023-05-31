import * as yup from "yup";

export const productValidationSchema = yup.object({
    brand: yup
        .number()
        .required("Please select a Brand"),
    category: yup
        .number()
        .required("Please select a Category"),
    name: yup
        .string()
        .required("Please provide a Name"),
    description: yup
        .string()
        .required("Please provide a short Description"),
    price: yup
        .number()
        .typeError("Price must be a number")
        .required("Please provide a Price"),
    quantity: yup
        .number()
        .typeError("Quantity must be a number")
        .min(1, "Quantity must be at least 1")
        .required("Please provide a Amount"),
});