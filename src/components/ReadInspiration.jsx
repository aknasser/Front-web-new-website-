import * as React from 'react';
import { Link } from 'react-router-dom';

const ReadInspiration = ({inspirations}) => {
    
    
    return (
        <>
            {inspirations.map(inspiration => (
            <div class="list-categorie">
                <span>{inspiration.quote}</span>
                <span>{inspiration.author}</span>
                <Link to={`/admin/project/update/${inspiration._id}`}>
                    <span>Modifier</span>
                </Link>
                <Link to={`/admin/project/delete/${inspiration._id}`}>
                    <span>Supprimer</span>
                </Link>
            </div>
            ))}


        </>
    );
}
 
export default ReadInspiration;