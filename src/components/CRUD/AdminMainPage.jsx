import { Link } from "react-router-dom";
import PageTitle from "../parts/PageTitle";



const AdminMainPage = ({categories}) => {
    return (  
        <div>
            <PageTitle pageTitle="ESPACE ADMIN" />
            {categories.map((categorie, index) => (
                <Link to={`/admin/${categorie}`} key={index}>
                    <h2>{categorie}</h2>
                </Link>
            ))}
        </div>
    );
}
 
export default AdminMainPage;