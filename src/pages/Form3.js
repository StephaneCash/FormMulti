import React, { useContext, useState } from 'react'
import { Button, TextField, Card} from "@material-ui/core";
import "../css/Form.css";
import { multiStepContext } from "../StepContext";
import '../css/Form.css';
import { CameraAlt } from '@mui/icons-material';


function Form3() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

    const [img, setImg] = useState(null);

    function handleChange(e) {
        if (e.target.files[0]) {
            setImg(e.target.files[0])
        }
    };

    console.log('Image ::: ', img);

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
                            <label style={{ marginBottom: '10px' }}>Prendre une photo:</label> <br />
                            <Button
                                variant='contained'
                                style={{ width: '100%', marginTop: '-5px', height: '61px', boxShadow: "none" }}
                            >
                                <CameraAlt />
                            </Button>
                        </div>

                        {img && <img src={img.filePrevious} />}

                        <br /> <br />
                    </div>
                </div>
                <div className="col-12 container mt-5">
                    <div className="row">
                        <div className="col-12">
                            <Button
                                color="primary"
                                variant='contained'
                                className='mb-3'
                                style={{ marginLeft: "10px" , float: "right"}}
                                onClick={() => setCurrentStep(4)}
                            >
                                Suivant
                            </Button>
                            <Button
                                color="secondary"
                                variant='contained'
                                className='mb-3'
                                onClick={() => setCurrentStep(2)}
                                style={{ marginLeft: "10px", float: "right" }}
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

export default Form3