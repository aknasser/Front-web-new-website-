import PageTitle from "./parts/PageTitle";
import SectionTitle from "./parts/SectionTitle";
import Picture from "./parts/Picture";
import { Link } from "react-router-dom"



const ProjectList = () => {
    return ( 
        <div>                                 {/* On utilisera array.map pour balayer l'ensemble des objects facilement */}
            <PageTitle pageTitle="Mes Projets"/>
            <Link to="/project">
                <SectionTitle sectionTitle ="Projet1"/>
                <p>{/* {descriptionProject} */}Description du Projet</p>
                <Picture imageLink="" imageDescription="L'image correspondant au projet"/>
            </Link>

        </div>
    );
}
 
export default ProjectList;