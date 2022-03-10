import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField, Card } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";


function Form1() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);
    const [isValidNom, setIsValidNom] = useState(false);
    const [isValidPostnom, setIsValidPostnom] = useState(false);
    const [isValidLieuDeNaissance, setIsValidLieuDeNaissance] = useState(false);
    const [isValidSexe, setIsValidSexe] = useState(false);
    const [isValidDateNaissance, setIsValidDateNaissance] = useState(false);
    const [click, setClick] = useState(false);


    const handleNom = (e) => {
        if (e.target.value === "") {
            setIsValidNom(false);
        } else {
            setIsValidNom(true);
        };
    };

    const handlePostnom = (e) => {
        if (e.target.value === "") {
            setIsValidPostnom(false);
        } else {
            setIsValidPostnom(true);
        };
    };

    const handleSexe = (e) => {
        console.log(e.target.value)
        if (e.target.value === "--Sexe--") {
            setIsValidSexe(false);
        } else {
            setIsValidSexe(true);
        }
    };

    function handleLieuDeNaissance(e) {
        if (e.target.value === "") {
            setIsValidLieuDeNaissance(false);
        } else {
            setIsValidLieuDeNaissance(true);
        };
    };

    const handleDateDeNaissance = (e) => {
        if (e.target.value === "jj/mm/aaaa") {
            setIsValidDateNaissance(false);
        } else {
            setIsValidDateNaissance(true);
        }
    };

    const stepNext = () => {
        setClick(true);
        if (isValidNom === false || isValidPostnom === false || isValidLieuDeNaissance === false ||
            isValidSexe === false || isValidDateNaissance === false
        ) {
            return false;
        } else {
            setCurrentStep(2)
        }
    };

    useEffect(() => {
        if (userData.nom) {
            setIsValidNom(true);
        };
        if (userData.postnom) {
            setIsValidPostnom(true);
        };
        if (userData.lieuDeNaissance) {
            setIsValidLieuDeNaissance(true);
        };
        if (userData.sexe) {
            setIsValidSexe(true);
        }
        if (userData.dateDeNaissance) {
            setIsValidDateNaissance(true);
        }
    }, [isValidNom, isValidPostnom, isValidLieuDeNaissance, isValidSexe, isValidDateNaissance]);

    return (
        <>
            <Card>
                <div className="col-10 container mt-2 form1">
                    <div className="row form1dFlex">
                        <div className="col-6 colonne6">
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
                                className="form1input"
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
                                onChange={(e) => (setUserData({ ...userData, 'sexe': e.target.value }), handleSexe(e))}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                {userData.sexe ?
                                    <>
                                        <option>M</option>
                                        <option>F</option>
                                    </> :
                                    <>
                                        <option>--Sexe--</option>
                                        <option>M</option>
                                        <option>F</option>
                                    </>
                                }
                            </select>
                            <br />
                            {
                                click === true && (
                                    <>
                                        {isValidSexe === false ? <div className="sexeObligatoire">Veuillez choisir un sexe svp !</div> : ""}
                                    </>
                                )
                            }
                        </div>

                        <div className="col-6">
                            <label style={{ marginBottom: '10px' }}>Lieu de naissance:</label> <br />
                            <TextField
                                helperText={
                                    click === true && (
                                        <>
                                            {isValidLieuDeNaissance === false ? "Veuillez renseigner un lieu de naissance svp !" : ""}
                                        </>
                                    )
                                }
                                label="Lieu de naissance"
                                variant="outlined"
                                value={userData['lieuDeNaissance']}
                                onChange={(e) => (setUserData({ ...userData, "lieuDeNaissance": e.target.value }), handleLieuDeNaissance(e))}
                                style={{ width: '100%' }}
                            /> <br /><br />

                            <label style={{ marginBottom: '10px' }}>Date de naissance:</label> <br />
                            <TextField
                                helperText={
                                    click === true && (
                                        <>
                                            {isValidDateNaissance === false ? "Veuillez renseigner une date de naissance svp !" : ""}
                                        </>
                                    )
                                }
                                type="date"
                                variant="outlined"
                                value={userData['dateDeNaissance']}
                                onChange={(e) => (setUserData({ ...userData, "dateDeNaissance": e.target.value }), handleDateDeNaissance(e))}
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