import * as React from 'react';
import InputForm from './parts/InputForm';
import InputSubmit from './parts/InputSubmit';
import axios from "axios";
import { useParams } from "react-router";

const UpdateArticle = () => {
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
      


    const [articleToUpdate, dispatchArticleToUpdate] = React.useReducer(
        modelReducer,                                    // REDUCER
        {data: {
            title : "",
            subtitle : "",
            heroPicture : "",
            keywords : "",
            content : "",
        },
        isLoading : false,
        isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const fetchExistingEntry = async() => {
              try {
                dispatchArticleToUpdate({type: "FETCH_START"});

              
                const objectsFetched = await axios.get(`http://localhost:1993/blog/${id}`, { crossdomain: true })
                dispatchArticleToUpdate({
                  type: "FETCH_SUCCESS",
                  payload : objectsFetched.data,
                });
                  
              } catch {
                dispatchArticleToUpdate ({
                  type: "FETCH_ERROR"
                })
              }
            }
    
            fetchExistingEntry();
        }, [id]);




//

   
    const inputHandlerTitle = (event) => {
        dispatchArticleToUpdate({
            type : "UPDATE_INPUT",
            field : event.target.id,
            payload: event.target.value
        })
        console.log(event.target.id)
    };

    
    const submitHandler = async(event) => {
        event.preventDefault();
        console.log("C'est parti")
        const updatedObject = {
            title: articleToUpdate.data.title,
            subtitle: articleToUpdate.data.subtitle,
            heroPicture : articleToUpdate.data.heroPicture,
            keywords : articleToUpdate.data.keywords,
            content : articleToUpdate.data.content,
        }
        const ObjectPosted = await axios.post(`http://localhost:1993/blog/update/${id}`, updatedObject)
        console.log(ObjectPosted)
    }
    
    
    return (
        <>
            {articleToUpdate.isError && <p>une erreur dans le fetch de l'article à updater</p>}
            {articleToUpdate.isLoading ? (
                <p> Chargement de l'article à updater</p>
              ) : (
                <div class="formUpdate">
                <h2>{articleToUpdate.data.title}</h2>
                    <form onSubmit={submitHandler}>
                        <InputForm 
                            id="title" 
                            type="text" 
                            labelValue="Titre" 
                            value={articleToUpdate.data.title} 
                            inputHandler={inputHandlerTitle}
                        />   
        
                        <InputForm 
                            id="subtitle" 
                            type="text" 
                            labelValue="Sous-titre" 
                            value={articleToUpdate.data.subtitle} 
                            inputHandler={inputHandlerTitle} 
                        />
        
                        <InputForm 
                            id="heroPicture" 
                            type="text" 
                            labelValue="Hero Picture" 
                            value={articleToUpdate.data.heroPicture} 
                            inputHandler={inputHandlerTitle}
                        />
        
                        <InputForm 
                            id="keywords" 
                            type="text" 
                            labelValue="Keywords" 
                            value={articleToUpdate.data.keywords} 
                            inputHandler={inputHandlerTitle}
                        />
                        
                        <InputForm 
                            id="content" 
                            type="textarea" 
                            labelValue="Corps de Texte" 
                            value={articleToUpdate.data.content} 
                            inputHandler={inputHandlerTitle}
                        />
                        
        
                        <InputSubmit
                            cta = "Mettre à jour l'article"
                        />
                    </form>
                </div>
  
              )}

        </>
    );
}
 
export default UpdateArticle;