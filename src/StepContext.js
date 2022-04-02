import React from 'react';
import { useState } from "react";
import App from './App';

export const multiStepContext = React.createContext();

const StepContext = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);

    function submitData() {
        alert('Allo vous avez fini')
    };

    return (
        <div>
            <multiStepContext.Provider value={{ currentStep, setCurrentStep, userData, setUserData, submitData }}>
                <App />
            </multiStepContext.Provider>
        </div>
    )
}

export default StepContext