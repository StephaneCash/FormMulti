import { Container, makeStyles, Typography } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import React, { useContext, useState } from 'react';
import "../css/LeftBar.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Check, Dehaze } from "@mui/icons-material";
import { motion } from "framer-motion";
import $ from "jquery";


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
    },

}));


const LeftBar = ({ children }) => {

    const classes = useStyles();

    const { currentStep } = useContext(multiStepContext);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className='sidebar' style={{ width: '248px' }}>
                <div className="sidebar-menu">
                    <ul>

                        <div className="main-container">
                            <motion.div animate={{ width: "248px" }} className="sidebar" id="sidebar">

                                <div className="top-section">
                                    <h1 className="logo">Azure Bank</h1>

                                    <div className="bars">
                                        <span style={{ cursor: "pointer", color: "#fff" }}>Logo img</span>
                                    </div>
                                </div>

                                <section className="routes" style={{ marginTop: "10px" }}>
                                    <div className="link">
                                        <div className="icons"> {currentStep === 1 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                                        <div className="text-item">
                                            {currentStep === 1 ? <div className={classes.check} id="name">Informations personnelles </div>
                                                :<span className="name">formations personnelles </span>
                                            }
                                        </div>
                                    </div>
                                    <div className="link">
                                        <div className="icons"> {currentStep === 2 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                                        <div className="text-item">
                                            {currentStep === 2 ? <div className={classes.check} id="name">Adresses légales </div>
                                                :<div className="name">Adresses légales</div> 
                                            }
                                        </div>
                                    </div>

                                    <div className="link">
                                        <div className="icons"> {currentStep === 3 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                                        <div className="text-item">
                                            {currentStep === 3 ? <div className={classes.check} id="name">Informations justificatives </div>
                                                :<div className="name">Informations justificatives</div> 
                                            }
                                        </div>
                                    </div>

                                    <div className="link">
                                        <div className="icons"> {currentStep === 4 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                                        <div className="text-item">
                                            {currentStep === 4 ? <div className={classes.check} id="name">Signature du contrat </div>
                                                : <div className="name">Signature du contrat</div> 
                                            }
                                        </div>
                                    </div>

                                    <div className="link">
                                        <div className="icons"> {currentStep === 5 ? <Check className={classes.check} /> : <ArrowRightAltIcon />} </div>
                                        <div className="text-item">
                                            {currentStep === 5 ? <div className={classes.check} id="name">Inscription terminée </div>
                                                :<div className="name">Inscription terminée</div> 
                                            }
                                        </div>
                                    </div>
                                </section>
                            </motion.div>
                        </div>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default LeftBar;