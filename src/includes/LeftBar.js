import { makeStyles } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import React, { useContext } from 'react';
import "../css/LeftBar.css";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Check, AccountCircle, LocationOn, Accessibility, PersonOutline } from "@mui/icons-material";
import { motion } from "framer-motion";
import PermDeviceInformationIcon from '@mui/icons-material/PermDeviceInformation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandshakeAngle } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles((theme) => ({
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

    return (
        <>
            <div className='sidebar' style={{ width: '248px' }}>
                <div className="sidebar-menu">
                    <ul>

                        <div className="main-container">
                            <motion.div animate={{ width: "248px" }} className="sidebar" id="sidebar">

                                <div className="mt-4 mb-5">
                                    <h1 className="logo"></h1>

                                    <div className="bars">
                                        <span style={{ cursor: "pointer", color: "#fff" }}></span>
                                    </div>
                                </div>

                                <section className="routes" style={{ marginTop: "10px" }}>
                                    <div className="link">
                                        <div className="icons"> {currentStep === 1 ? <Accessibility className={classes.check} /> : <Accessibility />} </div>
                                        <div className="text-item">
                                            {currentStep === 1 ? <div className={classes.check} id="name">Choix de l'expérience </div>
                                                : <span className="name">Choix de l'expérience  </span>
                                            }
                                        </div>
                                    </div>
                                    
                                    <div className="link">
                                        <div className="icons"> {currentStep === 2 ? <PersonOutline className={classes.check} /> : <PersonOutline />} </div>
                                        <div className="text-item">
                                            {currentStep === 2 ? <div className={classes.check} id="name">Informations personnelles </div>
                                                : <span className="name">formations personnelles </span>
                                            }
                                        </div>
                                    </div>
                                    <div className="link">
                                        <div className="icons"> {currentStep === 3 ? <LocationOn className={classes.check} /> : <LocationOn />} </div>
                                        <div className="text-item">
                                            {currentStep === 3 ? <div className={classes.check} id="name">Adresses légales </div>
                                                : <div className="name">Adresses légales</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="link">
                                        <div className="icons"> {currentStep === 4 ? <PermDeviceInformationIcon className={classes.check} /> : <PermDeviceInformationIcon />} </div>
                                        <div className="text-item">
                                            {currentStep === 4 ? <div className={classes.check} id="name">Informations justificatives </div>
                                                : <div className="name"> Information justificatives </div>
                                            }
                                        </div>
                                    </div>

                                    <div className="link">
                                        <div className="icons"> {currentStep === 5 ? <FontAwesomeIcon icon={faHandshakeAngle} className={classes.check} /> : <FontAwesomeIcon icon={faHandshakeAngle} />} </div>
                                        <div className="text-item">
                                            {currentStep === 5 ? <div className={classes.check} id="name">Signature du contrat </div>
                                                : <div className="name">Signature du contrat</div>
                                            }
                                        </div>
                                    </div>

                                    <div className="link">
                                        <div className="icons"> {currentStep === 6 ? <Check className={classes.check} /> : <Check />} </div>
                                        <div className="text-item">
                                            {currentStep === 6 ? <div className={classes.check} id="name">Inscription terminée </div>
                                                : <div className="name">Inscription terminée</div>
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