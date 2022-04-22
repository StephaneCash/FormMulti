import { Button, Card, } from '@material-ui/core';
import { Check, CheckCircleTwoTone } from '@mui/icons-material';
import React, { useContext, useState, useEffect } from 'react'
import { multiStepContext } from "../StepContext";
import prenium from "../images/prenium.png";
import standardCard from "../images/standardCard.png";
import offre18 from "../images/offre18.png";
import { Link } from 'react-router-dom';
import { useForceUpdate } from 'framer-motion';
import { HashLink as Links } from 'react-router-hash-link';


function Form0() {

  const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

  const [etatBtn, setEtatBtn] = useState(1);

  useEffect(() => {
    if (userData.indiceData === 10) {
      setUserData({ ...useForceUpdate, 'indiceData': 1000 })
    }

    if (userData.choixCarte) {
      if (userData.choixCarte === "carte_prenium") {
        setEtatBtn(3)
        setUserData({ ...useForceUpdate, 'choixCarte': "carte_prenium" })
        setUserData({...userData});
      } else if (userData.choixCarte === "carte_standard") {
        setEtatBtn(2);
        setUserData({ ...useForceUpdate, 'choixCarte': "carte_standard" });
        setUserData({...userData});
      }
    }
  }, [userData.indiceData, userData.choixCarte])

  console.log("DEPUIS FORM0 ::: ", userData)

  return (
    <div className="container-princial">
      <div className="col-12">
        <div className="row colPrincipal">

          <div className="col-6 card1">
            <Card sx={{ maxWidth: 345 }} className="cardForm0">
              <div className="row">
                <div className="col-4 col4">
                  <img src={prenium} className="imageCardStandard" />
                </div>
                <div className="col-6 carteStandardText">
                  <h3>Carte</h3>
                  <h3 className="standH3">Standard</h3>
                  <div className="d-flex">
                    <span style={{ fontSize: '30px' }}>0 </span>
                    <div className="col-6 numberPrenium"> €/mois</div>
                  </div>
                </div> 
              </div>
   
              <div className="col-12">
                <div className="bodyCard1">
                  <h6 className="mt-4">Compte et carte Standard : <br />
                    l'indispensable de la banque mobile
                  </h6>

                  <div className="textStandard">
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Paiements et retraits gratuits en RDC et en zone franc</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Actualisation du solde de votre compte en temps réel</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Blocage temporaire de la carte en cas de besoin</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Code secret de carte personnalisable</div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="col-12">
                <Links to={{ hash: "#BtnSuivant1", }} style={{ textDecoration: "none" }}>
                  <Button type="button"
                    className="btnCarteStandard"

                    onClick={() => (setUserData({ ...userData, 'choixCarte': 'carte_standard' }), setEtatBtn(2))}
                  >
                    Choisir la carte Standard {etatBtn === 2 ? <CheckCircleTwoTone /> : ''}
                  </Button>
                </Links>
              </div>

              <div className="col-12">
                <div className="text-center mt-3" style={{ color: 'red' }}>
                  <Link to='/avantages' state="form" className='linkAvantages'>
                    Découvrir tous les avantages
                  </Link>
                </div>
              </div>

            </Card>
          </div>
          <div className="col-6 card2">
            <Card sx={{ maxWidth: 345 }} className="cardForm0">
              <div className="row">
                <div className="col-4 col4">
                  <img src={standardCard} className="imageCardStandard" />
                </div>
                <div className="col-6 carteStandardText">
                  <h3>Carte</h3>
                  <h3 className="standH3">Prenium</h3>
                  <div className="d-flex">
                    <span style={{ fontSize: '30px' }}>7,99 </span>
                    <div className="col-6 numberPrenium"> €/mois</div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="bodyCard2">
                  <div className="col-12">
                    <div className="col-12 offre18ans mt-4">
                      <div className="row colOffre">
                        <div className="col-4">
                          <img src={offre18} />
                        </div>
                        <div className="col-8 ">
                          Offre 18-25 ans : votre carte Premium à 4,99 €/mois pendant 1 an
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <h6 className="mt-4">Compte et carte Standard : <br />
                      le top de la banque mobile
                    </h6>
                  </div>

                  <div className="textStandard">
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Paiements et retraits gratuits en France et partout dans le monde.</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Assurance protection des achats incluse pour vous et vos proches.</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Assurances voyage et assistance incluses pour vous et vos proches</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Cashback sur vos achats (6) et factures Orange.</div>
                    </div>
                    <div className="d-flex">
                      <Check className="checkIcon" />
                      <div className="textInterne">Accès aux programmes privilèges Mastercard.</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <Links to={{ hash: "#BtnSuivant1", }} style={{ textDecoration: "none" }}>
                  <Button
                    type="button"
                    className="btnCarteStandard"
                    onClick={() => (setUserData({ ...userData, 'choixCarte': 'carte_prenium' }, setEtatBtn(3)))}
                  >
                    Choisir la carte Prenium {etatBtn === 3 ? <CheckCircleTwoTone /> : ''}
                  </Button>
                </Links>
              </div>
              <div className="text-center mt-3" style={{ color: 'red' }}>
                <Link
                  to="/avantages" state="form"
                  className='linkAvantages'>
                  Découvrir tous les avantages
                </Link>
              </div>
            </Card>
          </div>
        </div>
      </div >
      <div className="col-12 text-center mt-4 mb-4">

        {etatBtn === 2 || etatBtn === 3 ?

          <Button variant="contained"
            id="BtnSuivant1"
            className="btnSuivantForm0"
            style={{ backgroundColor: '#111b21', color: "#fff" }}
            onClick={() => setCurrentStep(2)}
          >
            Suivant
          </Button>

          :

          <Button variant="contained"
            className="btnSuivantForm0"
            disabled
          >
            Suivant
          </Button>

        }

      </div>
    </div >
  )
}

export default Form0