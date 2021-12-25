import { Link } from "react-router-dom"
import  React from 'react';
import axios from "axios";
import * as Style from "./parts/Esthete";


const Footer = ({endpoint}) => {
    const [quote, setQuote] = React.useState("Wait..");

    const fetchInspi = () => {
      axios.get(`${endpoint}/inspiration/random`, { crossdomain: true } )
      .then(fancyWords => {
        setQuote(fancyWords.data.quote);
      })
    }
    React.useEffect(() => {
      fetchInspi();
    });


    return ( 
        <Style.StyledFooter>
            <Style.QuoteFooter>{quote}</Style.QuoteFooter>
            <a href="https://www.linkedin.com/in/nasser-massadimi-5b963763/" target="_blank">
              <Style.socialMediaIcon src="linkedin_icon.png" alt="Linkedin icon" />
            </a>
        </Style.StyledFooter>
    );
}
 
export default Footer;