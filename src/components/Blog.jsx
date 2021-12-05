
import InputForm from "./parts/InputForm";
import { Link } from "react-router-dom"
import ItemArticle from "./parts/ItemArticle";
import  * as Style from './parts/Esthete';


const Blog = ({articles}) => {
    
    return (
        <Style.BG>                                 
            <Style.TitleSection>Le Blog</Style.TitleSection> 
{/*             <Style.ChapeauBlog>Mes conseils pour trouver des clients et aussi quelques réflexions.</Style.ChapeauBlog>
 */}            <div className="filter">
                <form>
                    <InputForm id="filtre" type="text" labelValue="Filtrer par Thème" value=""/>
                    <Style.InputSearchBlog type ="submit" value = "Chercher"/>
                </form>
            </div>
            {articles.map(article => (
                <Link to={`/article/${article._id}`}>
                    <ItemArticle
                        key = {article._id}
                        title = {article.title}
                        subtitle = {article.subtitle}
                        heroPicture = {article.heroPicture}
                     />
                </Link>

            ))}
        </Style.BG>
    );
}
 
export default Blog;