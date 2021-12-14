import { Link } from "react-router-dom"
import  React from 'react';
import axios from "axios";
import * as Style from "./parts/Esthete";


const Footer = () => {
    const [quote, setQuote] = React.useState("Wait..");

    const fetchInspi = () => {
      axios.get("http://localhost:1993/inspiration/random", { crossdomain: true } )
      .then(fancyWords => {
        setQuote(fancyWords.data.quote);
      })
    }
    React.useEffect(() => {
      fetchInspi();
    });


    return ( 
        <Style.StyledFooter>
            <Style.PrezFooter>Design and Code made by Nasser Massadimi</Style.PrezFooter>
            <Style.QuoteFooter>{quote}</Style.QuoteFooter>
            <Link to="">Icône Linkedin</Link>
        </Style.StyledFooter>
    );
}
 
export default Footer;