import  React from 'react';
import PageTitle from "./parts/PageTitle";
import { Link } from "react-router-dom"
import ItemProject from './parts/ItemProject';



const ProjectList = ({projets}) => {


    return ( 
        <div>                                 {/* On utilisera array.map pour balayer l'ensemble des objects facilement */}
            <PageTitle pageTitle="Mes Projets"/>
            {projets.map(projet => (
            <Link to={`/project/${projet._id}`}>
      
                    <ItemProject
                        key={projet._id}
                        title={projet.title}
                        description={projet.description}
                        picture={projet.picture}
                        pictureAlt={projet.link}
                    />
            </Link>
    ))}
        </div>
    );
}
 
export default ProjectList;