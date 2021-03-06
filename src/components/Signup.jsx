import InputForm from "./parts/InputForm";
import * as React from 'react';
import * as Style from "./parts/Esthete"
import axios from "axios";
import InputSubmit from "./parts/InputSubmit";
import UserContext from "../context/UserContext"


const Signup = ({endpoint}) => {

    const [userDetails, setUserDetails] =React.useState({
        name: "",
        username: "",
        password :""
    })

    const [formValid, setFormValid] = React.useState(true);

    const [cta, setCta] = React.useState({
        txt: "Créer Compte",
        bgButton: `${Style.Colors.primaryColor}`,
        txtColor :"white"
    })


// Just like useState, we can update the context using a setFunction! Read this article as a reminder : https://dmitripavlutin.com/react-context-and-usecontext/ (number 4)
    const {userAccount, setUserAccount} = React.useContext(UserContext);

    const inputHandlerName = (event) => {
        setUserDetails(state => ({
            ...state,
            name : event.target.value
        }))
    };

    const inputHandlerUsername = (event) => {
        setUserDetails(state => ({
            ...state,
            username : event.target.value
        }))    };

    const inputHandlerPassword = (event) => {
        setUserDetails(state => ({
            ...state,
            password : event.target.value
        }))
    };




    const formHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        
        console.log(`UseContext : ${userAccount.token}`); 

        if (!userDetails.name) {
            alert("Don't forget the name")
            setFormValid(false);
        }

        if (!userDetails.username) {
            alert("Don't forget the email :)")
            setFormValid(false);
        }
        if (!userDetails.password) {
            alert("Don't forget to set a password")
            setFormValid(false);
        }

        if (formValid) {
            console.log("Ca passe");
            setCta({
                txt : "Création en cours",
                bgButton: "white",
                txtColor : `${Style.Colors.secundaryColor}`
            })

            const newUser = {
                name : userDetails.name,
                username : userDetails.username,
                password : userDetails.password
            }
            console.log(`formerToken:  ${userAccount.token}`)

            const newUserPosted = await axios.post(`${endpoint}/user/signup`, newUser);
            const currentToken = await newUserPosted.data.token; 
            setUserAccount({currentToken},  () => console.log(userAccount));
            localStorage.setItem("token", currentToken);   // To store the currentToken in the local Storage. We will fetch it later.
            console.log(`currentToken:  ${currentToken}`)
            console.log(`new token:  ${userAccount.token}`)
            window.location.href = "/admin"   // To redirect towards the user page once the account is created.
        }
    } 




    return ( 
        <>
            <Style.BlocTitle>Nouvel Admin</Style.BlocTitle>
                <form onSubmit={formHandler} id="userForm">
                    <Style.StyledForm>
                        <InputForm
                            id="name" 
                            type="text" 
                            labelValue="Nom" 
                            value={userDetails.name} 
                            inputHandler={inputHandlerName}
                            required
                        />
                        <InputForm
                            id="username" 
                            type="email" 
                            labelValue="Email" 
                            value={userDetails.username} 
                            inputHandler={inputHandlerUsername}
                            required
                        />
                        <InputForm
                            id="password" 
                            type="password" 
                            labelValue="Mot de Passe" 
                            value={userDetails.password} 
                            inputHandler={inputHandlerPassword} 
                            required
                        />
                    </Style.StyledForm>


                        <InputSubmit
                            cta = {cta.txt}
                            bgButton = {cta.bgButton}
                            txtColor = {cta.txtColor}
                        />

                </form>
            
        </>

    );
}
 
export default Signup;