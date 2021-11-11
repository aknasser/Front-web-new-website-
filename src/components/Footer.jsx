import { Link } from "react-router-dom"

const Footer = ({citation}) => {
    return ( 
        <div>
            <h3>Developed and Code by Nasser Massadimi</h3>
            <Link to="">Icône Linkedin</Link>
            <h4>Le saviez-vous ?</h4>
            <h4>{citation}</h4>   {/*Retrieve with API Endpoint sur la collection INspiration */}
        </div>
    );
}
 
export default Footer;