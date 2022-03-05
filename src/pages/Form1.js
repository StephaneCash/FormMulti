import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField, Card } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
function Form1() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);
    const [isValidNom, setIsValidNom] = useState(false);
    const [isValidPostnom, setIsValidPostnom] = useState(false);
    const [click, setClick] = useState(false);


    const handleNom = (e) => {
        if (e.target.value === "") {
            setIsValidNom(false)
        } else {
            setIsValidNom(true)
        }
    };

    console.log("Nom :: ", isValidNom);

    const handlePostnom = (e) => {
        if (e.target.value === "") {
            setIsValidPostnom(false);
        } else {
            setIsValidPostnom(true);
        }
    };

    let isValid = false;

    if (userData.nom) {
        isValid = true;
    };

    const stepNext = () => {
        setClick(true);
        if (isValidNom === false || isValidPostnom === false || isValid === false) {
            return false;
        } else if (isValid) {
            setCurrentStep(2)
        }
    };

    if (userData.nom) {
        console.log(userData.nom.length);
    }

    useEffect(() => {
        if (userData.nom) {
            setIsValidNom(true);
        }
        if (userData.postnom) {
            setIsValidPostnom(true);
        }
    }, [isValidNom, isValidPostnom])

    return (
        <>
            <Card>
                <div className="col-10 container mt-2">
                    <div className="row">
                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Nom:</label> <br />
                            <TextField
                                helperText={
                                    click === true && (
                                        <>
                                            {isValidNom === false ? "Veuillez renseigner un nom svp !" : ""}
                                        </>
                                    )
                                }
                                label="Nom"
                                variant="outlined"
                                style={{ width: '100%' }}
                                value={userData['nom']}
                                onChange={(e) => (setUserData({ ...userData, "nom": e.target.value }), handleNom(e))}
                            />
                            <br /><br />

                            <label style={{ marginBottom: '10px' }}>Postnom:</label> <br />
                            <TextField
                                helperText={
                                    click === true && (
                                        <>
                                            {isValidPostnom === false ? "Veuillez renseigner un postnom svp !" : ""}
                                        </>
                                    )
                                }
                                label="Postnom"
                                variant="outlined"
                                style={{ width: '100%' }}
                                value={userData['postnom']}
                                onChange={(e) => (setUserData({ ...userData, "postnom": e.target.value }), handlePostnom(e))}
                            />
                            <br /><br />

                            <label style={{ marginBottom: '10px' }}>Choisir votre sexe:</label> <br />
                            <select
                                className="form-control"
                                value={userData['sexe']}
                                onChange={(e) => setUserData({ ...userData, 'sexe': e.target.value })}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                <option>--Sexe--</option>
                                <option>M</option>
                                <option>F</option>
                            </select>
                            <br />
                        </div>

                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Lieu de naissance:</label> <br />
                            <TextField
                                label="Lieu de naissance"
                                variant="outlined"
                                value={userData['lieuDeNaissance']}
                                onChange={(e) => setUserData({ ...userData, "lieuDeNaissance": e.target.value })}
                                style={{ width: '100%' }}
                            /> <br /><br />

                            <label style={{ marginBottom: '10px' }}>Date de naissance:</label> <br />
                            <TextField
                                type="date"
                                variant="outlined"
                                value={userData['dateDeNaissance']}
                                onChange={(e) => setUserData({ ...userData, "dateDeNaissance": e.target.value })}
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                </div>
                <div className="col-12 container">
                    <div className="row">
                        <div className="col-12">
                            <Button
                                onClick={stepNext}
                                className='mb-3 btn-confirm'
                                style={{ float: "right" }}
                            >
                                Suivant
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>
        </>
    )
}

export default Form1