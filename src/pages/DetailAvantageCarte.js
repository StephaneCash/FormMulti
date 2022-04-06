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
                  <img src={standardCard} className="imageCardStandard" />
                </div>
                <div className="col-12">
                  <h4>Carte Standard</h4>
                  <div>
                    0<Euro style={{ fontSize: '15px' }} />/mois
                  </div>

                  <div className="choixCarte">
                    <h6 className="text-center">Choisir cette <br />carte</h6>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <img src={prenium} className="imageCardStandard" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailAvantageCarte