import React, { useContext, useState, useRef, useEffect } from 'react'
import { Button, TextField, Card } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
import '../css/Form.css';
import { CameraAlt } from '@mui/icons-material';
import Webcam from "react-webcam";

const videoConstraints = {
    facingMode: "user"
};

function Form3() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc)
            setUserData({...userData, 'imageCapture': imageSrc})
        });

    const [hasPhoto, setHasPhoto] = useState(false);

    function handleChange(e) {
        if (e.target.files[0]) {
            let photo = e.target.files[0];
            setUserData({ ...userData, "imgDoc": photo });
        }
    };

    const handleCamera = () => {
        setHasPhoto(true);
    };

    const stepSuivant = () => {
        setCurrentStep(4);
    };

    console.log("DATA Collections ::: ", userData);

    return (
        <>
            <Card>
                <div className="col-10 container mt-2 form4">
                    <div className="d-flex">
                        <div style={{ marginRight: '10px' }}>
                            <label style={{ marginBottom: '10px' }}>Choisir le type de document:</label> <br />
                            <select
                                className="form-control"
                                id="typedoc"
                                onChange={(e) => setUserData({ ...userData, "typeDocument": e.target.value })}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                <option>--Type de document--</option>
                                <option>Carte d'électeur</option>
                                <option>Passeport</option>
                                <option>Permis de conduire</option>
                            </select>
                        </div>

                        <div style={{ marginRight: '10px' }}>
                            <label style={{ marginBottom: '10px' }}>Télécharger un fichier:</label> <br />
                            <TextField
                                type="file"
                                variant="outlined"
                                style={{ width: '100%', marginRight: "10px" }}
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label style={{ marginBottom: '10px' }}>Capturer une photo:</label> <br />
                            <Button
                                variant="contained"
                                style={{ marginTop: "-5px" }}
                                onClick={handleCamera}
                            >
                                <CameraAlt />
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="col-12 container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <Button
                                className='mb-3 btn-confirm'
                                style={{ marginLeft: "10px", float: "right" }}
                                onClick={stepSuivant}
                            >
                                Suivant
                            </Button>
                            <Button
                                className='mb-3 btn-back'
                                onClick={() => setCurrentStep(2)}
                                style={{ marginLeft: "10px", float: "right" }}
                            >
                                Retour
                            </Button>
                        </div>
                    </div>
                </div>
            </Card>

            {hasPhoto ? (
                <div className="webcam-container">
                    {image == '' ? <Webcam
                        audio={false}
                        ref={webcamRef}
                        screenshotFormat="image/jpeg"
                        className="imgCapturee"
                        videoConstraints={videoConstraints}
                    /> : <img className="imgCapturee" src={image} />}
                    <div>
                        {image != '' ?
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setImage('')
                                }}
                                style={{ float: "right" }}
                                className="btn-back ">
                                Supprimer
                            </Button> :
                            <Button
                                style={{ float: "right" }}
                                onClick={(e) => {
                                    e.preventDefault();
                                    capture();
                                }}
                                className="btn-confirm">Capture</Button>
                        }
                    </div>
                </div>
            ) : ''}
        </>
    )
}

export default Form3