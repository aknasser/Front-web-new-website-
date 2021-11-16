import { useParams } from "react-router";
import Picture from "./parts/Picture";
import * as React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";


const Project = () => {

    const { id } = useParams();

    const tafReducer = (state, action) => {
        switch(action.type) {
          case "TAF_FETCH_START":
            return {
              ...state,
              isLoading : true,
              isError : false
            };
          case "TAF_FETCH_SUCCESS":
            return {
              ...state,
              isLoading : false,
              isError: false,
              data : action.payload
            };
          case "TAF_FETCH_ERROR":
            return {
              ...state,
              isLoading : false,
              isError : true
            };
          default :
            throw new Error();
      
      
        }
      }



    const [taf, dispatchTaf] = React.useReducer(
        tafReducer,                                    // REDUCER
        {data: [], isLoading : false, isError :false}       // INITIAL STATE, data, isLoading et isError sont alors des propriétés de projectList
      );

    React.useEffect(() => {
        const tafMgmt = async() => {
          try {
            dispatchTaf({type: "TAF_FETCH_START"});
  
          
            const allTafs = await axios.get(`http://localhost:1993/project/${id}` , { crossdomain: true })
            dispatchTaf({
              type: "TAF_FETCH_SUCCESS",
              payload : allTafs.data,
            });
              
          } catch {
            dispatchTaf ({
              type: "TAF_FETCH_ERROR"
            })
          }
        }

        tafMgmt();
    }, [id]);


    return ( 
        <div>
            <Link to={taf.data.link}>
                <div>
                    <h1>{taf.data.title}</h1>
                    <Picture imageLink={taf.picture} imageDescription="project.Pic"/>
                </div>
                <div className="projectContent">
                    <h3>{taf.data.description}</h3>                                             
                </div>
            </Link>

        </div>
    );
}
 
export default Project;