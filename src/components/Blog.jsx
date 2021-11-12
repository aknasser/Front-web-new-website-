import PageTitle from "./parts/PageTitle";
import SectionTitle from "./parts/SectionTitle";
import Picture from "./parts/Picture";
import InputForm from "./parts/InputForm";
import { Link } from "react-router-dom"



const Blog = () => {
    return (
        <div>                                 {/* On utilisera array.map pour balayer l'ensemble des objects facilement */}
            <PageTitle pageTitle="Le Blog"/>
            <h3>Mes conseils pour trouver des clients et aussi quelques réflexions. Web developer ? Oui. Mais humain avant tout.</h3>
            <div className="filter">
                <form>
                    <InputForm id="filtre" type="text" labelValue="Filtrer par Thème" value=""/>
                    <input type ="submit" value = "Chercher"/>
                </form>
            </div>
            <Link to="/article">
                <SectionTitle sectionTitle ="Article1"/>
                <p>{/* {descriptionProject} */}Description de L'article</p>
                <Picture imageLink="" imageDescription="L'image correspondant à l'article"/>
            </Link>

        </div>
    );
}
 
export default Blog;