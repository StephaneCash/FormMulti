import React, {useContext} from 'react';
import { multiStepContext } from "../StepContext";

function FormSubmit() {

    const { userData } = useContext(multiStepContext);

    return (
        <div>
            <div className="container text-center">Merci de vous inscrire 
                {userData.sexe === "M" ? ` Monsieur ${userData.nom} ${userData.postnom}` : ` Madame ${userData.nom} ${userData.postnom}`}
            </div>
        </div>
    )
}

export default FormSubmit