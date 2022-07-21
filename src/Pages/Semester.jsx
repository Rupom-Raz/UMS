import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    styled,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { colors } from "../Theme/colors";

import { Cancel, LockOpen, LockOutlined } from "@mui/icons-material";
import ButtonComp from "../components/Button/ButtonComp";
import MenuComp from "../components/Menu/MenuComp";
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Semester = () => {
    const [off, setOff] = useState(false);
    const [on, setOn] = useState(false);
    const onclick = () => {
        setOff(true);
    };

    return (
        <>
            <div className="App" style={{ backgroundColor: `${colors.white}` }}>
                <Grid container justifyContent="center">
                    <Grid item>
                        <Box
                            className="admissonMsgBox"
                            style={{
                                backgroundColor: `${colors.fullwhite}`,
                                padding: "10px 30px",
                                borderRadius: "15px",
                            }}
                        >
                            <Typography
                                variant="h4"
                                style={{
                                    color: colors.gray,
                                }}
                            >
                                Addmisson Will Be Open on January 25, 2022
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} margin={3}>
                        <ButtonComp
                            onclick={onclick}
                            icon={<LockOutlined />}
                            text="Turn off Admisson"
                        />
                    </Grid>

                    <Grid container>
                        {/* Semester card start here */}
                        <Grid item>
                            <Grid
                                className="cardContainer"
                                container
                                justifyContent="center"
                            >
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    <Card
                                        sx={{ maxWidth: 350, maxHeight: 350 }}
                                        style={{
                                            backgroundColor: colors.fullwhite,
                                            borderRadius: "13px",
                                        }}
                                    >
                                        <CardHeader
                                            action={
                                                off ? (
                                                    <IconButton aria-label="settings">
                                                        <Cancel
                                                            style={{
                                                                color: `${colors.purple}`,
                                                            }}
                                                        />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton>
                                                        <MenuComp />
                                                    </IconButton>
                                                )
                                            }
                                            style={{ color: colors.purple }}
                                            title="Faculty of CSE"
                                            subheader="Department of Business Administration"
                                            degree="MBA"
                                            season="Fall-2022"
                                            admissonMessage="Admisson is Going On"
                                        />
                                        <CardContent>
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
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    <Card
                                        sx={{ maxWidth: 350, maxHeight: 350 }}
                                        style={{
                                            backgroundColor: colors.fullwhite,
                                            borderRadius: "13px",
                                        }}
                                    >
                                        <CardHeader
                                            action={
                                                off ? (
                                                    <IconButton aria-label="settings">
                                                        <Cancel
                                                            style={{
                                                                color: `${colors.purple}`,
                                                            }}
                                                        />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton>
                                                        <MenuComp />
                                                    </IconButton>
                                                )
                                            }
                                            style={{ color: colors.purple }}
                                            title="Faculty of CSE"
                                            subheader="Department of Business Administration"
                                            degree="MBA"
                                            season="Fall-2022"
                                            admissonMessage="Admisson is Going On"
                                        />
                                        <CardContent>
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
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    <Card
                                        sx={{ maxWidth: 350, maxHeight: 350 }}
                                        style={{
                                            backgroundColor: colors.fullwhite,
                                            borderRadius: "13px",
                                        }}
                                    >
                                        <CardHeader
                                            action={
                                                off ? (
                                                    <IconButton aria-label="settings">
                                                        <Cancel
                                                            style={{
                                                                color: `${colors.purple}`,
                                                            }}
                                                        />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton>
                                                        <MenuComp />
                                                    </IconButton>
                                                )
                                            }
                                            style={{ color: colors.purple }}
                                            title="Faculty of CSE"
                                            subheader="Department of Business Administration"
                                            degree="MBA"
                                            season="Fall-2022"
                                            admissonMessage="Admisson is Going On"
                                        />
                                        <CardContent>
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
                    </Grid>
                    <hr />

                    {/* close admisson section */}

                    <Grid item xs={12} margin={3}>
                        <ButtonComp
                            icon={<LockOpen />}
                            text="Turn on Admisson"
                        />
                    </Grid>

                    <Grid container>
                        <Grid item>
                            <Grid
                                className="cardContainer"
                                container
                                justifyContent="center"
                            >
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    <Card
                                        sx={{ maxWidth: 350, maxHeight: 350 }}
                                        style={{
                                            backgroundColor: colors.fullwhite,
                                            borderRadius: "13px",
                                        }}
                                    >
                                        <CardHeader
                                            action={
                                                off ? (
                                                    <IconButton aria-label="settings">
                                                        <Cancel
                                                            style={{
                                                                color: `${colors.purple}`,
                                                            }}
                                                        />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton>
                                                        <MenuComp />
                                                    </IconButton>
                                                )
                                            }
                                            style={{ color: colors.purple }}
                                            title="Faculty of CSE"
                                            subheader="Department of Business Administration"
                                            degree="MBA"
                                            season="Fall-2022"
                                            admissonMessage="Admisson is Going On"
                                        />
                                        <CardContent>
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
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    <Card
                                        sx={{ maxWidth: 350, maxHeight: 350 }}
                                        style={{
                                            backgroundColor: colors.fullwhite,
                                            borderRadius: "13px",
                                        }}
                                    >
                                        <CardHeader
                                            action={
                                                off ? (
                                                    <IconButton aria-label="settings">
                                                        <Cancel
                                                            style={{
                                                                color: `${colors.purple}`,
                                                            }}
                                                        />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton>
                                                        <MenuComp />
                                                    </IconButton>
                                                )
                                            }
                                            style={{ color: colors.purple }}
                                            title="Faculty of CSE"
                                            subheader="Department of Business Administration"
                                            degree="MBA"
                                            season="Fall-2022"
                                            admissonMessage="Admisson is Going On"
                                        />
                                        <CardContent>
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
                                <Grid
                                    item
                                    xs={12}
                                    style={{ textAlign: "center" }}
                                >
                                    <Card
                                        sx={{ maxWidth: 350, maxHeight: 350 }}
                                        style={{
                                            backgroundColor: colors.fullwhite,
                                            borderRadius: "13px",
                                        }}
                                    >
                                        <CardHeader
                                            action={
                                                off ? (
                                                    <IconButton aria-label="settings">
                                                        <Cancel
                                                            style={{
                                                                color: `${colors.purple}`,
                                                            }}
                                                        />
                                                    </IconButton>
                                                ) : (
                                                    <IconButton>
                                                        <MenuComp />
                                                    </IconButton>
                                                )
                                            }
                                            style={{ color: colors.purple }}
                                            title="Faculty of CSE"
                                            subheader="Department of Business Administration"
                                            degree="MBA"
                                            season="Fall-2022"
                                            admissonMessage="Admisson is Going On"
                                        />
                                        <CardContent>
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
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default Semester;
