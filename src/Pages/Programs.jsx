import {
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    Typography,
} from "@mui/material";
import React from "react";
import Card from "react-bootstrap/Card";
import ProgramsMenuComp from "../components/Menu/ProgramsMenuComp";
import { colors } from "../Theme/colors";

const Programs = () => {
    return (
        <React.Fragment>
            <Grid container mt={3}>
                <Grid item>
                    <Grid
                        className="cardContainer"
                        container
                        justifyContent="center"
                    >
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <Card
                                style={{
                                    width: 350,
                                    height: 200,
                                    backgroundColor: colors.fullwhite,
                                    borderRadius: "13px",
                                }}
                            >
                                <CardHeader
                                    action={
                                        <IconButton>
                                            <ProgramsMenuComp />
                                        </IconButton>
                                    }
                                    style={{ color: colors.purple }}
                                    title="Faculty of CSE"
                                    subheader="Department of Computer Science and Enginnering"
                                />
                                <CardContent style={{ marginTop: "-30px" }}>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            color: colors.dark,
                                        }}
                                        variant="body2"
                                    >
                                        M.Sc
                                    </Typography>
                                    <Typography
                                        style={{ color: colors.purple }}
                                    >
                                        Admisson is Going On
                                    </Typography>
                                    <Typography variant="body2">
                                        Fall-2022
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid
                        className="cardContainer"
                        container
                        justifyContent="center"
                    >
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <Card
                                style={{
                                    width: 350,
                                    height: 200,
                                    backgroundColor: colors.fullwhite,
                                    borderRadius: "13px",
                                }}
                            >
                                <CardHeader
                                    action={
                                        <IconButton>
                                            <ProgramsMenuComp />
                                        </IconButton>
                                    }
                                    style={{ color: colors.purple }}
                                    title="Faculty of BBA"
                                    subheader="Department of Business Administration"
                                />
                                <CardContent style={{ marginTop: "-30px" }}>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            color: colors.dark,
                                        }}
                                        variant="body2"
                                    >
                                        MBA
                                    </Typography>
                                    <Typography
                                        style={{ color: colors.purple }}
                                    >
                                        Admisson is Going On
                                    </Typography>
                                    <Typography variant="body2">
                                        Fall-2022
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item>
                    <Grid
                        className="cardContainer"
                        container
                        justifyContent="center"
                    >
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <Card
                                style={{
                                    width: 350,
                                    height: 200,
                                    backgroundColor: colors.fullwhite,
                                    borderRadius: "13px",
                                }}
                            >
                                <CardHeader
                                    action={
                                        <IconButton>
                                            <ProgramsMenuComp />
                                        </IconButton>
                                    }
                                    style={{ color: colors.purple }}
                                    title="Faculty of CE"
                                    subheader="Department of Civil Enginnering"
                                />
                                <CardContent style={{ marginTop: "-30px" }}>
                                    <Typography
                                        style={{
                                            fontWeight: 600,
                                            color: colors.dark,
                                        }}
                                        variant="body2"
                                    >
                                        B.Sc
                                    </Typography>
                                    <Typography
                                        style={{ color: colors.purple }}
                                    >
                                        Admisson is Going On
                                    </Typography>
                                    <Typography variant="body2">
                                        Fall-2022
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default Programs;
