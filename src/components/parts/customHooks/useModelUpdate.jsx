import axios from "axios";
import { useParams } from "react-router";



const useModelUpdate = ({categorie}) => {
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
        {data: {
            title : "",
            subtitle : "",
            heroPicture : "",
            keywords : "",
            content : "",
        },
        isLoading : false,
        isError :false
        }       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const fetchExistingEntry = async() => {
              try {
                dispatchArticleToUpdate({type: "FETCH_START"});

              
                const objectsFetched = await axios.get(`http://localhost:1993/${categorie}/${id}`, { crossdomain: true })
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
    


}
 
export default useModelUpdate;