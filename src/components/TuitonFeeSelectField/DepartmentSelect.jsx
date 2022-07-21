import { MenuItem, Select } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import React from "react";
const DepartmentSelect = ({
    value,
    onChange,
    label,
    heading,
    inputValue,
    ...props
}) => {
    const [field, meta] = useField(props);
    return (
        <React.Fragment>
            <div className="mb-1">
                {meta.error && meta.touched ? (
                    <Select
                        {...field}
                        {...props}
                        error
                        name="selectDepartment"
                        fullWidth
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Department">
                            Select Department
                        </MenuItem>
                        <MenuItem value="CSE">CSE</MenuItem>
                        <MenuItem value="EEE">EEE</MenuItem>
                    </Select>
                ) : (
                    <Select
                        {...field}
                        {...props}
                        name="selectDepartment"
                        fullWidth
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Department">
                            Select Department
                        </MenuItem>
                        <MenuItem value="CSE">CSE</MenuItem>
                        <MenuItem value="EEE">EEE</MenuItem>
                    </Select>
                )}
                <ErrorMessage
                    component="div"
                    name={field.name}
                    className="error"
                />
            </div>
        </React.Fragment>
    );
};

export default DepartmentSelect;
