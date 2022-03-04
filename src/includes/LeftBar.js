import { Container, makeStyles, Typography } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import React, { useContext } from 'react';
import $ from "jquery";
import "../css/LeftBar.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const useStyles = makeStyles((theme) => ({
    container: {
        paddingTop: theme.spacing(10),
        backgroundColor: "#555",
        height: "100vh",
        color: '#fff',
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
    icon: {
        marginRight: theme.spacing(1),
        [theme.breakpoints.up("sm")]: {
            fontSize: "18px"
        }
    }
}));

const LeftBar = () => {

    const classes = useStyles();

    const { currentStep } = useContext(multiStepContext);

    let i = $('#link');
    if (currentStep === null) {
        $('#link').addClass('active');
    };

    return (
        <>
            <Container className={classes.container}>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        <ArrowRightAltIcon /> Informations personnelles
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        <ArrowRightAltIcon /> Adresses légales
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        <ArrowRightAltIcon />Informations justificatives
                    </Typography>
                </div>
                <div className={classes.item}>
                    <Typography className={classes.text}>
                        <ArrowRightAltIcon />Signature du contrat
                    </Typography>
                </div>
            </Container>
        </>
    );
}

export default LeftBar;