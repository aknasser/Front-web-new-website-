import * as React from 'react';
import InputForm from '../../parts/InputForm';
import InputSubmit from '../../parts/InputSubmit';
import axios from "axios";
import { useParams } from 'react-router';



const UpdateProspect = ({categorie, endpoint}) => {
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
            prenom: modelToUpdate.data.prenom,
            nom: modelToUpdate.data.nom,
            demande : modelToUpdate.data.demande,
            email : modelToUpdate.data.email,
        }
        const ObjectPosted = await axios.post(`${endpoint}/${categorie}/update/${id}`, updatedObject)
        console.log("BDD updaté");
        window.location.href = "/admin/prospect/all"   // Redirect the admin towards the page with all the entries.
    }
    
    
    return (
        <>
            {modelToUpdate.isError && <p>une erreur dans le fetch du prospect à updater</p>}
            {modelToUpdate.isLoading ? (
                <p> Chargement du prospect à updater</p>
              ) : (
                <div class="formUpdate">
                <h2>{modelToUpdate.data.name}</h2>
                    <form onSubmit={submitHandler}>
                        <InputForm 
                            id="prenom" 
                            type="text" 
                            labelValue="Prenom" 
                            value={modelToUpdate.data.prenom} 
                            inputHandler={inputHandler}
                        />   
        
                        <InputForm 
                            id="nom" 
                            type="text" 
                            labelValue="Nom" 
                            value={modelToUpdate.data.nom} 
                            inputHandler={inputHandler} 
                        />
        
                        <InputForm 
                            id="demande" 
                            type="text" 
                            labelValue="Demande" 
                            value={modelToUpdate.data.demande} 
                            inputHandler={inputHandler}
                        />
               
                        <InputForm 
                            id="email" 
                            type="email" 
                            labelValue="Email" 
                            value={modelToUpdate.data.email} 
                            inputHandler={inputHandler}
                        />
                        
                        
        
                        <InputSubmit
                            cta = "Mettre à jour le prospect"
                        />
                    </form>
                </div>
  
              )}

        </>
    );
}
 
export default UpdateProspect;