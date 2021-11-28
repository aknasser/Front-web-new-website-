import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import Picture from "./parts/Picture";


const Article = () => {

    const { id } = useParams();  // permet de récupérer la valeur du paramètre utilisée pour arriver surc cette page



    const contentReducer = (state, action) => {
        switch(action.type) {
          case "CONTENT_FETCH_START":
            return {
              ...state,
              isLoading : true,
              isError : false
            };
          case "CONTENT_FETCH_SUCCESS":
            return {
              ...state,
              isLoading : false,
              isError: false,
              data : action.payload
            };
          case "CONTENT_FETCH_ERROR":
            return {
              ...state,
              isLoading : false,
              isError : true
            };
          default :
            throw new Error();
      
      
        }
      }





// REDUCER ARTICLES


const [content, dispatchContent] = React.useReducer(
    contentReducer,
    {data: [], isLoading : false, isError :false}
  );


  React.useEffect( () => {
    const contentManagement = async() => {
      try {
        dispatchContent({type :"CONTENT_FETCH_START"})



        const allArticles = await axios.get(`http://localhost:1993/blog/${id}`, { crossdomain: true })
        await console.log(allArticles);
        dispatchContent({
          type : "CONTENT_FETCH_SUCCESS",
          payload : allArticles.data,
        });

      } catch {
        dispatchContent({type: "CONTENT_FETCH_ERROR"})
      }

    }
    contentManagement();

  }, [id])






    return ( 
        <div>
            <div className="lajauge">La Jauge</div>
            <div>                                       {/* Using CSS and className, we will put a backgroundImage related to the article */}
              <h1>{content.data.keywords}</h1>                {/* We will use array.forEach to get all the array */}
                <h1>{content.data.title}</h1>                                             
                <h3>{content.data.subtitle}</h3>
            </div>
            <div className="articleContent">
                {content.data.content}
            </div>
        </div>
    );
}
 
export default Article;