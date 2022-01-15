import InputForm from "./parts/InputForm";
import * as React from 'react';
import * as Style from "./parts/Esthete";
import axios from "axios";
import InputSubmit from "./parts/InputSubmit";
import UserContext  from "../context/UserContext";

axios.defaults.withCredentials = true;




const Login = ({endpoint}) => {
    const [userDetails, setUserDetails] =React.useState({
        username: "",
        password :""
    })


    const [cta, setCta] = React.useState({
        txt: "Login",
        bgButton: `${Style.Colors.primaryColor}`,
        txtColor :"white"
    })





// Just like useState, we can update the context using a setFunction! Read this article as a reminder : https://dmitripavlutin.com/react-context-and-usecontext/ (number 4)
    const {userAccount, setUserAccount} = React.useContext(UserContext);

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
        console.log(`token before Update : ${userAccount}`); 
            setCta({
                txt : "Login en cours",
                bgButton: "white",
                txtColor : `${Style.Colors.secundaryColor}`
            })
            
            console.log(`USERNAME BEFORE :${userDetails.username} `)
            const userToCheck = {
                username : userDetails.username,
                password : userDetails.password
            }

            const loginRequest = await axios.post(`${endpoint}/user/login`,userToCheck) 
            if (loginRequest.status !== 200) {
                console.log("gfkdl");
                if (loginRequest.status === 400) {
                    console.log("Please fill all the fields correctly!")
                } else if (loginRequest.status === 401) {
                    console.log("Invalid email and password combination : Access Denied")
                } else {
                    console.log("Mysterious man!!!")
                    console.log(loginRequest.data);
                }
            } else {
                const currentToken = await loginRequest.data.token; 
                setUserAccount(currentToken);
                console.log(`currentoken object:  ${currentToken}`)
                localStorage.setItem("token", currentToken);
                console.log(`USERACCOUNT : ${userAccount}`);
            }
         
    }


    return ( 
        <>
            <Style.BlocTitle>Accès Admin</Style.BlocTitle>
            <form onSubmit={formHandler} id="userForm">
                <h2>{userAccount}</h2>

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