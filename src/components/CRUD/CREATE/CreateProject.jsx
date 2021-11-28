import axios from 'axios';
import * as React from 'react';
import InputForm from '../../parts/InputForm';
import InputSubmit from '../../parts/InputSubmit';


const CreateProject = () => {

    const [state, setState] = React.useState({
        title: "",
        picture :"",
        link : "",
        description : ""
    });

    const inputTitleHandler = (event) => {                          // EXPLICATION DOUTEUSE W.I.P (voir cette exemple :https://stackoverflow.com/questions/57305227/how-to-use-map-function-for-hooks-usestate-properties)
        setState(state => ({                                     // setState prend pour paramètre une fonction anonyme de paramètre state qui prend un object QUI...
            ...state,                                           // garde ses valeurs / propriétés initiales SAUF...
            title : event.target.value                            // ... quote correspond désormais à la valeur de la cible de l'event (ici onChange)
        }))
    };

    const inputPictureHandler = (event) => {
        setState(state => ({
            ...state,
            picture : event.target.value
    }))
    };


    const inputLinkHandler = (event) => {
        setState(state => ({
            ...state,
            link : event.target.value
    }))
    };


    const inputDescriptionHandler = (event) => {
        setState(state => ({
            ...state,
            description : event.target.value
    }))
    };


    const submitHandler = async(event) => {
        event.preventDefault();                // Pour empêcher le comportement par défaut du form
        const newProject = {                   // on définit la variable contenant les datas du prospect
            title : state.title,
            picture : state.picture,
            link : state.link,
            description : state.description,
        };
        console.log("Here we go!!!")
        const leadPosted = await axios.post("http://localhost:1993/project/create", newProject)
        console.log(leadPosted.data);
    }


    return (
        <div>
            <form onSubmit={submitHandler}>
                <InputForm 
                    id="title" 
                    type="text" 
                    labelValue="Title" 
                    value={state.title} 
                    inputHandler={inputTitleHandler}
                 />   

                <InputForm 
                    id="picture" 
                    type="text" 
                    labelValue="Picture" 
                    value={state.picture} 
                    inputHandler={inputPictureHandler}
                />

                <InputForm 
                    id="link" 
                    type="textarea" 
                    labelValue="Link" 
                    value={state.link} 
                    inputHandler={inputLinkHandler}
                />

                <InputForm 
                    id="description" 
                    type="text" 
                    labelValue="Description" 
                    value={state.description} 
                    inputHandler={inputDescriptionHandler}
                />
                

                <InputSubmit
                    cta = "C'est parti!!!"
                />
            </form>
        </div>
    );
}
 
export default CreateProject;