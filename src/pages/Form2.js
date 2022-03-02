import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField, Card } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
import { Country } from 'country-state-city';
import InputAdornment from '@mui/material/InputAdornment';


function Form2() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    const [pays, setPays] = useState([]);

    const getPays = () => {
        if (Country.getAllCountries()) {
            setPays(Country.getAllCountries());
        }
    }

    useEffect(() => {
        getPays();
    }, []);

    let paysRempli = "";
    let phoneCodePays = ""

    if (userData.pays) {
        paysRempli = userData.pays;
    };

    for (let i = 0; i < pays.length; i++) {
        if (pays[i].name === paysRempli) {
            phoneCodePays = pays[i].phonecode;
        };
    };

    return (
        <>
            <Card>
                <div className="col-10 container mt-2">
                    <div className="row">
                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Adresse email:</label> <br />
                            <TextField
                                type="email"
                                label="Adresse email"
                                variant="outlined"
                                style={{ width: '100%' }}
                                value={userData['email']}
                                onChange={(e) => setUserData({ ...userData, "email": e.target.value })}
                            /> <br /> <br />

                            <label style={{ marginBottom: '10px' }}>Numéro de téléphone:</label> <br />
                            <TextField
                                label="Numéro de téléphone"
                                id="outlined-start-adornment"
                                variant="outlined"
                                value={userData['numroPhone']}
                                style={{ width: '100%' }}
                                InputProps={{
                                    startAdornment: <InputAdornment position="start">
                                        {phoneCodePays ? "+" + phoneCodePays : 'CODE'}
                                    </InputAdornment>,
                                }}
                                onChange={(e) => setUserData({ ...userData, "numroPhone": e.target.value })}
                            />
                        </div>

                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Choisir votre pays:</label> <br />
                            <select
                                className="form-control"
                                onChange={(e) => setUserData({ ...userData, "pays": e.target.value })}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                <option>--Pays--</option>
                                {
                                    pays.map((val, index) => {
                                        return (
                                            <>
                                                <option key={index}>{val.name}</option>
                                            </>
                                        )
                                    })
                                }
                            </select>
                            <br />

                            <label style={{ marginBottom: '10px' }}>Votre nationalité:</label> <br />
                            <select
                                className="form-control"
                                onChange={(e) => setUserData({ ...userData, "nationalite": e.target.value })}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                <option>--Nationalité--</option>
                                {
                                    pays.map((val, index) => {
                                        return <option key={index}>{val.currency}</option>
                                    })
                                }
                            </select>
                            <br /><br />
                        </div>
                    </div>
                </div>
                <div className="col-12 container">
                    <div className="row">
                        <div className="col-12">

                            <Button
                                color="primary"
                                variant='contained'
                                className='mb-3'
                                style={{ marginLeft: "10px", float: "right" }}
                                onClick={() => setCurrentStep(3)}
                            >
                                Suivant
                            </Button>
                            <Button
                                color="secondary"
                                variant='contained'
                                className='mb-3'
                                onClick={() => setCurrentStep(1)}
                                style={{ float: "right" }}
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

export default Form2