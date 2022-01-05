import  * as Style from "./Esthete";
import PictureItem from "./PictureItem";

const ItemArticle = ({title, subtitle,heroPicture}) => {
    return (
        <div>
                <Style.StyledArticleTitle>{title}</Style.StyledArticleTitle>
                <Style.Intro>{subtitle}</Style.Intro>
                <PictureItem imageLink={`articles/${heroPicture}`} imageDescription="L'image correspondant à l'article"/>
        </div>
    );
}

export default ItemArticle;