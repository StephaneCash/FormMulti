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