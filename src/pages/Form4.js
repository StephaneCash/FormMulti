import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField, Card, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Form4() {

    const { setCurrentStep, userData, setUserData, } = useContext(multiStepContext);

    const [confirmPass, setConfirmPass] = useState("");
    const [etatSelect, setEtatSelect] = useState(false);
    const [click, setClick] = useState(false);
    const [isvalidPwd, setIsValidPwd] = useState(false);

    const [etatBtnShowPass, setEtatBtnShowPass] = useState(false);

    const [msgPwdVald, setMsgPwdVald] = useState("Veuillez créer un mot de passe svp !");
    const [msgConfimPassword, setConfirmPassword] = useState("");

    // Vérification si un élément chosi ou pas, la valeur su type de compte
    function handleTypeCompte(e) {
        if (e.target.value === "--Type de compte--") {
            setEtatSelect(false);
        } else {
            setEtatSelect(true);
        };;
    }

    // Vérification de la force du moy de passe et voir si le input est vide ou pas
    function handlePwd(e) {
        if (e.target.value === "") {
            setIsValidPwd(false);
            setEtatBtnShowPass(true);
            setMsgPwdVald('Veuillez créer un mot de passe svp !');
        }
        else if (e.target.value.match(/[0-9]/) && e.target.value.match(/[A-Z]/) && e.target.value.match(/[a-z]/)
            && e.target.value.match(/[@,;:.*#/]/) && e.target.value.length > 8) {

            setMsgPwdVald('Mot de passe valide');
            setIsValidPwd(true);
        }
        else {
            setIsValidPwd(false);
            setEtatBtnShowPass(isvalidPwd);
            setMsgPwdVald("Votre mot de passe doit avoir au moins un chiffre, une lettre minuscule, une lettre majiscule, un caractère spécial et doit avoir la taille de plus ou égal à 8 caractères")
        };
    };

    // Fonction pour visualiser le mot de passe entré 
    const handleShowPass = () => {
        if (userData.password) {
            setEtatBtnShowPass(true);
        } else {
            setEtatBtnShowPass(false);
        }
    };

    function submitData() {
        setClick(true);

        if (etatSelect === false || isvalidPwd === false) {
            return false;
        } else {
            if (userData.password === confirmPass) {
                console.log("Data submitted successfully");
                setConfirmPassword("");
                setCurrentStep(5);
            } else {
                console.log('Erreur ', isvalidPwd)
                setConfirmPassword("Les deux mots de passe ne correspondent pas");
            }
        }
    }
    useEffect(() => {
        if (userData.typeCompte) {
            setEtatSelect(true);
        }
        if (userData.password) {
            if (userData.password.match(/[0-9]/) && userData.password.match(/[A-Z]/) && userData.password.match(/[a-z]/)
                && userData.password.match(/[@,;:.*#/]/) && userData.password.length > 8) {
                setIsValidPwd(true);
                setMsgPwdVald("");
            } else {
                setIsValidPwd(false);
            }
        }
    }, [isvalidPwd]);
    //console.log("Data user : ", userData);

    return (
        <>
            <Card>
                <div className="col-10 container mt-2">
                    <div className="row">
                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Type de compte:</label> <br />
                            <select
                                id="typeCompte"
                                className="form-control"
                                value={userData['typeCompte']}
                                onChange={(e) => (setUserData({ ...userData, 'typeCompte': e.target.value }), handleTypeCompte(e))}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                {userData.typeCompte ?
                                    <>
                                        <option>Personnel</option>
                                        <option>Professionnel</option>
                                    </> :
                                    <>
                                        <option>--Type de compte--</option>
                                        <option>Personnel</option>
                                        <option>Professionnel</option>
                                    </>
                                }

                            </select>
                            <br />
                            {
                                click === true && (
                                    <>
                                        {etatSelect === false ? <div className="sexeObligatoire">
                                            Veuillez choisir un type de compte svp !</div> : ""}
                                    </>
                                )
                            }

                        </div>

                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Créer un mot de passe:</label> <br />

                            <OutlinedInput
                                placeholder="Créer un mot de passe"
                                helperText={"Pass"}
                                id="outlined-adornment-password"
                                type={etatBtnShowPass === false ? 'password' : 'text'}
                                value={userData['password']}
                                style={{ width: '100%' }}
                                onChange={(e) => (setUserData({ ...userData, 'password': e.target.value }), handlePwd(e))}
                                inputProps={{
                                    'aria-label': 'weight',
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleShowPass}
                                            edge="end"
                                        >
                                            {etatBtnShowPass === false ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <br />
                            {
                                click === true ?
                                    <>
                                        {isvalidPwd === false ?
                                            <div className="sexeOdbligatoireJust">{msgPwdVald}<br /></div> :
                                            <span className="sexeOdbligatoire" style={{ color: "green" }}>
                                                {msgPwdVald} <br /></span>}
                                    </>
                                    : <>{userData.password && isvalidPwd && ""}</>
                            }
                            <br />

                            <label style={{ marginBottom: '10px' }}>Répéter le mot de passe:</label> <br />
                            <TextField
                                type="text"
                                label="Ecrire à nouveau le mot de passe"
                                variant="outlined"
                                style={{ width: '100%' }}
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                            <br />
                            {
                                click === true ?
                                    <>
                                        {
                                            isvalidPwd === true &&
                                            <>
                                                {
                                                    msgConfimPassword ?
                                                        <span className="sexeOdbligatoire">
                                                            {msgConfimPassword} <br /><br />
                                                        </span> : ""
                                                }
                                            </>
                                        }
                                    </> : <><br /><br /></>
                            }
                            <br />
                        </div>
                    </div>
                </div>
                <div className="col-12 container">
                    <div className="row">
                        <div className="col-12">
                            <Button
                                className='mb-3 btn-confirm'
                                style={{ marginLeft: "10px", float: "right" }}
                                onClick={submitData}
                            >
                                Soumettre
                            </Button>
                            <Button
                                className='mb-3 btn-back'
                                style={{ marginLeft: "10px", float: "right" }}
                                onClick={() => setCurrentStep(3)}
                            >
                                Retour
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Form4