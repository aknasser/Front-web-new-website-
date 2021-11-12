import { Link } from "react-router-dom"
import  React from 'react';
import axios from "axios";


const Footer = () => {
    const [quote, setQuote] = React.useState("Wait..");

    const fetchInspi = () => {
      axios.get("http://localhost:1993/inspiration", { crossdomain: true } )
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
            <h3>Developed and Code by Nasser Massadimi</h3>
            <Link to="">Icône Linkedin</Link>
            <h4>Le saviez-vous ?</h4>
            <h4>{quote}</h4>   {/*Retrieve with API Endpoint sur la collection INspiration */}
        </div>
    );
}
 
export default Footer;