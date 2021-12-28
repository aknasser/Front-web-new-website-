import * as React from 'react';
import InputForm from '../../parts/InputForm';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import { useParams } from 'react-router';



const UpdateInspiration = ({categorie, endpoint}) => {
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
            data : {},
            isLoading : false,
            isError :false
        }       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const fetchExistingEntry = async() => {
              try {
                dispatchModelToUpdate({type: "FETCH_START"});

              
                const objectsFetched = await axios.get(`${endpoint}/${categorie}/update/${id}`, { crossdomain: true })
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
            quote: modelToUpdate.data.quote,
            author: modelToUpdate.data.author,
        }
        const ObjectPosted = await axios.post(`${endpoint}/${categorie}/update/${id}`, updatedObject)
        console.log("BDD updaté")
        window.location.href = "/admin/inspiration/all"   // Redirect the admin towards the page with all the entries.
    }
    
    
    return (
        <>
            {modelToUpdate.isError && <p>une erreur dans le fetch de la citation à updater</p>}
            {modelToUpdate.isLoading ? (
                <p> Chargement de la citation à updater</p>
              ) : (
                <div class="formUpdate">
                <h2>{modelToUpdate.data.author}</h2>
                    <form onSubmit={submitHandler}>
                        <InputForm 
                            id="quote" 
                            type="text" 
                            labelValue="Citation" 
                            value={modelToUpdate.data.quote} 
                            inputHandler={inputHandler}
                        />   
        
                        <InputForm 
                            id="author" 
                            type="text" 
                            labelValue="Auteur" 
                            value={modelToUpdate.data.author} 
                            inputHandler={inputHandler} 
                        />
        
                        
        
                        <InputSubmit
                            cta = "Mettre à jour la citation"
                        />
                    </form>
                </div>
  
              )}

        </>
    );
}
 
export default UpdateInspiration;