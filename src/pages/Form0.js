import { Button, Card, } from '@material-ui/core';
import { Check, Euro } from '@mui/icons-material';
import React, { useContext, useState, useEffect } from 'react'
import { multiStepContext } from "../StepContext";
import prenium from "../images/prenium.png";
import standardCard from "../images/standardCard.png";
import offre18 from "../images/offre18.png";


function Form0() {

  const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className="container">
      <div className="col-12">
        <div className="row">
          <div className="col-6">
            <Card sx={{ maxWidth: 345 }} className="cardForm0">
              <div className="row">
                <div className="col-5">
                  <img src={prenium} className="imageCardStandard" />
                </div>
                <div className="col-6 carteStandardText">
                  <h3>Carte</h3>
                  <h3 className="standH3">Standard</h3>
                  <div className="d-flex">
                    <span style={{ fontSize: '30px' }}>0</span>
                    <div className="col-6 numberPrenium"><Euro style={{ fontSize: '15px' }} />/mois</div>
                  </div>
                </div>
              </div>
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
              <div className="col-12">
                <Button type="button" className="btnCarteStandard">Choisir la carte Standard</Button>
              </div>
              <div className="text-center mt-3" style={{ color: 'red' }}>Découvrir tous les avantages</div>
            </Card>
          </div>
          <div className="col-6">
            <Card sx={{ maxWidth: 345 }} className="cardForm0">
              <div className="row">
                <div className="col-5">
                  <img src={standardCard} className="imageCardStandard" />
                </div>
                <div className="col-6 carteStandardText">
                  <h3>Carte</h3>
                  <h3 className="standH3">Prenium</h3>
                  <div className="d-flex">
                    <span style={{ fontSize: '30px' }}>7,99</span>
                    <div className="col-6 numberPrenium"><Euro style={{ fontSize: '15px' }} />/mois</div>
                  </div>
                </div>
              </div>
              <div className="col-12 offre18ans mt-4">
                <div className="row">
                  <div className="col-4">
                    <img src={offre18} />
                  </div>
                  <div className="col-8">
                    Offre 18-25 ans : votre carte Premium à 4,99 €/mois pendant 1 an
                  </div>
                </div>
              </div>

              <h6 className="mt-4">Compte et carte Standard : <br />
                le top de la banque mobile
              </h6>

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
              <div className="col-12">
                <Button type="button" className="btnCarteStandard">Choisir la carte Standard</Button>
              </div>
              <div className="text-center mt-3" style={{ color: 'red' }}>Découvrir tous les avantages</div>
            </Card>
          </div>
        </div>
      </div>
      <Button onClick={() => setCurrentStep(2)}>Suivant</Button>
    </div>
  )
}

export default Form0