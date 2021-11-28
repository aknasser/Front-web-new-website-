import * as React from 'react';
import { Link } from 'react-router-dom';


const ReadProject = ({projects}) => {
    
    
    return (
        <>
            {projects.map(project => (
            <div class="list-categorie">
                <span>{project.title}</span>
                <span>{project.picture}</span>
                <span>{project.link}</span>
                <span>{project.description}</span>
                <Link to={`/admin/project/update/${project._id}`}>
                    <span>Modifier</span>
                </Link>
                <Link to={`/admin/project/delete/${project._id}`}>
                    <span>Supprimer</span>
                </Link>
            </div>
            ))}


        </>
    );
}
 
export default ReadProject;