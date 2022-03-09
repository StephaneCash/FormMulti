<Container className={classes.container}>

<div className={classes.item}>
    <Typography className={classes.text}>
        <h2 style={{ marginLeft: "5px", color: "white", marginBottom: "20px" }}>AZUR Bank</h2>
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