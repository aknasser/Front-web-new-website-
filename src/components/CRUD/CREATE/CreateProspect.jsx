import axios from 'axios';
import * as React from 'react';
import  * as Style from '../../parts/Esthete';
import InputForm from '../../parts/InputForm';
import InputForm_TextArea from '../../parts/InputForm_TextArea';
import InputSubmit from '../../parts/InputSubmit';



const CreateProspect = ({endpoint}) => {

    const [state, setState] = React.useState({
        prenom: "",
        nom :"",
        demande :"",
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
            email : state.email
        };
        console.log("Here we go!!!")
        const leadPosted =  await axios.post(`${endpoint}/prospect/create`, newProspect)
        console.log("new entry in the DB");
        window.location.href = "/"   // Redirect the admin towards the page with all the entries.
    }


  

    return (
        <div>
            <Style.FormTitle id="form"> Un café ensemble </Style.FormTitle>
            <form onSubmit={submitHandler} id="form">
                <Style.StyledForm>
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

                    <InputForm_TextArea 
                        id="demande" 
                        rows = "5"
                        labelValue="Demande" 
                        value={state.demande} 
                        inputHandler={inputHandlerDemande}
                    />

                    
                    <InputForm 
                        id="email" 
                        type="email" 
                        labelValue="Email" 
                        value={state.email} 
                        inputHandler={inputHandlerEmail}
                    />

                </Style.StyledForm>

                <InputSubmit
                    cta = "Me Contacter"
                />
            </form>
        </div>


    );
}
 
export default CreateProspect;