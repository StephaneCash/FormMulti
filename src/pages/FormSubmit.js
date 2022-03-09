import React, {useContext} from 'react';
import { multiStepContext } from "../StepContext";

function FormSubmit() {

    const { userData } = useContext(multiStepContext);

    return (
        <div>
            <h4>Merci de vous inscrire 
                {userData.sexe === "M" ? ` Monsieur ${userData.nom} ${userData.postnom}` : ` Madame ${userData.nom} ${userData.postnom}`}
            </h4>
        </div>
    )
}

export default FormSubmit