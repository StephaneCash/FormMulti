import { Container, makeStyles, Typography } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import React, { useContext } from 'react';
import $ from "jquery";
import "../css/LeftBar.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Check } from "@mui/icons-material";


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(8),
        backgroundColor: "#222",
        height: "100vh",
        color: '#555',
        border: "1px solid silver",
        position: "fixed",
        width: "18%",
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(4),
        [theme.breakpoints.up("sm")]: {
            marginBottom: theme.spacing(1.5),
            fontSize: "18px",
            cursor: 'pointer',
        },
    },
    check: {
        color: "#fff",
        zIndex: "1000000000"
    }
}));

const LeftBar = () => {

    const classes = useStyles();

    const { currentStep } = useContext(multiStepContext);

    return (
        <>
            <Container className={classes.container}>

                <div className={classes.item}>
                    <Typography className={classes.text}>
                        <h2 style={{marginLeft:"5px", color: "white", marginBottom:"20px"}}>AZUR Bank</h2>
                    </Typography>
                </div>

                <div className={classes.item}>
                    <Typography className={classes.text}>
                        {currentStep === 1 ? <div className={classes.check}>
                            <ArrowRightAltIcon /> Informations personnelles </div>
                            :
                            <><ArrowRightAltIcon /> Informations personnelles </>
                        }
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        {currentStep === 2 ? <div className={classes.check}>
                            <ArrowRightAltIcon />Adresses légales</div> :
                            <><ArrowRightAltIcon />Adresses légales</>
                        }
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        {currentStep === 3 ? <div className={classes.check}>
                            <ArrowRightAltIcon />Informations justificatives</div> :
                            <><ArrowRightAltIcon />Informations justificatives</>
                        }
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        {currentStep === 4 ? <div className={classes.check}>
                            <ArrowRightAltIcon /> Signature du contrat
                        </div> :
                            <> <ArrowRightAltIcon /> Signature du contrat</>
                        }
                    </Typography>
                </div>

                <div className={classes.item}>
                    <Typography className={classes.text}>
                        {currentStep === 5 ? <div className={classes.check}>
                            <Check /> Inscription terminée
                        </div> :
                            <> <ArrowRightAltIcon /> Inscription terminée</>
                        }
                    </Typography>
                </div>
            </Container>
        </>
    );
}

export default LeftBar;