import { Button } from "@mui/material";
import * as React from "react";
import CurriculamCard from "../components/CurriculamCard";
import AddCurriculamModal from "../components/Modal/AddCurriculamModal";
import { colors } from "../Theme/colors";

const AddCurriculam = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <AddCurriculamModal handleClose={handleClose} open={open} />
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
                            Add Curriculam
                        </Button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-sm-12 col-md-4 mb-2">
                        <CurriculamCard />
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <CurriculamCard />
                    </div>
                    <div className="col-sm-12 col-md-4 mb-2">
                        <CurriculamCard />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCurriculam;
