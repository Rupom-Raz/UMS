import { MenuItem, Select } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import React from "react";

const YearSelectField = ({
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
                        name="selectYear"
                        fullWidth
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Year">Select Year</MenuItem>
                        <MenuItem value="2021">2021</MenuItem>
                        <MenuItem value="2022">2022</MenuItem>
                    </Select>
                ) : (
                    <Select
                        {...field}
                        {...props}
                        name="selectYear"
                        fullWidth
                        variant="outlined"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Year">Select Year</MenuItem>
                        <MenuItem value="2021">2021</MenuItem>
                        <MenuItem value="2022">2022</MenuItem>
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

export default YearSelectField;
