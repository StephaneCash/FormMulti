import React, { useContext } from 'react'
import { Button, TextField, Card } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";

function Form4() {

    const { setCurrentStep, userData, setUserData, submitData } = useContext(multiStepContext);

    return (
        <>
            <Card>
                <div className="col-10 container mt-2">
                    <div className="row">
                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Type de compte:</label> <br />
                            <select
                                className="form-control"
                                value={userData['sexe']}
                                onChange={(e) => setUserData({ ...userData, 'sexe': e.target.value })}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                <option>--Type de compte--</option>
                                <option>Personnel</option>
                                <option>Professionnel</option>
                            </select>
                        </div>

                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Créer un mot de passe:</label> <br />
                            <TextField
                                label="Créer un mot de passe"
                                variant="outlined"
                                style={{ width: '100%' }}
                            /> <br /><br />

                            <label style={{ marginBottom: '10px' }}>Répéter le mot de passe:</label> <br />
                            <TextField
                                type="text"
                                label="Ecrire à nouveau le mot de passe"
                                variant="outlined"
                                style={{ width: '100%' }}
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
                                style={{ marginLeft: "10px", float: "right"  }}
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