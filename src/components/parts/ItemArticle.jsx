import Picture from "./Picture";
import SectionTitle from "./SectionTitle";

const ItemArticle = ({title, subtitle,heroPicture}) => {
    return (
        <div>
                <SectionTitle sectionTitle ={title}/>
                <p>{subtitle}</p>
                <Picture imageLink={heroPicture} imageDescription="L'image correspondant à l'article"/>
        </div>
    );
}

export default ItemArticle;