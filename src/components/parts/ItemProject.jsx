import Picture from "./Picture";
import SectionTitle from "./SectionTitle";


const ItemProject = ({title, description,picture, pictureAlt}) => {
    return (
        <div>
            <SectionTitle sectionTitle ={title}/>
            <p>{description}</p>
            <Picture imageLink={picture} imageDescription={pictureAlt}/>
        </div>

     );
}
 
export default ItemProject;