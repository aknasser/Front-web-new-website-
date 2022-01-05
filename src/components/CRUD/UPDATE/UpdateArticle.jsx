import React, { useRef } from 'react';
import InputForm from '../../parts/InputForm';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import { useParams } from 'react-router';
import { Editor } from '@tinymce/tinymce-react';




const UpdateArticle = ({categorie, endpoint}) => {
    const { id } = useParams();



    const  modelReducer = (state, action) => {
        switch(action.type) {
            case "FETCH_START":
                return {
                ...state,
                isLoading : true,
                isError : false
            };
            case "FETCH_SUCCESS":
                return {
                ...state,
                isLoading : false,
                isError: false,
                data : action.payload
                };
            case "UPDATE_INPUT":
                return {
                  ...state,             
                  data : {
                      ...state.data,                     // "conserve l'ensemble de tes données  SAUF POUR...
                      [action.field] : action.payload            // ...cette propriété que update "
                  }
                };
            case "UPDATE_CONTENT":
                return {
                  ...state,             
                  data : {
                      ...state.data,                     // "conserve l'ensemble de tes données  SAUF POUR...
                      content : action.payload            // ...cette propriété que update "
                  }
                };
            case "FETCH_ERROR":
                return {
                ...state,
                isLoading : false,
                isError : true
                };
            default :
                throw new Error("Action non prévue");
      
      
        }
      }
      


    const [modelToUpdate, dispatchModelToUpdate] = React.useReducer(
        modelReducer,                                    // REDUCER
        {
            data: 
                {},
        isLoading : false,
        isError :false
        }       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const fetchExistingEntry = async() => {
              try {
                dispatchModelToUpdate({type: "FETCH_START"});

              
                const objectsFetched = await axios.get(`${endpoint}/${categorie}/${id}`, { crossdomain: true })
                dispatchModelToUpdate({
                  type: "FETCH_SUCCESS",
                  payload : objectsFetched.data,
                });
                  
              } catch {
                dispatchModelToUpdate ({
                  type: "FETCH_ERROR"
                })
              }
            }
    
            fetchExistingEntry();
        }, [endpoint, categorie , id]);




   
    const inputHandler = (event) => {
        dispatchModelToUpdate({
            type : "UPDATE_INPUT",
            field : event.target.id,
            payload: event.target.value
        })
        console.log(event.target.id)
    };

    const contentHandler = (content, editor) => {
        dispatchModelToUpdate({
            type: "UPDATE_CONTENT",
            payload : content,
        })
        console.log(`content updaté : ${content}`);
    };


    const submitHandler = async(event) => {
        event.preventDefault();
        try {
            console.log("C'est parti")
            const updatedObject = {
                title: modelToUpdate.data.title,
                subtitle: modelToUpdate.data.subtitle,
                heroPicture : modelToUpdate.data.heroPicture,
                keywords : modelToUpdate.data.keywords,
                content : modelToUpdate.data.content,
            }
            console.log(updatedObject);

            // eslint-disable-next-line
            const ObjectPosted = await axios.post(`${endpoint}/${categorie}/update/${id}`, updatedObject);
            
            console.log("BDD updaté");
            window.location.href = "/admin/article/all"   // Redirect the admin towards the page with all the entries.
     
        } catch (err) {
            throw new Error(`Unable to post: ${err}`)
        }
   };
    
    const editorRef = useRef(null); // We need that to make TinyMCE Work

    return (
        <>
            {modelToUpdate.isError && <p>une erreur dans le fetch de l'article à updater</p>}
            {modelToUpdate.isLoading ? (
                <p> Chargement de l'article à updater</p>
              ) : (
                <div class="formUpdate">
                <h2>{modelToUpdate.data.title}</h2>
                    <form onSubmit={submitHandler}>
                        <InputForm 
                            id="title" 
                            type="text" 
                            labelValue="Titre" 
                            value={modelToUpdate.data.title} 
                            inputHandler={inputHandler}
                        />   
        
                        <InputForm 
                            id="subtitle" 
                            type="text" 
                            labelValue="Sous-titre" 
                            value={modelToUpdate.data.subtitle} 
                            inputHandler={inputHandler} 
                        />
        
                        <InputForm 
                            id="heroPicture" 
                            type="text" 
                            labelValue="Hero Picture" 
                            value={modelToUpdate.data.heroPicture} 
                            inputHandler={inputHandler}
                        />
        
                        <InputForm 
                            id="keywords" 
                            type="text" 
                            labelValue="Keywords" 
                            value={modelToUpdate.data.keywords} 
                            inputHandler={inputHandler}
                        />
                        

                        <Editor
                            id = "content"
                            onInit={(evt, editor) => editorRef.current = editor}
                            value= {modelToUpdate.data.content}
                            onEditorChange = {contentHandler}
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
                            cta = "Mettre à Jour"
                        />

                    </form>
                </div>
  
              )}

        </>
    );
}
 
export default UpdateArticle;