import {
    Box,
    Button,
    InputLabel,
    MenuItem,
    Modal,
    Select,
    Typography,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as React from "react";
import * as Yup from "yup";
import { colors } from "../../Theme/colors";
import TextInput from "../TextInput";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};
const validationSchema = Yup.object().shape({
    courseTitle: Yup.string().required("Course title is required"),
    courseCode: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Course code is required"),
    courseHours: Yup.number()
        .max(5, "No longer than 5 hours")
        .min(2, "Must be longer than 2 hours")
        .required("Course hours is required"),
    credit: Yup.number()
        .max(3, "No longer than 3 credits")
        .min(1, "Must be longer than 1 credit")
        .required("Course credit is required"),
    program: Yup.string().required("Program is required").nullable(),
});

const initialValues = {
    courseTitle: "",
    courseCode: "",
    courseHours: "",
    credit: "",
    program: "",
};

const onSubmit = (values, submitProps) => {
    console.log("Form Data", values);
    console.log("Submit props", submitProps);
    submitProps.setSubmitting(false);
    submitProps.resetForm();
};

const AddCourseModal = ({ handleClose, open }) => {
    const [formValues, setFormValues] = React.useState(null);

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
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} component="form">
                                <Typography
                                    id="modal-modal-title"
                                    variant="h6"
                                    component="h2"
                                >
                                    Add Courses
                                </Typography>
                                <TextInput
                                    value={formik.values.courseTitle}
                                    onChange={formik.handleChange}
                                    name="courseTitle"
                                    label="Course Title"
                                    type="text"
                                />
                                <TextInput
                                    value={formik.values.courseCode}
                                    onChange={formik.handleChange}
                                    name="courseCode"
                                    label="Course Code"
                                    type="text"
                                />
                                <TextInput
                                    value={formik.values.credit}
                                    onChange={formik.handleChange}
                                    name="credit"
                                    label="Course Credit"
                                    type="number"
                                />
                                <TextInput
                                    value={formik.values.courseHours}
                                    onChange={formik.handleChange}
                                    name="courseHours"
                                    label="Course Hours"
                                    type="number"
                                />

                                <InputLabel id="demo-simple-select-label">
                                    Select Programs
                                </InputLabel>
                                <Select
                                    name="program"
                                    fullWidth
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={formik.values.program}
                                    label="Select Programs"
                                    onChange={formik.handleChange}
                                >
                                    <MenuItem value="B.Sc">B.Sc</MenuItem>
                                    <MenuItem value="M.Sc">M.Sc</MenuItem>
                                </Select>
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

export default AddCourseModal;
