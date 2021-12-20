import * as React from 'react';
import InputForm from '../../parts/InputForm';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import { useParams } from 'react-router';



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
        }, [categorie , id]);




   
    const inputHandler = (event) => {
        dispatchModelToUpdate({
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
            title: modelToUpdate.data.title,
            subtitle: modelToUpdate.data.subtitle,
            heroPicture : modelToUpdate.data.heroPicture,
            keywords : modelToUpdate.data.keywords,
            content : modelToUpdate.data.content,
        }
        const ObjectPosted = await axios.post(`${endpoint}/${categorie}/update/${id}`, updatedObject)
        console.log(ObjectPosted)
    }
    
    
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
                        
                        <InputForm 
                            id="content" 
                            type="textarea" 
                            labelValue="Corps de Texte" 
                            value={modelToUpdate.data.content} 
                            inputHandler={inputHandler}
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