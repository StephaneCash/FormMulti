import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField, Card, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
import $ from "jquery";
import { Visibility, VisibilityOff } from '@mui/icons-material';

function Form4() {

    const { setCurrentStep, userData, setUserData, } = useContext(multiStepContext);

    const [confirmPass, setConfirmPass] = useState("");
    const [etatSelect, setEtatSelect] = useState(false);
    const [click, setClick] = useState(false);
    const [isvalidPwd, setIsValidPwd] = useState(false);

    const [etatPwd, setEtatPwd] = useState(false);

    function handleTypeCompte(e) {
        if (e.target.value === "--Type de compte--") {
            setEtatSelect(false);
        } else {
            setEtatSelect(true);
        };;
    }

    function handlePwd(e) {
        setEtatPwd(true);
        if (e.target.value === "") {
            setIsValidPwd(false);
        } else {
            setIsValidPwd(true);
        };
    };

    let num = 0;

    const handleShowPass = () => {
        num++;
        if (num === 1)
            setEtatPwd(false);
        else
            setEtatPwd(true);
    };

    console.log(
        num
    )

    function submitData() {
        setClick(true);

        if (etatSelect === false || isvalidPwd === false) {
            return false;
        } else {
            console.log("Data submitted successfully");
        }
    }
    useEffect(() => {
        if (userData.typeCompte) {
            setEtatSelect(true);
        }
        if (userData.password) {
            setIsValidPwd(true);
        }
    }, []);
    console.log("Data user : ", userData);

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
                                id="outlined-adornment-password"
                                type={etatPwd ? 'password' : 'text'}
                                value={userData['password']}
                                style={{ width: '100%' }}
                                onChange={(e) => (setUserData({ ...userData, 'password': e.target.value }), handlePwd(e))}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            edge="end"
                                        >
                                            {etatPwd ? <VisibilityOff onClick={handleShowPass} /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                            <br /><br />

                            <label style={{ marginBottom: '10px' }}>Répéter le mot de passe:</label> <br />
                            <TextField
                                type="text"
                                label="Ecrire à nouveau le mot de passe"
                                variant="outlined"
                                style={{ width: '100%' }}
                                value={confirmPass}
                                onChange={(e) => setConfirmPass(e.target.value)}
                            />
                            <br /> <br />
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