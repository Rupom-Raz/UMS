import { MenuItem, Select } from "@mui/material";
import { ErrorMessage, useField } from "formik";
import React from "react";

const SelectField = ({ value, onChange, label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <React.Fragment>
            <div className="mb2">
                {meta.error && meta.touched ? (
                    <Select
                        {...field}
                        {...props}
                        error
                        name="program"
                        fullWidth
                        variant="standard"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Program">
                            Select Program
                        </MenuItem>
                        <MenuItem value="B.Sc">B.Sc</MenuItem>
                        <MenuItem value="M.Sc">M.Sc</MenuItem>
                    </Select>
                ) : (
                    <Select
                        {...field}
                        {...props}
                        name="program"
                        fullWidth
                        variant="standard"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={value}
                        label={label}
                        onChange={onChange}
                    >
                        <MenuItem value="Select Program">
                            Select Program
                        </MenuItem>
                        <MenuItem value="B.Sc">B.Sc</MenuItem>
                        <MenuItem value="M.Sc">M.Sc</MenuItem>
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

export default SelectField;
