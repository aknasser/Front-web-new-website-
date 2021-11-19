import * as React from 'react';

const ReadProject = ({projects}) => {
    
    
    return (
        <>
            {projects.map(project => (
            <div class="list-categorie">
                <span>{project.title}</span>
                <span>{project.picture}</span>
                <span>{project.link}</span>
                <span>{project.description}</span>
            </div>
            ))}


        </>
    );
}
 
export default ReadProject;