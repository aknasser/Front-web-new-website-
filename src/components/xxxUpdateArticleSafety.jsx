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
          case "FETCH_ERROR":
            return {
              ...state,
              isLoading : false,
              isError : true
            };
          default :
            throw new Error();
      
      
        }
      }
      


    const [articleToUpdate, dispatchArticleToUpdate] = React.useReducer(
        modelReducer,                                    // REDUCER
        {data: [], isLoading : false, isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
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

    const [state, setState] = React.useState({
        title: articleToUpdate.data.title ,
        subtitle : articleToUpdate.data.subtitle,
        heroPicture : articleToUpdate.data.heroPicture,
        keywords : articleToUpdate.data.keywords,
        content :articleToUpdate.data.content
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
        const updatedObject = {
            title: state.title,
            subtitle: state.subtitle,
            heroPicture : state.heroPicture,
            keywords : state.keywords,
            content : state.content,
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
                    <h3>{state.title}</h3>
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
                </div>
  
              )}

        </>
    );
}
 
export default UpdateArticle;