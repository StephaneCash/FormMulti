import React, {useContext} from 'react';
import { multiStepContext } from "../StepContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormSubmit() {

    const { userData } = useContext(multiStepContext);

    if(userData){
        toast.success("Vos informations ont été soumises avec succès");
    }

    return (
        <div>
            <div className="container text-center">Merci de vous inscrire 
                {userData.sexe === "M" ? ` Monsieur ${userData.nom} ${userData.postnom}` : ` Madame ${userData.nom} ${userData.postnom}`}
            </div>
        </div>
    )
}

export default FormSubmit