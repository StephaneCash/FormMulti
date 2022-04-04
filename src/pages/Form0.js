import { Button } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react'
import { multiStepContext } from "../StepContext";


function Form0() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div className="container">
      <div className="col-12">
        <div className="row">
          <div className="col-6">A</div>
          <div className="col-6">B</div>
        </div>
      </div>
        <Button onClick={()=>setCurrentStep(2)}>Suivant</Button>
    </div>
  )
}

export default Form0