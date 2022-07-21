import { Cancel } from "@mui/icons-material";
import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import * as React from "react";
import { useAlert } from "react-alert";
import * as Yup from "yup";
import { colors } from "../../Theme/colors";
import SelectField from "../SelectField";
import TextInput from "../TextInput";
import DepartmentSelect from "../TuitonFeeSelectField/DepartmentSelect";
import YearSelectField from "../TuitonFeeSelectField/YearSelectField";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: 600,
    bgcolor: "background.paper",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
};

const validationSchema = Yup.object().shape({
    selectDepartment: Yup.string()
        .required("Select Department is Required")
        .oneOf(["CSE", "EEE"])
        .label("Selected Department"),
    program: Yup.string()
        .required("Select Program is Required")
        .oneOf(["B.Sc", "M.Sc"])
        .label("Selected Program"),
    selectYear: Yup.string()
        .required("Select Year is Required")
        .oneOf(["2021", "2022"])
        .label("Selected Year"),
    name: Yup.string().required("Name is Required"),
    id: Yup.number().required("ID is Required"),
    tuitionFee: Yup.number().required("Tuition Fee is Required"),
    semesterFee: Yup.number().required("Semester Fee is Required"),
    transportFee: Yup.number().required("Transport Fee is Required"),
    labFee: Yup.number().required("Lab Fee is Required"),
});

const initialValues = {
    selectDepartment: "Select Department",
    program: "Select Program",
    selectYear: "Select Year",
    name: "",
    id: "",
    tuitionFee: "",
    semesterFee: "",
    transportFee: "",
    labFee: "",
};

const AddTutionFeeModal = ({ handleClose, open }) => {
    const alert = useAlert();
    const [formValues, setFormValues] = React.useState(null);
    const onSubmit = (values, submitProps) => {
        if (!values) {
            alert.error("Please Add Tution Fee First");
        } else {
            alert.success("Tution Fee Added Successfully");
            handleClose();
        }
        console.log("Form Data", values);
        console.log("Submit props", submitProps);
        submitProps.setSubmitting(false);
        submitProps.resetForm();
    };
    return (
        <React.Fragment>
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
                                            Add Tution Fee
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

                                <DepartmentSelect
                                    name="selectDepartment"
                                    label="Select Department"
                                    value={formik.values.selectDepartment}
                                    onChange={formik.handleChange}
                                />
                                <SelectField
                                    name="program"
                                    label="Select Programs"
                                    value={formik.values.program}
                                    onChange={formik.handleChange}
                                />

                                <YearSelectField
                                    name="selectYear"
                                    label="Select Year"
                                    value={formik.values.selectYear}
                                    onChange={formik.handleChange}
                                />

                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <TextInput
                                            value={formik.values.name}
                                            onChange={formik.handleChange}
                                            name="name"
                                            label="Enter Name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <TextInput
                                            value={formik.values.id}
                                            onChange={formik.handleChange}
                                            name="id"
                                            label="Enter ID"
                                            type="number"
                                        />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12 col-md-6">
                                        <TextInput
                                            value={formik.values.tuitionFee}
                                            onChange={formik.handleChange}
                                            name="tuitionFee"
                                            label="Enter Tution Fee"
                                            type="number"
                                        />
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <TextInput
                                            value={formik.values.semesterFee}
                                            onChange={formik.handleChange}
                                            name="semesterFee"
                                            label="Enter Semester Fee"
                                            type="number"
                                        />
                                    </div>
                                </div>

                                <div className="row ">
                                    <div className="col-sm-12 col-md-6">
                                        <TextInput
                                            value={formik.values.transportFee}
                                            onChange={formik.handleChange}
                                            name="transportFee"
                                            label="Enter Transport Fee"
                                            type="number"
                                        />
                                    </div>
                                    <div className="col-sm-12 col-md-6">
                                        <TextInput
                                            value={formik.values.labFee}
                                            onChange={formik.handleChange}
                                            name="labFee"
                                            label="Enter Lab Fee"
                                            type="number"
                                        />
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={
                                        !formik.isValid || formik.isSubmitting
                                    }
                                    variant="outlined"
                                    style={{
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
        </React.Fragment>
    );
};

export default AddTutionFeeModal;
