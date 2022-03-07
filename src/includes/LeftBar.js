import { Container, makeStyles, Typography } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import React, { useContext } from 'react';
import $ from "jquery";
import "../css/LeftBar.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
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
    text: {
        fontWeight: 500,
        [theme.breakpoints.down("sm")]: {
            display: "none"
        },
    },
    check:{
        color: "#fff",
        zIndex:"1000000000"
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
            </Container>
        </>
    );
}

export default LeftBar;