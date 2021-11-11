import Picture from "./parts/Picture";

const Article = () => {
    return ( 
        <div>
            <div className="lajauge">La Jauge</div>
            <div>
                <h3>Article.categorie</h3>                                             {/* On utilisera array.forEach */}
                <h1>Article.title</h1>
                <h3>Article.sousTitre</h3>
                <Picture imageLink="" imageDescription="article.Pic"/>
            </div>
            <div className="articleContent">
                ArticleContent ArticleContentArticleContentArticleContent
            </div>
            <div className="readingProgress"></div>
        </div>
    );
}
 
export default Article;