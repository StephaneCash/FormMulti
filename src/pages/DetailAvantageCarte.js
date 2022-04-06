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
                  Carte Standard
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