import { Euro } from '@mui/icons-material';
import React from 'react';
import prenium from "../images/prenium.png";
import standardCard from "../images/standardCard.png";

function DetailAvantageCarte() {
  return (
    <div className="col-12">
      <h2 className="text-center">Comparer les cartes et leurs <br /> fonctionnalités</h2>

      <div className="col-12">
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

                  <h5 className="textAvantages">0 <Euro
                    style={{ fontSize: '20px', fontWeight: 'lighter', color: '#333', marginTop: '-3px' }} />/mois</h5>

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

                  <h5 className="textAvantages">7,99 <Euro
                    style={{ fontSize: '20px', fontWeight: 'lighter', color: '#333', marginTop: '-3px' }} />/mois</h5>

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
        <h4 className="mt-5 mb-4" style={{ marginLeft: '15px' }}>Voyages et assurances</h4>
        <hr />
      </div>
    </div>
  )
}

export default DetailAvantageCarte