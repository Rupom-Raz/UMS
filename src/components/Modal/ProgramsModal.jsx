import { Cancel } from "@mui/icons-material";

import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import * as React from "react";
import { colors } from "../../Theme/colors";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: "10px",
    bgcolor: `${colors.white}`,
    boxShadow: 24,
    p: 4,
};

export default function ProgramsModal() {
    const [program, setProgram] = React.useState("");

    const handleChange = (event) => {
        setProgram(event.target.value);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setProgram("");
    };

    return (
        <div>
            <Button variant onClick={handleOpen}>
                Set the Programs
            </Button>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Cancel
                        onClick={handleClose}
                        style={{
                            position: "absolute",
                            top: "5px",
                            right: "10px",
                            color: colors.purple,
                            cursor: "pointer",
                        }}
                    />
                    <Grid container sm={12} spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">
                                    Select the Programs
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={program}
                                    label="Set Programs"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="Intoduction to Computer">
                                        Intoduction to Computer
                                    </MenuItem>
                                    <MenuItem value="Algorithm and Complexity">
                                        Algorithm and Complexity
                                    </MenuItem>
                                    <MenuItem value="Data Structure">
                                        Data Structure
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                variant="outlined"
                                style={{
                                    backgroundColor: colors.purple,
                                    color: colors.white,
                                }}
                            >
                                Set Programs
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
