import { Link } from "react-router-dom"
import  React from 'react';
import axios from "axios";


const Footer = () => {
    const [quote, setQuote] = React.useState("Wait..");

    const fetchInspi = () => {
      axios.get("http://localhost:1993/inspiration/random", { crossdomain: true } )
      .then(fancyWords => {
        setQuote(fancyWords.data.quote);
        console.log(quote);
      })
    }
    React.useEffect(() => {
      fetchInspi();
    });


    return ( 
        <div>
            <h4>Developed and Code by Nasser Massadimi</h4>
            <Link to="">Icône Linkedin</Link>
            <h5>{quote}</h5>
        </div>
    );
}
 
export default Footer;