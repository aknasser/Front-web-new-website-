import * as React from 'react';
import InputForm from '../../parts/InputForm';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import { useParams } from 'react-router';



const UpdateProject = ({categorie}) => {
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
            data: {},
            isLoading : false,
            isError :false
        }       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList    // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const fetchExistingEntry = async() => {
              try {
                dispatchModelToUpdate({type: "FETCH_START"});

              
                const objectsFetched = await axios.get(`http://localhost:1993/${categorie}/${id}`, { crossdomain: true })
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
        }, [categorie, id]);




   
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
            picture: modelToUpdate.data.picture,
            link : modelToUpdate.data.link,
            description : modelToUpdate.data.description,
        }
        const ObjectPosted = await axios.post(`http://localhost:1993/${categorie}/update/${id}`, updatedObject)
        console.log(ObjectPosted)
    }
    
    
    return (
        <>
            {modelToUpdate.isError && <p>une erreur dans le fetch de le project à updater</p>}
            {modelToUpdate.isLoading ? (
                <p> Chargement du project à updater</p>
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
                            id="picture" 
                            type="text" 
                            labelValue="Picture" 
                            value={modelToUpdate.data.picture} 
                            inputHandler={inputHandler} 
                        />
        
                        <InputForm 
                            id="link" 
                            type="text" 
                            labelValue="Lien" 
                            value={modelToUpdate.data.link} 
                            inputHandler={inputHandler}
                        />
        
                        <InputForm 
                            id="description" 
                            type="text" 
                            labelValue="Description" 
                            value={modelToUpdate.data.description} 
                            inputHandler={inputHandler}
                        />
                        
                        
        
                        <InputSubmit
                            cta = "Mettre à jour le project"
                        />
                    </form>
                </div>
  
              )}

        </>
    );
}
 
export default UpdateProject;