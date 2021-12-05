import  * as Style from "./Esthete";
import PictureItem from "./PictureItem";
import SectionTitle from "./SectionTitle";





const ItemProject = ({title, description,picture, pictureAlt}) => {
    return (
        <div>
            <SectionTitle sectionTitle ={title} />
            <Style.Intro>{description}</Style.Intro>
            <PictureItem imageLink={picture} imageDescription={pictureAlt}/>
        </div>

     );
}
 



export default ItemProject;