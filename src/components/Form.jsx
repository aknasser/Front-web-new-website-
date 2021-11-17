import axios from 'axios';
import * as React from 'react';
import InputForm from "./parts/InputForm";
import InputSubmit from './parts/InputSubmit';


const Form = () => {

    const [prenomValue, setPrenomValue] = React.useState("");
    const [nomValue, setNomValue] = React.useState("");
    const [demandeValue, setDemandeValue] = React.useState("");
    const [activiteValue, setActiviteValue] = React.useState("");
    const [phoneValue, setPhoneValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");

    const inputHandlerName = (event) => {
        setPrenomValue(event.target.value);
    };

    const inputHandlerSurname = (event) => {
        setNomValue(event.target.value);
    };

    const inputHandlerDemande = (event) => {
        setDemandeValue(event.target.value);
    };

    const inputHandlerActivite = (event) => {
        setActiviteValue(event.target.value);
    };

    const inputHandlerPhone = (event) => {
        setPhoneValue(event.target.value);
    };

    const inputHandlerEmail = (event) => {
        setEmailValue(event.target.value);
    };


    const submitHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        const newProspect = {                   // on définit la variable contenant les datas du prospect
            prenom : prenomValue,
            nom : nomValue,
            demande : demandeValue,
            activite :activiteValue,
            numero : phoneValue, 
            email : emailValue
        };
        console.log("Here we go!!!")
        const leadPosted = await axios.post("http://localhost:1993/prospect", newProspect)
        console.log(leadPosted);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputForm 
                    id="prenom" 
                    type="text" 
                    labelValue="Prénom" 
                    value={prenomValue} 
                    inputHandler={inputHandlerName}
                 />   

                <InputForm 
                    id="nom" 
                    type="text" 
                    labelValue="Nom" 
                    value={nomValue} 
                    inputHandler={inputHandlerSurname}
                />

                <InputForm 
                    id="demande" 
                    type="textarea" 
                    labelValue="Demande" 
                    value={demandeValue} 
                    inputHandler={inputHandlerDemande}
                />

                <InputForm 
                    id="activite" 
                    type="text" 
                    labelValue="Activité" 
                    value={activiteValue} 
                    inputHandler={inputHandlerActivite}
                />
                
                <InputForm 
                    id="email" 
                    type="email" 
                    labelValue="Email" 
                    value={emailValue} 
                    inputHandler={inputHandlerEmail}
                />

                <InputForm 
                    id="téléphone" 
                    type="text" 
                    labelValue="Téléphone" 
                    value={phoneValue} 
                    inputHandler={inputHandlerPhone}
                />

                <InputSubmit
                    cta = "C'est parti!!!"
                />
            </form>
        </div>
    );
}
 
export default Form;