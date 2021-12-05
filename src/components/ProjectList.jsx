/* import { Colors } from '../App';
 */import  React from 'react';
import ItemProject from './parts/ItemProject';
import  * as Style from './parts/Esthete';





const ProjectList = ({projets}) => {


    return ( 
        <Style.BG>                                 {/* On utilisera array.map pour balayer l'ensemble des objects facilement */}
            <Style.TitleSection>Mes Projets</Style.TitleSection>
            {projets.map(projet => (
            <a href={`${projet.link}`} target="_blank">
      
                    <ItemProject
                        key={projet._id}
                        title={projet.title}
                        description={projet.description}
                        picture={projet.picture}
                        pictureAlt={projet.link}
                    />
            </a>
    ))}
        </Style.BG>
    );
}
 

export default ProjectList;
