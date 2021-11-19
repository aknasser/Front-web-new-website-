import * as React from 'react';
import InputForm from './parts/InputForm';
import InputSubmit from './parts/InputSubmit';
import axios from "axios";


const CreateArticle = () => {
    
    const [titleValue , setTitleValue ] = React.useState("")
    const [subtitleValue , setSubtitleValue ] = React.useState("")
    const [heroPictureValue , setHeroPictureValue ] = React.useState("")
    const [keywordsValue , ssetKeywordsValue ] = React.useState("")
    const [contentValue , setContentValue ] = React.useState("")

    
    const inputHandlerTitle = (event) => {
        setTitleValue(event.target.value)
    }

    const inputHandlerSubtitle = (event) => {
        setSubtitleValue(event.target.value)
    }

    const inputHandlerHeroPicture = (event) => {
        setHeroPictureValue(event.target.value)
    }

    const inputHandlerKeywords = (event) => {
        ssetKeywordsValue(event.target.value)
    }

    const inputHandlerContent = (event) => {
        setContentValue(event.target.value)
    }
    


    const submitHandler = async(event) => {
        event.preventDefault();
        console.log("C'est parti")
        const newObject = {
            title: titleValue,
            subtitle: subtitleValue,
            heroPicture : heroPictureValue,
            keywords : keywordsValue,
            content : contentValue,
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
                    value={titleValue} 
                    inputHandler={inputHandlerTitle}
                 />   

                <InputForm 
                    id="subtitle" 
                    type="text" 
                    labelValue="Sous-titre" 
                    value={subtitleValue} 
                    inputHandler={inputHandlerSubtitle} 
                />

                <InputForm 
                    id="heroPicture" 
                    type="text" 
                    labelValue="Hero Picture" 
                    value={heroPictureValue} 
                    inputHandler={inputHandlerHeroPicture}
                />

                <InputForm 
                    id="keywords" 
                    type="text" 
                    labelValue="Keywords" 
                    value={keywordsValue} 
                    inputHandler={inputHandlerKeywords}
                />
                
                <InputForm 
                    id="content" 
                    type="textarea" 
                    labelValue="Corps de Texte" 
                    value={contentValue} 
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