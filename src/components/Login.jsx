import InputForm from "./parts/InputForm";
import * as React from 'react';
import * as Style from "./parts/Esthete";



const Login = () => {
    const [userDetails, setUserDetails] =React.useState({
        username: "",
        password :""
    })

// We don't add name because it's not useful to log in.


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




    const formHandler = async (event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        

    }


    return ( 
        <>
            <Style.BlocTitle>Accès Admin</Style.BlocTitle>
            <Style.StyledForm  onSubmit={formHandler} id="userForm" >
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
        </>
    )
}
 
export default Login;