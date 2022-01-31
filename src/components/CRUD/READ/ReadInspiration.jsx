import * as React from 'react';
import { Link } from 'react-router-dom';


const ReadInspiration = ({inspirations}) => {
  



    return (
        <>
            {inspirations.map(inspiration => (
            <div  key={inspiration._id}>
                <span>{inspiration.quote}</span>
                <span>{inspiration.author}</span>
                <Link to={`/admin/inspiration/update/${inspiration._id}`}>
                    <span>Modifier</span>
                </Link>
                <Link to={`/admin/inspiration/delete/${inspiration._id}`}>
                    <span>Supprimer</span>
                </Link>
            </div>
            ))}


        </>
    );
}
 
export default ReadInspiration;