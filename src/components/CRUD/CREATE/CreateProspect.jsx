import axios from 'axios';
import * as React from 'react';
import  * as Style from '../../parts/Esthete';
import InputForm from '../../parts/InputForm';
import InputForm_TextArea from '../../parts/InputForm_TextArea';
import InputSubmit from '../../parts/InputSubmit';
import PageTitle from '../../parts/PageTitle';



const CreateProspect = ({endpoint}) => {

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
        const leadPosted = await axios.post(`${endpoint}/prospect/create`, newProspect)
        console.log(leadPosted.data);
    }


  

    return (
        <div>
            <Style.FormTitle id="form"> un café ensemble ? </Style.FormTitle>
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
                </Style.StyledForm>

                <InputSubmit
                    cta = "Me Contacter"
                />
            </form>
        </div>


    );
}
 
export default CreateProspect;