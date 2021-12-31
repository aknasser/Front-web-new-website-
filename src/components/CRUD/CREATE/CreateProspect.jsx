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


// We use this function to send notifications through EmailJS service. Check this article for more information :template_9w72q3i

    const sendNotifications = async(serviceID, templateID, variables) => {
        try {
            console.log("We are starting to send the notifications");
            const emailToSent = await window.emailjs.send(
                serviceID,
                templateID,
                variables
            )
            console.log ("Notifications email sent!")
        } catch (e) {
            throw new Error(`Issue with Notification Email : ${e}`)

        }
    }

// We use this function to send a confirmation Email to the lead through EmailJS service. Check this article for more information :template_9w72q3i

    const confirmationEmail = async (serviceID, templateID, variables) => {
        
         try {
            const emailToSent = await window.emailjs.send(
                serviceID,
                templateID,
                variables
            )
            console.log ("Confirmation email sent!")
        } catch (e) {
            throw new Error(`Issue with confirmation Email : ${e}`)

        }


    }


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
        const notification_serviceID =   "nassmassa_notifications";
        const notification_templateID =  "template_9w72q3i";
        const masterNotifications = await sendNotifications(
            notification_serviceID,
            notification_templateID,
            {
                prenom : newProspect.prenom,
                nom : newProspect.nom,
                demande : newProspect.demande,
                email : newProspect.email,
                reply_to : newProspect.email
            });

        const confirmation_serviceID =   "nassmassa_notifications";
        const confirmation_templateID =  "template_3y0yytx";
        const leadConfirmation = await confirmationEmail(
            confirmation_serviceID,
            confirmation_templateID,
            {
                prenom : newProspect.prenom,
                lead_email : newProspect.email
            });



        window.location.href = "/"   // Redirect the admin towards the main page once everything is done (new entry saved in the DB, notification sent, confirmation email sent).
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