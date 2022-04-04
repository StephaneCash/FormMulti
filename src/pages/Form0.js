import { Button } from '@material-ui/core';
import React, { useContext, useState, useEffect } from 'react'
import { multiStepContext } from "../StepContext";


function Form0() {

    const { setCurrentStep, userData, setUserData } = useContext(multiStepContext);

  return (
    <div>
        <Button onClick={()=>setCurrentStep(2)}>Suivant</Button>
    </div>
  )
}

export default Form0