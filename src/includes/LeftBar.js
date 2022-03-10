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
        if (isOpen) {
            $(".col-2").addClass('show');
            $(".col-10").addClass('hide');
        }
        else {
            $(".col-2").removeClass('show');
            $(".col-10").removeClass('hide');
        }
    };

    return (
        <div className="main-container">
            <motion.div animate={{ width: isOpen ? "248px" : "50px" }} className="sidebar" id="sidebar">

                <div className="top-section">
                    {isOpen && <h1 className="logo">Azure Bank</h1>}

                    <div className="bars">
                        <Dehaze style={{ cursor: "pointer", color: "#fff" }} onClick={toggle} />
                    </div>
                </div>

                <section className="routes" style={{ marginTop: "10px" }}>
                    <div className="link">
                        <div className="icons"> {currentStep === 1 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                        <div className="text-item">
                            {currentStep === 1 ? <div className={classes.check}>Informations personnelles </div>
                                :
                                <>{isOpen ? <span className="name">formations personnelles </span> : "formations personnelles"}</>
                            }
                        </div>
                    </div>
                    <div className="link">
                        <div className="icons"> {currentStep === 2 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                        <div className="text-item">
                            {currentStep === 2 ? <div className={classes.check} id="name">Adresses légales </div>
                                :
                                <>{isOpen ? <div className="name">Adresses légales</div> : ""}</>
                            }
                        </div>
                    </div>

                    <div className="link">
                        <div className="icons"> {currentStep === 3 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                        <div className="text-item">
                            {currentStep === 3 ? <div className={classes.check}>Informations justificatives </div>
                                :
                                <>{isOpen ? <div className="name">Informations justificatives</div> : ""}</>
                            }
                        </div>
                    </div>

                    <div className="link">
                        <div className="icons"> {currentStep === 4 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                        <div className="text-item">
                            {currentStep === 4 ? <div className={classes.check}>Signature du contrat </div>
                                :
                                <>{isOpen ? <div className="name">Signature du contrat</div> : ""}</>
                            }
                        </div>
                    </div>

                    <div className="link">
                        <div className="icons"> {currentStep === 5 ? <ArrowRightAltIcon className={classes.check} /> : <ArrowRightAltIcon />} </div>
                        <div className="text-item">
                            {currentStep === 5 ? <div className={classes.check}>Inscription terminée </div>
                                :
                                <>{isOpen ? <div className="name">Inscription terminée</div> : ""}</>
                            }
                        </div>
                    </div>
                </section>
                <main>{children}</main>
            </motion.div>
        </div>
    );
}

export default LeftBar;