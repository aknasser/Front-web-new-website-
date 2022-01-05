import React, { useRef } from 'react';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import InputForm from '../../parts/InputForm';
import { Editor } from '@tinymce/tinymce-react';


const CreateArticle = ({endpoint}) => {
    const [state, setState] = React.useState({
        title: "",
        subtitle :"",
        heroPicture :"",
        keywords : "",
        content :"Nouvel article"
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

    const inputHandlerContent = (content, editor) => {
        console.log(content)
        setState(state => ({
            ...state,
            content : content
         }))
    };
    


    const submitHandler = async(event) => {
        event.preventDefault();
        console.log("C'est parti")

        try {
            const newObject = {
                title: state.title,
                subtitle: state.subtitle,
                heroPicture : state.heroPicture,
                keywords : state.keywords,
                content : state.content,
            }
            // eslint-disable-next-line
            const ObjectPosted = await axios.post(`${endpoint}/blog/create`, newObject); // We HAVE to FIX that log error : Failed to load resource: net::ERR_EMPTY_RESPONSE
            console.log("new entry in the DB");
            window.location.href = "/admin/article/all"   // Redirect the admin towards the page with all the entries.

        } catch (err) {
            throw new Error('Unable to post')
        }

    }






    const editorRef = useRef(null); // We need that to make TinyMCE Work
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
                
                <Editor
                    id = "newContent"
                    onInit={(evt, editor) => editorRef.current = editor}
                    value= {state.content}
                    onEditorChange = {inputHandlerContent}
                    apiKey = "8gyjsp9hibfm2zts18s1o26nyh42lq528iufe3qt0pbd3atb"
                    init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                    'bold italic backcolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />

                <InputSubmit
                     cta = "Nouvel Article"
                />

            </form>


        

        </>
      );

   
}
 
export default CreateArticle;