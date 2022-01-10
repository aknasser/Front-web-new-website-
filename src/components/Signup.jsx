import InputForm from "./parts/InputForm";
import * as React from 'react';
import * as Style from "./parts/Esthete"




const Signup = () => {

    const [userDetails, setUserDetails] =React.useState({
        name: "",
        username: "",
        password :""
    })


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




    const formHandler = async (event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        

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

                </form>
            
        </>

    );
}
 
export default Signup;