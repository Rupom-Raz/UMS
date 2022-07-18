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

const AddCourseModal = ({ handleClose, open }) => {
    const validate = Yup.object({
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
        program: Yup.string().required("Program is required"),
    });

    const [program, setProgram] = React.useState("");

    const handleChange = (event) => {
        setProgram(event.target.value);
    };
    return (
        <>
            <Formik
                validationSchema={validate}
                initialValues={{
                    courseTitle: "",
                    courseCode: "",
                    courseHours: "",
                    credit: "",
                    program: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
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
                                    name="courseTitle"
                                    label="Course Title"
                                    type="text"
                                />
                                <TextInput
                                    name="courseCode"
                                    label="Course Code"
                                    type="text"
                                />
                                <TextInput
                                    name="credit"
                                    label="Course Credit"
                                    type="number"
                                />
                                <TextInput
                                    name="courseHours"
                                    label="Course Hours"
                                    type="number"
                                />

                                <InputLabel id="demo-simple-select-label">
                                    Select Programs
                                </InputLabel>
                                <Select
                                    fullWidth
                                    variant="standard"
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={program}
                                    label="Select Programs"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="B.Sc">B.Sc</MenuItem>
                                    <MenuItem value="M.Sc">M.Sc</MenuItem>
                                </Select>
                                <Button
                                    type="submit"
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
