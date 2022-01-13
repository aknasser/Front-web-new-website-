import InputForm from "./parts/InputForm";
import * as React from 'react';
import * as Style from "./parts/Esthete";
import axios from "axios";
import InputSubmit from "./parts/InputSubmit";
import { UserContext } from "../context/UserContext";




const Login = ({endpoint}) => {
    const [userDetails, setUserDetails] =React.useState({
        username: "",
        password :""
    })

    const [formValid, setFormValid] = React.useState(true)

    const [cta, setCta] = React.useState({
        txt: "Login",
        bgButton: `${Style.Colors.primaryColor}`,
        txtColor :"white"
    })





// Just like useState, we can update the context using a setFunction! Read this article as a reminder : https://dmitripavlutin.com/react-context-and-usecontext/ (number 4)
    const [userContext, setUserContext] = React.useContext(UserContext);

    const inputHandlerUsername = (event) => {
        setUserDetails(state => ({
            ...state,
            username : event.target.value,
        }))    
    };

    const inputHandlerPassword = (event) => {
        setUserDetails(state => ({
            ...state,
            password : event.target.value
        }))
    };




    const formHandler = async (event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        console.log(`UseContext : ${userContext.token}`); 

            setCta({
                txt : "Login en cours",
                bgButton: "white",
                txtColor : `${Style.Colors.secundaryColor}`
            })
            const userToCheck = {
                username : userDetails.username,
                password : userDetails.password
            }
            const loginRequest = await axios.post(`${endpoint}/user/login`, userToCheck); 
            console.log(`Status Code: ${loginRequest.status}`);
            if (loginRequest.status !== 200) {
                setFormValid(false)
                if (loginRequest.status === 400) {
                    console.log("Please fill all the fields correctly!")
                } else if (loginRequest.status === 401) {
                    console.log("Invalid email and password combination : Access Denied")
                } else {
                    console.log("Mysterious man!!!")
                    console.log(loginRequest.data);
                }
            } else {
                console.log("3GOOD");
                const currentToken = await loginRequest.data.token; 
                setUserContext(oldValues => ({
                    ...oldValues,
                    token : "currentToken"
                })) 
                console.log(`current token:  ${currentToken}`)
                console.log(`token in userContext (PLEASE):  ${userContext.token}`)

                window.location.href = "/admin"   // The redirect is not needed. Once the token is created, React Router leads us directly towards the admin page(check App around line 145)
            }
         
    }


    return ( 
        <>
            <Style.BlocTitle>Accès Admin</Style.BlocTitle>
            <form onSubmit={formHandler} id="userForm">
            <Style.StyledForm  >
                <InputForm
                        id="username" 
                        type="text" 
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
    )
}
 
export default Login;