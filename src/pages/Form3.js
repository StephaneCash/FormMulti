import React, { useContext, useState, useEffect } from 'react'
import { Button, TextField, Card } from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
import '../css/Form.css';
import { CameraAlt, Check } from '@mui/icons-material';
import Webcam from "react-webcam";

const videoConstraints = {
    facingMode: "user"
};

function Form3() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    const [image, setImage] = useState('');
    const webcamRef = React.useRef(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const [verifImage, setVerifImage] = useState(false);

    const [isValidTypeDocument, setIsValidTypeDocument] = useState(false);
    const [isValidPhoto, setIsValidPhoto] = useState(false);
    const [isValidPhotoCapturee, setIsValidPhotoCapturee] = useState(false);
    const [click, setClick] = useState(false);

    const handleTypeDocument = (e) => {
        if (e.target.value === "--Type de document--") {
            setIsValidTypeDocument(false);
        } else {
            setIsValidTypeDocument(true);
        }
    };

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setImage(imageSrc);
            setIsValidPhoto(true);
            setVerifImage(true);
        });

    const validerImage = () => {
        let photoPrise = image;
        setUserData({ ...userData, 'imageCapture': photoPrise });
        console.log(userData);
        setVerifImage(true);
    };

    const [photoImage, setPhotoImage] = useState(false);

    function handleChange(e) {
        if (e.target.value === "") {
            setIsValidPhoto(false);
        } else {
            setIsValidPhoto(true);

            if (e.target.files[0]) {
                let photo = e.target.files[0];
                setUserData({ ...userData, "imgDoc": photo });
                setPhotoImage(true);
            }
        };
    };

    const handleCamera = () => {
        setHasPhoto(true);
    };

    const stepSuivant = () => {
        setClick(true);
        if (isValidTypeDocument === false || isValidPhoto === false) {
            return false;
        } else {
            setCurrentStep(4);
        };
    };

    useEffect(() => {
        if (userData.typeDocument) {
            setIsValidTypeDocument(true);
        }
        if (userData.imgDoc) {
            setIsValidPhoto(true);
        }
        if(image){
            setIsValidPhoto(true);
        }
        if(userData.imageCapture){
            setIsValidPhoto(true);
            setVerifImage(true);
        }
    }, [isValidTypeDocument, isValidPhoto,]);

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
                                value={userData['typeDocument']}
                                onChange={(e) => (setUserData({ ...userData, "typeDocument": e.target.value }), handleTypeDocument(e))}
                                style={{ width: "100%", marginRight: "10px", height: "61px", marginTop: '-5px', boxShadow: "none", border: "1px solid silver" }}
                            >
                                {userData.typeDocument ?
                                    <>
                                        <option>Carte d'électeur</option>
                                        <option>Passeport</option>
                                        <option>Permis de conduire</option>
                                    </> :
                                    <>
                                        <option>--Type de document--</option>
                                        <option>Carte d'électeur</option>
                                        <option>Passeport</option>
                                        <option>Permis de conduire</option>
                                    </>}
                            </select>
                            <br />
                            {
                                click === true && (
                                    <>
                                        {isValidTypeDocument === false ? <div className="sexeObligatoire">Veuillez choisir un type de document svp !</div> : ""}
                                    </>
                                )
                            }
                        </div>

                        <div style={{ marginRight: '10px' }}>
                            <label style={{ marginBottom: '10px' }}>Télécharger un fichier:</label> <br />
                            <TextField
                                disabled={verifImage ? "disabled" : ""}
                                type="file"
                                variant="outlined"
                                style={{ width: '100%', marginRight: "10px" }}
                                onChange={handleChange}
                            />

                            <br />
                            {
                                click === true && (
                                    <>
                                        {isValidPhoto === false ? <div className="sexeObligatoireImage">Veuillez téléchager un document svp !</div> : ""}
                                    </>
                                )
                            }
                            {
                                userData.imgDoc ? <span style={{ color: "green" }}><Check /></span> : ""
                            }
                        </div>

                        <div>
                            <label style={{ marginBottom: '10px' }}>Capturer udddne photo:</label> <br />
                            {photoImage ?
                                <Button
                                    disabled
                                    className="btnCamera"
                                    variant="contained"
                                    style={{ marginTop: "-5px", }}
                                    onClick={handleCamera}
                                >
                                    <CameraAlt />
                                </Button> :

                                <Button
                                    className="btnCamera"
                                    variant="contained"
                                    style={{ marginTop: "-5px", }}
                                    onClick={handleCamera}
                                >
                                    <CameraAlt />
                                </Button>}

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
                            <>
                                <Button
                                    className="btn-confirm"
                                    style={{ float: "right", marginLeft: "10px" }}
                                    onClick={validerImage}
                                >
                                    Valider
                                </Button>
                                <Button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setImage('')
                                    }}
                                    style={{ float: "right" }}
                                    className="btn-back ">
                                    Supprimer
                                </Button>
                            </> :
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