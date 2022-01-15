import  React from 'react';
import axios from "axios";
import * as Style from "./parts/Esthete";


const Footer = ({endpoint}) => {


  const inspirationReducer = (state, action) => {
    switch (action.type) {
      case "QUOTE_FETCH_START": 
        return {
          ...state,
          isLoading : true,
          isError : false,
        };
      case "QUOTE_FETCH_SUCCESS": 
        return {
          ...state,
          isLoading : false,
          isError : false,
          data : action.payload
        };
      case "QUOTE_FETCH_ERROR": 
        return {
          ...state,
          isLoading : false,
          isError : true,
        };
      default :
        throw new Error("Problème avec la citation et son reducer");

    }
  };

    const [inspiration, dispatchInspiration] = React.useReducer(
      inspirationReducer,
      { data : {}, isLoading : true, isError : false }          // I start with isLoading : true.  the fetch is super fast but before it starts there is a blank space. With isLoading : true in the initialState, we make sure that there is a loading message instead of a blank space at the beginning.
    );




    const fetchInspi = async() => {
      const fancyWords = await axios.get(`${endpoint}/inspiration/random`, { crossdomain: true } )
      dispatchInspiration({
        type : "QUOTE_FETCH_SUCCESS",
        payload : fancyWords.data
      });

    }

    
    React.useEffect(() => {
      
      fetchInspi();
      // eslint-disable-next-line
    }, [endpoint]);


    return ( 
        <Style.StyledFooter>
            {inspiration.isLoading ? <Style.QuoteFooter>Chargement</Style.QuoteFooter> : 
            <div>
              <Style.QuoteFooter>
                {inspiration.data.quote}  
              </Style.QuoteFooter>
              <Style.AuthorFooter>
                {inspiration.data.author}
              </Style.AuthorFooter>
            </div>
            }
            {inspiration.isError && <p>Un erreur dans le chargement des quote</p>}
            <a href="https://www.linkedin.com/in/nasser-massadimi-5b963763/" rel="noreferrer" target="_blank" >
              <Style.SocialMediaIcon src="linkedin_icon.png" alt="Linkedin icon" />
            </a>
        </Style.StyledFooter>
    );
}
 
export default Footer;