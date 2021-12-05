import axios from "axios";
import React from "react";
import { useParams } from "react-router";
import * as Style from "./parts/Esthete";


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
            <Style.ReadingProgressionBar>""</Style.ReadingProgressionBar>
            
            <Style.ArticlePicture>
              <Style.FilteredPicture src={`/articles/${content.data.heroPicture}`} opacity="0.5" />
              <Style.InfoArticle>
                <Style.BlocKeywords>
                  <Style.KeywordsArticle>{content.data.keywords}</Style.KeywordsArticle>                
                </Style.BlocKeywords>
                <Style.ArticleTitle>{content.data.title}</Style.ArticleTitle>                                             
                <Style.Intro>{content.data.subtitle}</Style.Intro>
              </Style.InfoArticle>

            </Style.ArticlePicture>
            <Style.ContentArticle>
                {content.data.content}
            </Style.ContentArticle>
        </div>
    );
}
 
export default Article;