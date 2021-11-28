import * as React from 'react';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import InputForm from '../../parts/InputForm';


const CreateArticle = () => {
    
    const [state, setState] = React.useState({
        title: "",
        subtitle :"",
        heroPicture :"",
        keywords : "",
        content :""
    });

    
    const inputHandlerTitle = (event) => {
        setState(state => ({
            ...state,
            title : event.target.value
        }))
    };

    const inputHandlerSubtitle = (event) => {
        setState(state => ({
            ...state,
            subtitle : event.target.value
         }))
    };

    const inputHandlerHeroPicture = (event) => {
        setState(state => ({
            ...state,
            heroPicture : event.target.value
         }))
    };

    const inputHandlerKeywords = (event) => {
        setState(state => ({
            ...state,
            keywords : event.target.value
         }))
    };

    const inputHandlerContent = (event) => {
        setState(state => ({
            ...state,
            content : event.target.value
         }))
    };
    


    const submitHandler = async(event) => {
        event.preventDefault();
        console.log("C'est parti")
        const newObject = {
            title: state.title,
            subtitle: state.subtitle,
            heroPicture : state.heroPicture,
            keywords : state.keywords,
            content : state.content,
        }
        const ObjectPosted = await axios.post("http://localhost:1993/blog/create", newObject)
        console.log(ObjectPosted)
    }
    
    
    return (
        <>
            <form onSubmit={submitHandler}>
                <InputForm 
                    id="title" 
                    type="text" 
                    labelValue="Titre" 
                    value={state.title} 
                    inputHandler={inputHandlerTitle}
                 />   

                <InputForm 
                    id="subtitle" 
                    type="text" 
                    labelValue="Sous-titre" 
                    value={state.subtitle} 
                    inputHandler={inputHandlerSubtitle} 
                />

                <InputForm 
                    id="heroPicture" 
                    type="text" 
                    labelValue="Hero Picture" 
                    value={state.heroPicture} 
                    inputHandler={inputHandlerHeroPicture}
                />

                <InputForm 
                    id="keywords" 
                    type="text" 
                    labelValue="Keywords" 
                    value={state.keywords} 
                    inputHandler={inputHandlerKeywords}
                />
                
                <InputForm 
                    id="content" 
                    type="textarea" 
                    labelValue="Corps de Texte" 
                    value={state.content} 
                    inputHandler={inputHandlerContent}
                />


                <InputSubmit
                    cta = "Nouvel Article"
                />
            </form>
        </>
    );
}
 
export default CreateArticle;