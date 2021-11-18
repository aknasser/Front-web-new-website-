import * as React from 'react';



const useFetchModel = (categorie) => {

    const [dataModel, dispatchData] = React.useReducer(
        projectsReducer,                                    // REDUCER
        {data: [], isLoading : false, isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );
    
    
         React.useEffect(() => {
            const projectMgmt = async() => {
              try {
                dispatchData({type: "FETCH_START"});
      
              
                const allObjects = await axios.get(`http://localhost:1993/${categorie}`, { crossdomain: true })
                dispatchData({
                  type: "FETCH_SUCCESS",
                  payload : allObjects.data,
                });
                  
              } catch {
                dispatchData ({
                  type: "FETCH_ERROR"
                })
              }
            }
    
          projectMgmt();
        }, []);

    return [dataModel, dispatchData];
}

