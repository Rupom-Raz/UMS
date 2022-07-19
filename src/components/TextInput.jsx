import { TextField } from "@mui/material";
import { ErrorMessage, useField } from "formik";

const TextInput = ({ label, type, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div className="mb-2">
                {meta.error ? (
                    <TextField
                        {...field}
                        {...props}
                        error
                        id="outlined-error"
                        label={label}
                        autoComplete="off"
                        type={type}
                        style={{
                            marginBottom: "5px",
                        }}
                        fullWidth
                        variant="outlined"
                    />
                ) : (
                    <TextField
                        {...field}
                        {...props}
                        autoComplete="off"
                        type={type}
                        style={{
                            marginBottom: "5px",
                        }}
                        fullWidth
                        id="standard-basic"
                        label={label}
                        variant="outlined"
                    />
                )}

                <ErrorMessage
                    component="div"
                    name={field.name}
                    className="error"
                />
            </div>
        </>
    );
};

export default TextInput;
