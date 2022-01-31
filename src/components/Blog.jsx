
import { Link } from "react-router-dom"
import ItemArticle from "./parts/ItemArticle";
import  * as Style from './parts/Esthete';
import * as React from 'react';
import axios from "axios";


const searchReducer = (state, action) => {
    switch (action.type) {
        case ("FETCH_START") :
            return {
                ...state,
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
    

    const [filter, setFilter] = React.useState("")
    const [url, setUrl] = React.useState("");
 


    const ALL_ARTICLES_ENDPOINT = `${endpoint}/blog`
    const SEARCH_ENDPOINT = `${endpoint}/blog/search`



    const searchHandler = async(event) => {
        setFilter(event.target.value);  // to update the value of searchWords when the user type something.
      };

     const submitHandler = (event) => {
        setUrl(`${SEARCH_ENDPOINT}/${filter}`);
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



// This useEffect, GET all the articles, it's triggered when the component is mounted, at the beginning.

React.useEffect (() => {
    const fetchAllArticles = async() => {
        try {
            console.log("bonjour la Terre!")
            dispatchSearchArticles({type : "FETCH_START"});
            const Allarticles =  await axios.get(ALL_ARTICLES_ENDPOINT, { crossdomain: true } )
            console.log("All articles, let's go!");
            dispatchSearchArticles({
                type : "FETCH_SUCCESS",
                payload: Allarticles.data,
            })

        } catch {
            console.log("OH SHIIIIIIIIIIIIIIIIIIIIIT!!!!!!!!!!!!!")
            dispatchSearchArticles({type : "FETCH_ERROR"})
                
        }
    }
    fetchAllArticles();
// eslint-disable-next-line
}, []);


// This useEffect, GET the searched articles, it'striggered when the value of filter changes.


     React.useEffect (() => {
        const fetchSearchedWords = async() => {
            try {
                console.log("bonjour la Terre!")
                dispatchSearchArticles({type : "FETCH_START"});
                const articlesToSearch =  await axios.get(url, { crossdomain: true } )
                console.log("fetch searched articles");
                dispatchSearchArticles({
                    type : "FETCH_SUCCESS",
                    payload: articlesToSearch.data,
                })
                console.log(searchedArticles.data);

            } catch {
                console.log("OH SHIIIIIIIIIIIIIIIIIIIIIT!!!!!!!!!!!!!")
                dispatchSearchArticles({type : "FETCH_ERROR"})
                
            }
        }
        fetchSearchedWords();
    // eslint-disable-next-line
    }, [url]); 





    return (
        <Style.BG>                                 
            <Style.TitleSection>Le Blog</Style.TitleSection> 
{/*             <Style.ChapeauBlog>Mes conseils pour trouver des clients et aussi quelques réflexions.</Style.ChapeauBlog>
 */}
        <div className="filter">
                <Style.FormSearch >
                    <label htmlFor="filtre">Filtrer par thème</label>
                    <Style.InputFormSearch id="filtre" type="text"value={filter} onChange={searchHandler}/>
                    <Style.BoxSearchButton>
                        <Style.ButtonSearchBlog type ="submit" value = "Chercher"  onClick={submitHandler}  />
                        <Style.ButtonSearchBlog type ="submit" value = "Réinitialiser" onClick={resetHandler}  />
                    </Style.BoxSearchButton>
                </Style.FormSearch>
        </div>
        
            {searchedArticles.data.map(article => (
                <Link to={`/article/${article._id}`} key = {article._id}>
                    <ItemArticle    
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