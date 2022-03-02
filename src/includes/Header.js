import { AppBar, Badge, makeStyles, Toolbar, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    tooBar: {
        display: "flex",
        justifyContent: 'space-between',
        backgroundColor: '#efefef'
    },
    logoLg: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    logoSm: {
        display: "block",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    },
    icons: {
        display: "flex",
        alignItems: "center"
    },
    badge: {
        marginRight: theme.spacing(2),
    },
    logout: {
        marginLeft: theme.spacing(1),
        cursor: "pointer"
    }
}));

const Header = () => {

    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar className={classes.tooBar}>
                    <Typography variant="h6" component="h2" className={classes.logoLg}>
                        <span style={{color:"#222"}}>Inscription</span>
                    </Typography>
                    <Typography variant="h6" component="h2" className={classes.logoSm}>
                        Inscription
                    </Typography>
                    <div className={classes.icons}>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Header;