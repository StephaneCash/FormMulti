import { Check, Close, KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import React, { useState } from 'react';
import prenium from "../images/prenium.png";
import standardCard from "../images/standardCard.png";
import "../css/DetailAvantageCarte.css"

function DetailAvantageCarte() {

  const [arrow, setArrow] = useState(true);

  const arrowChange = () => {
    setArrow(!arrow);
  }

  return (
    <div className="col-12">
      <h2 className="text-center mt-4">Comparer les cartes et leurs <br /> fonctionnalités</h2>

      <div className="col-12 mt-5">
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <div className="d-flex">
              <div className="col-4">
                <div className="col-12">
                  <img src={standardCard} className="imageAvantages" />
                </div>
                <div className="col-12">
                  <h4 className="mt-2">Carte Standard</h4>

                  <h5 className="textAvantages">0 €/mois</h5>

                  <div className="choixCarte">
                    <h6 className="text-center">Choisir cette <br />carte</h6>
                  </div>
                </div>
              </div>

              <div className="col-4" style={{ marginLeft: '15px' }}>
                <div className="col-12">
                  <img src={prenium} className="imageAvantages" />
                </div>
                <div className="col-12">
                  <h4 className="mt-2">Carte Prenium</h4>

                  <h5 className="textAvantages">7,99 €/mois</h5>

                  <div className="choixCarte">
                    <h6 className="text-center">Choisir cette <br />carte</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 colonne2">
        <table className="table table-borderless">
          <thead className="thead">
            <tr>
              <th>voyages et assurances</th>
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
              <td className="td2"><h4>Payant</h4> </td>
              <td className="td3"><h4 style={{ color: 'red' }}>Gratuit</h4> </td>
            </tr>

            <tr>
              <td className="td1">Assistance rapatriement</td>
              <td className="td2"><h4>Jusqu’à 11 000€</h4> </td>
              <td className="td3"><h4 style={{ color: 'red' }}>Jusqu’à 155 000€</h4> </td>
            </tr>

            <tr>
              <td className="td1">Renvoi de la carte en urgence où que vous soyez</td>
              <td className="td2"><h4>70 €</h4> </td>
              <td className="td3"><h4 style={{ color: 'red' }}>Gratuit</h4> </td>
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
              <th>Fonctionnalités communes</th>
              <th></th>
              <th className='thArrow'>
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
      </div>
    </div>
  )
}

export default DetailAvantageCarte