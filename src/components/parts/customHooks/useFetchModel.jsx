import * as React from 'react';
import axios from 'axios';



const useFetchModel = (categorie, endpoint) => {

    const modelReducer = (state, action) => {
        switch(action.type) {
          case "FETCH_START":
            return {
              ...state,       // Spread operator : Les propriétés de l'object state restent identiques sauf celles qui suivent (isLoading et isError en l'occurence)
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
      


    const [dataModel, dispatchData] = React.useReducer(
        modelReducer,                                    // REDUCER
        {data: [], isLoading : false, isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const projectMgmt = async() => {
              try {
                dispatchData({type: "FETCH_START"});
      
              
                const objectsFetched = await axios.get(`${endpoint}/${categorie}`, { crossdomain: true })
                dispatchData({
                  type: "FETCH_SUCCESS",
                  payload : objectsFetched.data,
                });
                  
              } catch {
                dispatchData ({
                  type: "FETCH_ERROR"
                })
              }
            }
    
          projectMgmt();
        }, [categorie, endpoint]);

    return [dataModel, dispatchData];
}


export default useFetchModel;