import axios from 'axios';
import * as React from 'react';
import  * as Style from '../../parts/Esthete';
import InputForm from '../../parts/InputForm';
import InputForm_TextArea from '../../parts/InputForm_TextArea';
import InputSubmit from '../../parts/InputSubmit';



const CreateProspect = ({endpoint}) => {


    let formValid = true;   // We use this variable to check the correctness of the form

    const [state, setState] = React.useState({
        prenom: "",
        nom :"",
        demande :"",
        email : "",
        cta : "Me Contacter",
        bgButton : `${Style.Colors.primaryColor}`,
        txtColor : "white",
        errorMessage : {
            firstNameError : "N'oublie pas d'indiquer ton prénom :)",
            lastNameError : "N'oublie pas d'indiquer ton nom :)",
            demandeError : "Ben quoi ? On dit plus bonjour ?",
            emailError : "N'oublie pas d'indiquer ton email :)",
        }
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
            // eslint-disable-next-line
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
             // eslint-disable-next-line
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
        
        if (!state.prenom) {
            formValid = false;
            alert (state.errorMessage.firstNameError);
        }

        if (!state.nom) {
            formValid = false;
            alert (state.errorMessage.lastNameError);
        }

        if (!state.demande) {
            formValid = false;
            alert (state.errorMessage.demandeError);
        }

        if (!state.email) {
            formValid = false;
            alert (state.errorMessage.emailError);
        }
        
        console.log(formValid);
        if (formValid) {                        // If the form is valid we execute the code including the POST request and the notifications dispatch.

            console.log(`FORM VALID : ${formValid}`);
            setState(state => ({                    // Enable us to change the Cta text when we submit the form
                ...state,
                cta : "Loading...",
                bgButton : "white",
                txtColor : `${Style.Colors.secundaryColor}`
            }))

    
            const newProspect = {                   // on définit la variable contenant les datas du prospect
                prenom : state.prenom,
                nom : state.nom,
                demande : state.demande,
                email : state.email
            };
    
            // eslint-disable-next-line
            const leadPosted =  await axios.post(`${endpoint}/prospect/create`, newProspect)
    
    /*         const notification_serviceID =   "nassmassa_notifications";
            const notification_templateID =  "template_9w72q3i";
    
            // eslint-disable-next-line
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
    
            // eslint-disable-next-line
            const leadConfirmation = await confirmationEmail(
                confirmation_serviceID,
                confirmation_templateID,
                {
                    prenom : newProspect.prenom,
                    lead_email : newProspect.email
                }); */
    
    
    
            window.location.href = "/"   // Redirect the admin towards the main page once everything is done (new entry saved in the DB, notification sent, confirmation email sent).
        }
     
    }


  

    return (
        <div>
            <Style.FormTitle id="form"> Un café ensemble </Style.FormTitle>
            <form onSubmit={submitHandler} id="form" noValidate>
                <Style.StyledForm>
                    <InputForm 
                        id="prenom" 
                        type="text" 
                        labelValue="Prénom" 
                        value={state.prenom} 
                        inputHandler={inputHandlerName}
                        required
                    />   

                    <InputForm 
                        id="nom" 
                        type="text" 
                        labelValue="Nom" 
                        value={state.nom} 
                        inputHandler={inputHandlerSurname}
                        required
                    />

                    <InputForm_TextArea 
                        id="demande" 
                        rows = "5"
                        labelValue="Demande" 
                        value={state.demande} 
                        inputHandler={inputHandlerDemande}
                        required
                    />

                    
                    <InputForm 
                        id="email" 
                        type="email" 
                        labelValue="Email" 
                        value={state.email} 
                        inputHandler={inputHandlerEmail}
                        required
                    />

                </Style.StyledForm>

                <InputSubmit
                    cta = {state.cta}
                    bgButton = {state.bgButton}
                    txtColor = {state.txtColor}
                />
            </form>
        </div>


    );
}
 
export default CreateProspect;