import * as React from 'react';
import { Link } from 'react-router-dom';

const ReadProspect = ({prospects}) => {
    
    
    return (
        <>
            {prospects.map(prospect => (
            <div class="list-categorie">
                <span>{prospect.prenom}</span>
                <span>{prospect.nom}</span>
                <span>{prospect.demande}</span>
                <span>{prospect.activite}</span>
                <span>{prospect.numero}</span>
                <span>{prospect.email}</span>
                <Link to={`/admin/project/update/${prospect._id}`}>
                    <span>Modifier</span>
                </Link>
                <Link to={`/admin/project/delete/${prospect._id}`}>
                    <span>Supprimer</span>
                </Link>
            </div>
            ))}


        </>
    );
}
 
export default ReadProspect;