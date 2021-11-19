import { Link } from "react-router-dom";
import { useParams } from "react-router";




const CategorieMenu = () => {

    const { categorie } = useParams();
    return ( 
        <div>
        <Link to={`/admin/${categorie}/create`}>
            <h2>Ajouter {categorie}</h2>
        </Link>
        <Link to={`/admin/${categorie}/all`}>
            <h2>Ensemble des {`${categorie}s`} </h2>
        </Link>
    </div>
     );
}
 
export default CategorieMenu;