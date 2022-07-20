import { Cancel } from "@mui/icons-material";
import { Grid, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
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

export default function DeadlineModal({
    startDate,
    onStartDate,
    endDate,
    onEndDate,
}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button variant onClick={handleOpen}>
                Set the Admisson Deadline
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
                        <Grid item>
                            <Typography>Start Date</Typography>
                            <TextField
                                onChange={onStartDate}
                                type="date"
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <Typography>End Date</Typography>
                            <TextField
                                onChange={onEndDate}
                                type="date"
                                id="outlined-basic"
                                label=""
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="outlined"
                                style={{
                                    marginTop: "44px",
                                    marginLeft: "38px",
                                    backgroundColor: colors.purple,
                                    color: colors.white,
                                }}
                            >
                                Set Date
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}
