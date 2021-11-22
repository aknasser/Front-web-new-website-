import axios from 'axios';
import * as React from 'react';
import InputForm from "./parts/InputForm";
import InputSubmit from './parts/InputSubmit';


const CreateProspect = () => {

    const [state, setState] = React.useState({
        prenom: "",
        nom :"",
        demande :"",
        activite : "",
        numero :"",
        email : ""
    });

    const inputHandlerName = (event) => {
        setState(state => ({
            ...state,
            prenom : event.target.value
        }))
    };

    const inputHandlerSurname = (event) => {
        setState(state => ({
            ...state,
            nom : event.target.value
        }))
    };

    const inputHandlerDemande = (event) => {
        setState(state => ({
            ...state,
            demande : event.target.value
        }))
    };

    const inputHandlerActivite = (event) => {
        setState(state => ({
            ...state,
            activite : event.target.value
        }))
    };

    const inputHandlerPhone = (event) => {
        setState(state => ({
            ...state,
            numero : event.target.value
        }))
    };

    const inputHandlerEmail = (event) => {
        setState(state => ({
            ...state,
            email : event.target.value
        }))
    };


    const submitHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        const newProspect = {                   // on définit la variable contenant les datas du prospect
            prenom : state.prenom,
            nom : state.nom,
            demande : state.demande,
            activite :state.activite,
            numero : state.numero, 
            email : state.email
        };
        console.log("Here we go!!!")
        const leadPosted = await axios.post("http://localhost:1993/prospect", newProspect)
        console.log(leadPosted.data);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputForm 
                    id="prenom" 
                    type="text" 
                    labelValue="Prénom" 
                    value={state.prenom} 
                    inputHandler={inputHandlerName}
                 />   

                <InputForm 
                    id="nom" 
                    type="text" 
                    labelValue="Nom" 
                    value={state.nom} 
                    inputHandler={inputHandlerSurname}
                />

                <InputForm 
                    id="demande" 
                    type="textarea" 
                    labelValue="Demande" 
                    value={state.demande} 
                    inputHandler={inputHandlerDemande}
                />

                <InputForm 
                    id="activite" 
                    type="text" 
                    labelValue="Activité" 
                    value={state.activite} 
                    inputHandler={inputHandlerActivite}
                />
                
                <InputForm 
                    id="email" 
                    type="email" 
                    labelValue="Email" 
                    value={state.email} 
                    inputHandler={inputHandlerEmail}
                />

                <InputForm 
                    id="téléphone" 
                    type="text" 
                    labelValue="Téléphone" 
                    value={state.numero} 
                    inputHandler={inputHandlerPhone}
                />

                <InputSubmit
                    cta = "C'est parti!!!"
                />
            </form>
        </div>
    );
}
 
export default CreateProspect;