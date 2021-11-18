import * as React from 'react';

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
            </div>
            ))}


        </>
    );
}
 
export default ReadProspect;