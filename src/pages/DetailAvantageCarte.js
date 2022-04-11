import { Check, Close, KeyboardArrowDown, KeyboardArrowUp, KeyboardBackspace, CheckCircleTwoTone } from '@mui/icons-material';
import React, { useState, useEffect, useContext } from 'react';
import prenium from "../images/prenium.png";
import standardCard from "../images/standardCard.png";
import "../css/DetailAvantageCarte.css"
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { multiStepContext } from "../StepContext";
import { Button, } from '@material-ui/core';
import { HashLink as Links } from 'react-router-hash-link';

function DetailAvantageCarte() {

  const [arrow, setArrow] = useState(true);
  const [btnChoice, setBtnChoice] = useState(0);

  let navigate = useNavigate();
  let location = useLocation();

  const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

  const arrowChange = () => {
    setArrow(!arrow);
  }

  //console.log(userData)

  useEffect(() => {
    if (userData.indiceData === 10) {
      setTimeout(() => {
        navigate('/')
      }, [0])
    }

    if (location.state) {
      return window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [userData.indiceData]);

  console.log("DEPUIS DETAIL ::: ", userData)

  return (
    <>
      {userData.indiceData === 10 ? "" : <div className="col-12">
        <div className="btnRetour">
          <Link to="/"><KeyboardBackspace style={{ marginTop: '-2px' }} /> Retour</Link>
        </div>

        <h2 className="text-center h2text mt-4">Comparer les cartes et leurs <br /> fonctionnalités</h2>

        <div className="col-12 colP mt-5">
          <div className="row rowPrincImages">
            <div className="col-6 rowCol6Princ"></div>
            <div className="col-6 col6Img">
              <div className="d-flex colDflex">
                <div className="col-4 col4Prenium">
                  <div className="col-12">
                    <img src={standardCard} className="imageAvantages" />
                  </div>
                  <div className="col-12">
                    <h4 className="mt-2">Carte Standard</h4>

                    <h5 className="textAvantages">0 €/mois</h5>

                    <Links to={{ hash: "#BtnSuivant", }} style={{ textDecoration: "none" }}>
                      <Button variant='contained'
                        className="btnCarteStandard"
                        onClick={() => (setUserData({ ...userData, 'choixCarte': 'carte_standard' }), setBtnChoice(2))}
                      >
                        Choisir cette <br /> carte  {btnChoice === 2 && <><br /><CheckCircleTwoTone /></>}
                      </Button>
                    </Links>
                  </div>
                </div>

                <div className="col-4 col4Prenium col4PreniumClass2" style={{ marginLeft: '15px' }}>
                  <div className="col-12">
                    <img src={prenium} className="imageAvantages" />
                  </div>
                  <div className="col-12 texPre">
                    <h4 className="mt-2">Carte Prenium</h4>

                    <h5 className="textAvantages">7,99 €/mois</h5>

                    <div className="">
                      <Links to={{ hash: "#BtnSuivant", }} style={{ textDecoration: "none" }}>
                        <Button variant='contained'
                          className="btnCarteStandard btnCommunChoiceCarte"
                          onClick={() => (setUserData({ ...userData, 'choixCarte': 'carte_prenium' }), setBtnChoice(1))}
                        >
                          Choisir cette <br /> carte {btnChoice === 1 && <CheckCircleTwoTone />}
                        </Button>
                      </Links>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 colonne2">
          <table className="table tableClass table-borderless">
            <thead className="thead">
              <tr>
                <th>voyages <span className="textVoyage">et assurances</span> </th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td1">Assurance protection des achats</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">Assurance protection des achats</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">Assurances voyage (retard, annulation, etc)</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className='td3'><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">Garantie véhicule de location</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">Garantie neige et montagne</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">Paiements et retraits dans le monde</td>
                <td className="td2"><h4 className="htext2">Payant</h4> </td>
                <td className="td3"><h4 className="htext" style={{ color: 'red' }}>Gratuit</h4> </td>
              </tr>

              <tr>
                <td className="td1">Assistance rapatriement</td>
                <td className="td2"><h4 className="htext2">Jusqu’à 11 000€</h4> </td>
                <td className="td3"><h4 className="htext" style={{ color: 'red' }}>Jusqu’à 155 000€</h4> </td>
              </tr>

              <tr>
                <td className="td1">Renvoi de la carte en urgence où que vous soyez</td>
                <td className="td2"><h4 className="htext2">70 €</h4> </td>
                <td className="td3"><h4 className="htext" style={{ color: 'red' }}>Gratuit</h4> </td>
              </tr>
            </tbody>
          </table>

          <table className="table table-borderless">
            <thead className="thead">
              <tr>
                <th>Paiements</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td1">Débit différé</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">Débit immédiat</td>
                <td className="td2"><Check style={{ color: 'red' }} /></td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

              <tr>
                <td className="td1">5% remboursés sur vos achats et vos factures Orange</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>

            </tbody>
          </table>

          <table className="table table-borderless">
            <thead className="thead">
              <tr>
                <th>Service client</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="td1">Accès prioritaire au service client en cas de besoin</td>
                <td className="td2"><Close style={{ color: 'silver', fontWeight: '700' }} /> </td>
                <td className="td3"><Check style={{ color: 'red' }} /> </td>
              </tr>
            </tbody>
          </table>

          <table className="table table-borderless trLastTbody">
            <thead className="thead">
              <tr>
                <th className="td1">Fonctionnalités communes</th>
                <th className="td21"></th>
                <th className='thArrow td31'>
                  {arrow ? <KeyboardArrowDown onClick={arrowChange} /> :
                    <KeyboardArrowUp onClick={arrowChange} />}
                </th>
              </tr>
            </thead>
            <tbody>

              {!arrow ?
                <>
                  <tr>
                    <td className="td1">Actualisation du solde de votre compte en temps réel</td>
                    <td className="td2"><Check style={{ color: 'black' }} /></td>
                    <td className="td3"><Check style={{ color: 'black' }} /> </td>
                  </tr>

                  <tr>
                    <td className="td1">Blocage/déblocage de la carte et des options de paiement</td>
                    <td className="td2"><Check style={{ color: 'black' }} /></td>
                    <td className="td3"><Check style={{ color: 'black' }} /> </td>
                  </tr>

                  <tr>
                    <td className="td1">Personnalisation dans l'App du code secret de la carte</td>
                    <td className="td2"><Check style={{ color: 'black' }} /></td>
                    <td className="td3"><Check style={{ color: 'black' }} /> </td>
                  </tr>

                  <tr>
                    <td className="td1">Notification lors de vos paiements</td>
                    <td className="td2"><Check style={{ color: 'black' }} /></td>
                    <td className="td3"><Check style={{ color: 'black' }} /> </td>
                  </tr>

                  <tr>
                    <td className="td1">Accès au paiement mobile et sans contact</td>
                    <td className="td2"><Check style={{ color: 'black' }} /></td>
                    <td className="td3"><Check style={{ color: 'black' }} /> </td>
                  </tr>
                </>

                : ''
              }

            </tbody>
          </table>


          {btnChoice === 1 || btnChoice === 2 ?
            <Button variant="contained"
              id="BtnSuivant"
              className="btnSuivantForm0 mt-3 btnSuivantAvantages"
              style={{ backgroundColor: '#111b21', color: "#fff", float: 'right' }}

              onClick={() => (setUserData({ ...userData, 'indiceData': 1000 }), setCurrentStep(2))}
            >
              Suivant
            </Button> : ''
          }
        </div>

      </div>}
    </>
  )
}

export default DetailAvantageCarte