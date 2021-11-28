import PageTitle from "./parts/PageTitle";
import InputForm from "./parts/InputForm";
import { Link } from "react-router-dom"
import ItemArticle from "./parts/ItemArticle";



const Blog = ({articles}) => {
    
    return (
        <div>                                 
            <PageTitle pageTitle="Le Blog"/>
            <h3>Mes conseils pour trouver des clients et aussi quelques réflexions.</h3>
            <div className="filter">
                <form>
                    <InputForm id="filtre" type="text" labelValue="Filtrer par Thème" value=""/>
                    <input type ="submit" value = "Chercher"/>
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
        </div>
    );
}
 
export default Blog;