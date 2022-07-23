import { ExpandMore } from "@mui/icons-material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Avatar,
    Button,
    Card,
    CardContent,
    CardHeader,
    Collapse,
    Grid,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddTutionFeeModal from "../components/Modal/AddTutionFeeModal";
import { colors } from "../Theme/colors";

const AddTutionFee = () => {
    const [expanded, setExpanded] = useState(false);
    const [approveExp, setapproveExp] = useState(false);
    const [addExp, setaddExp] = useState(false);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const approveExpandClick = () => {
        setapproveExp(!approveExp);
    };
    const addExpandClick = () => {
        setaddExp(!addExp);
    };
    return (
        <React.Fragment>
            <AddTutionFeeModal handleClose={handleClose} open={open} />

            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 col-md-12">
                        <Button
                            onClick={handleOpen}
                            variant="outlined"
                            style={{
                                backgroundColor: colors.purple,
                                color: colors.white,
                            }}
                        >
                            Add Tuition Fee
                        </Button>
                    </div>
                </div>
                <div className="row mt-3 mx-auto">
                    <div className="col-sm-12 col-md-4 col-xxl-4 ">
                        <Grid container>
                            <Grid item xs={12} style={{ textAlign: "center" }}>
                                <Card
                                    className="card"
                                    sx={{ maxWidth: 350, maxHeight: 850 }}
                                    style={{
                                        backgroundColor: colors.fullwhite,
                                        borderRadius: "13px",
                                    }}
                                >
                                    <CardHeader
                                        style={{ color: colors.purple }}
                                        title="Faculty of BBA"
                                        subheader="Department of Business Administration"
                                        degree="MBA"
                                        season="Fall-2022"
                                    />
                                    <CardContent style={{ marginTop: "-25px" }}>
                                        <Typography
                                            style={{
                                                fontWeight: 600,
                                                color: colors.dark,
                                            }}
                                            variant="body"
                                        >
                                            BBA in Business Administration
                                        </Typography>
                                        <Typography
                                            style={{ textAlign: "center" }}
                                        >
                                            <span
                                                style={{ color: colors.purple }}
                                            >
                                                Name
                                            </span>
                                            :
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                Tarekur Rahmen
                                            </span>
                                        </Typography>
                                        <Typography
                                            style={{
                                                textAlign: "center",
                                                marginRight: "63px",
                                            }}
                                        >
                                            <span
                                                style={{ color: colors.purple }}
                                            >
                                                ID
                                            </span>
                                            :
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                1812200000
                                            </span>
                                        </Typography>
                                        <Typography
                                            style={{
                                                textAlign: "center",
                                                marginRight: "53px",
                                            }}
                                        >
                                            <span
                                                style={{ color: colors.purple }}
                                            >
                                                Tuition Fee
                                            </span>
                                            :
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                5000
                                            </span>
                                        </Typography>
                                        <Typography
                                            style={{
                                                textAlign: "center",
                                                marginRight: "30px",
                                            }}
                                        >
                                            <span
                                                style={{
                                                    color: colors.purple,
                                                }}
                                            >
                                                Semester Fee
                                            </span>
                                            :
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                4000
                                            </span>
                                        </Typography>
                                        <Typography
                                            style={{
                                                textAlign: "center",
                                                marginRight: "78px",
                                            }}
                                        >
                                            <span
                                                style={{ color: colors.purple }}
                                            >
                                                Lab Fee
                                            </span>
                                            :
                                            <span
                                                style={{ fontWeight: "bold" }}
                                            >
                                                400
                                            </span>
                                        </Typography>

                                        <div className="row mt-2">
                                            <div className="col-sm-6">
                                                <Button
                                                    variant="outlined"
                                                    style={{
                                                        backgroundColor:
                                                            colors.purple,
                                                        color: colors.white,
                                                        margin: "5px 0px",
                                                    }}
                                                >
                                                    Approve
                                                </Button>
                                            </div>
                                            <div className="col-sm-6">
                                                <Button
                                                    variant="outlined"
                                                    style={{
                                                        backgroundColor: "red",
                                                        color: colors.white,
                                                        margin: "5px 0px",
                                                    }}
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </div>
                                        {/* Approved card  */}

                                        <ExpandMore
                                            style={{
                                                color: colors.purple,
                                                cursor: "pointer",
                                            }}
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                        {expanded ? (
                                            <>
                                                <Card
                                                    sx={{
                                                        maxWidth: 350,
                                                        maxHeight: 550,
                                                    }}
                                                    style={{
                                                        backgroundColor:
                                                            colors.fullwhite,
                                                        borderRadius: "13px",
                                                        marginTop: "10px",
                                                    }}
                                                >
                                                    <Typography
                                                        style={{
                                                            color: colors.purple,
                                                        }}
                                                    >
                                                        Approved By
                                                    </Typography>
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar>R</Avatar>
                                                        }
                                                        title="Mr.X"
                                                        subheader="Assistant Professor"
                                                    />
                                                    <ExpandMore
                                                        style={{
                                                            color: colors.purple,
                                                            cursor: "pointer",
                                                        }}
                                                        expand={approveExp}
                                                        onClick={
                                                            approveExpandClick
                                                        }
                                                        aria-expanded={
                                                            approveExp
                                                        }
                                                        aria-label="show more"
                                                    >
                                                        <ExpandMoreIcon />
                                                    </ExpandMore>
                                                    <Collapse
                                                        in={approveExp}
                                                        timeout="auto"
                                                        unmountOnExit
                                                    >
                                                        <CardContent>
                                                            <Typography>
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Email
                                                                </span>
                                                                :abc@outlook.com
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginRight:
                                                                        "118px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    ID
                                                                </span>
                                                                :2500
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginRight:
                                                                        "10px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Office Name
                                                                </span>
                                                                : Jhon Doe
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginLeft:
                                                                        "5px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Section Name
                                                                </span>
                                                                : Jhon Doe
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginRight:
                                                                        "40px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Mobile
                                                                </span>
                                                                :123123123
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                                <Card
                                                    sx={{
                                                        maxWidth: 350,
                                                        maxHeight: 550,
                                                    }}
                                                    style={{
                                                        backgroundColor:
                                                            colors.fullwhite,
                                                        borderRadius: "13px",
                                                        marginTop: "10px",
                                                    }}
                                                >
                                                    <Typography
                                                        style={{
                                                            color: colors.purple,
                                                        }}
                                                    >
                                                        Added By
                                                    </Typography>
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar>R</Avatar>
                                                        }
                                                        title="Mr.X"
                                                        subheader="Assistant Professor"
                                                    />
                                                    <ExpandMore
                                                        style={{
                                                            color: colors.purple,
                                                            cursor: "pointer",
                                                        }}
                                                        expand={addExp}
                                                        onClick={addExpandClick}
                                                        aria-expanded={addExp}
                                                        aria-label="show more"
                                                    >
                                                        <ExpandMoreIcon />
                                                    </ExpandMore>
                                                    <Collapse
                                                        in={addExp}
                                                        timeout="auto"
                                                        unmountOnExit
                                                    >
                                                        <CardContent>
                                                            <Typography>
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Email
                                                                </span>
                                                                :abc@outlook.com
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginRight:
                                                                        "118px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    ID
                                                                </span>
                                                                :2500
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginRight:
                                                                        "10px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Office Name
                                                                </span>
                                                                : Jhon Doe
                                                            </Typography>
                                                            <Typography>
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Section Name
                                                                </span>
                                                                : Jhon Doe
                                                            </Typography>
                                                            <Typography
                                                                style={{
                                                                    marginRight:
                                                                        "40px",
                                                                }}
                                                            >
                                                                <span
                                                                    style={{
                                                                        color: colors.purple,
                                                                    }}
                                                                >
                                                                    Mobile
                                                                </span>
                                                                :123123123
                                                            </Typography>
                                                        </CardContent>
                                                    </Collapse>
                                                </Card>
                                            </>
                                        ) : null}
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default AddTutionFee;
