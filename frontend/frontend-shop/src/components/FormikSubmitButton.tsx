import React from 'react';
import {Button} from "@mui/material";
type FormikSubmitButtonProps = {
   isSubmitting: Boolean
}
function FormikSubmitButton({isSubmitting}: FormikSubmitButtonProps) {
    return (
        <div>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt:3, mb: 2, width: "100%" }}
            >
                {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
        </div>
    );
}

export default FormikSubmitButton;