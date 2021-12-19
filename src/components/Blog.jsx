
import { Link } from "react-router-dom"
import ItemArticle from "./parts/ItemArticle";
import  * as Style from './parts/Esthete';
import * as React from 'react';
import axios from "axios";


const searchReducer = (state, action) => {
    switch (action.type) {
        case ("FETCH_START") :
            return {
                ...state, // CORRECTION DONE (13/12/21 vers midi. Depuis cela fonctionne)
                isLoading: true,
                isError: false,
            };
        case ("FETCH_SUCCESS") :
            return {
                ...state,
                data : action.payload,
                isLoading: false,
                isError: false,
            };
        case ("FETCH_ERROR") :
            return {
                ...state,
                isLoading: false,
                isError: true,
            };  
        case ("RESET") :
            return {
                ...state,
                data : action.payload,
                isLoading: false,
                isError: false,
            };  
        default :
            throw new Error();  
    }
}




const Blog = ({articles, endpoint}) => {
    
    const SEARCH_ENDPOINT = `${endpoint}/blog/search/`


    const [filter, setFilter] = React.useState("")

    const [url, setUrl] = React.useState(`${SEARCH_ENDPOINT}${filter}`);

    const searchHandler = async(event) => {
        setFilter(event.target.value);  // to update the value of searchWords when the user type something.
      };

    const submitHandler = (event) => {
        setUrl(`${SEARCH_ENDPOINT}${filter}`);
        event.preventDefault();
    };

    const resetHandler = (event) => {
        setFilter("");
        dispatchSearchArticles({
            type : "RESET",
            payload : articles,
        })
        event.preventDefault();
        console.log(SEARCH_ENDPOINT)
    }

    const [searchedArticles, dispatchSearchArticles] = React.useReducer(
        searchReducer,
        { data: articles, isLoading: false, isError: false }
        );






    React.useEffect (() => {
        const fetchSearchedWords = async() => {
            try {
                dispatchSearchArticles({type : "FETCH_START"});
                const articlesToFetch =  await axios.get(url, { crossdomain: true } )
                console.log(articlesToFetch.data);
                await dispatchSearchArticles({
                    type : "FETCH_SUCCESS",
                    payload: articlesToFetch.data,
                })
                console.log(searchedArticles.data);

            } catch {
                dispatchSearchArticles({type : "FETCH_ERROR"})
            }
        }
        fetchSearchedWords();
    }, [url]);





    return (
        <Style.BG>                                 
            <Style.TitleSection>Le Blog</Style.TitleSection> 
{/*             <Style.ChapeauBlog>Mes conseils pour trouver des clients et aussi quelques réflexions.</Style.ChapeauBlog>
 */}
        <div className="filter">
                <Style.FormSearch >
                    <label for="filtre">Filtrer par thème</label>
                    <Style.InputFormSearch id="filtre" type="text"value={filter} onChange={searchHandler}/>
                    <Style.BoxSearchButton>
                        <Style.ButtonSearchBlog type ="submit" value = "Chercher" onClick={submitHandler} />
                        <Style.ButtonSearchBlog type ="submit" value = "Réinitialiser" onClick={resetHandler}  />
                    </Style.BoxSearchButton>


                </Style.FormSearch>
        </div>
        
            {searchedArticles.data.map(article => (
                <Link to={`/article/${article._id}`}>
                    <ItemArticle
                        key = {article._id}
                        title = {article.title}
                        subtitle = {article.subtitle}
                        heroPicture = {article.heroPicture}
                     />
                </Link>
            ))}
        </Style.BG>
    );
}
 
export default Blog;