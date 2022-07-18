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

const AddCurriculamModal = ({ handleClose, open }) => {
    const [program, setProgram] = React.useState("");

    const handleChange = (event) => {
        setProgram(event.target.value);
    };
    const validate = Yup.object({
        curriculamName: Yup.string().required("Curriculam Title is required"),
        curriculamID: Yup.number().required("Curriculam ID is required"),
        program: Yup.string().required("Program is required"),
    });
    return (
        <>
            <Formik
                validationSchema={validate}
                initialValues={{
                    curriculamName: "",
                    curriculamID: "",
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
                                    Add Curriculam
                                </Typography>
                                <TextInput
                                    name="curriculamName"
                                    label="Enter Curriculam Title"
                                    type="text"
                                />
                                <TextInput
                                    name="curriculamID"
                                    label="Enter ID"
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

export default AddCurriculamModal;
