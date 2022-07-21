import { Cancel } from "@mui/icons-material";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";

import { Form, Formik } from "formik";
import * as React from "react";
import { useAlert } from "react-alert";
import * as Yup from "yup";
import { colors } from "../../Theme/colors";
import SelectField from "../SelectField";
import TextInput from "../TextInput";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 500,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};
const validationSchema = Yup.object().shape({
    curriculamName: Yup.string().required("Curriculam Title is required"),
    curriculamID: Yup.number().required("Curriculam ID is required"),
    // program: Yup.string().required("Program is required"),

    program: Yup.string()
        .required("Program is required")
        .oneOf(["B.Sc", "M.Sc"])
        .label("Selected Program"),
});

const initialValues = {
    curriculamName: "",
    curriculamID: "",
    program: "Select Program",
};

const AddCurriculamModal = ({ handleClose, open }) => {
    const alert = useAlert();
    const [formValues, setFormValues] = React.useState(null);
    const onSubmit = (values, submitProps) => {
        if (!values) {
            alert.error("Please Add Curriculam First");
        } else {
            alert.success("Curriculam Added Successfully");
            handleClose();
        }
        console.log("Form Data", values);
        console.log("Submit props", submitProps);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };

    return (
        <>
            <Formik
                initialValues={formValues || initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
                enableReinitialize
            >
                {(formik) => (
                    <Form>
                        <Modal
                            open={open}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} component="form">
                                <Grid container justifyContent="space-between">
                                    <Grid item>
                                        <Typography
                                            id="modal-modal-title"
                                            variant="h6"
                                            component="h2"
                                        >
                                            Add Curriculam
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Cancel
                                            onClick={() => {
                                                handleClose();
                                                formik.resetForm();
                                            }}
                                            style={{
                                                color: colors.purple,
                                                cursor: "pointer",
                                                marginTop: "-50px",
                                                marginRight: "-20px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>
                                <TextInput
                                    value={formik.values.curriculamName}
                                    name="curriculamName"
                                    label="Enter Curriculam Title"
                                    type="text"
                                />
                                <TextInput
                                    value={formik.values.curriculamID}
                                    name="curriculamID"
                                    label="Enter ID"
                                    type="number"
                                />
                                <SelectField
                                    name="program"
                                    label="Select Programs"
                                    value={formik.values.program}
                                    onChange={formik.handleChange}
                                />
                                <Button
                                    type="submit"
                                    disabled={
                                        !formik.isValid || formik.isSubmitting
                                    }
                                    variant="outlined"
                                    style={{
                                        margin: "10px 0px",
                                        backgroundColor: colors.purple,
                                        color: colors.white,
                                    }}
                                >
                                    Save
                                </Button>
                            </Box>
                        </Modal>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default AddCurriculamModal;
