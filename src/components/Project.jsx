import Picture from "./parts/Picture";

const Project = () => {
    return ( 
        <div>
            <div>
                <h3>Project.categorie</h3>                                             {/* On utilisera array.forEach */}
                <h1>Project.title</h1>
                <h3>Project.sousTitre</h3>
                <Picture imageLink="" imageDescription="project.Pic"/>
            </div>
            <div className="projectContent">
            Project ProjectContentProjectContenProjectContent
            </div>
        </div>
    );
}
 
export default Project;