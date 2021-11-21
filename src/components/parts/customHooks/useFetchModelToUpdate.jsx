import * as React from 'react';
import axios from 'axios';





const useFetchModelToUpdate = (categorie) => {




    const modelReducer = (state, action) => {
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
      


    const [dataModel, dispatchData] = React.useReducer(
        modelReducer,                                    // REDUCER
        {data: [], isLoading : false, isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const projectMgmt = async() => {
              try {
                dispatchData({type: "FETCH_START"});

              
                const objectsFetched = await axios.get(`http://localhost:1993/${categorie}/6187294f9a5efcfcaa8b2aec`, { crossdomain: true })
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
        }, [categorie]);

    return [dataModel, dispatchData];
}


export default useFetchModelToUpdate;