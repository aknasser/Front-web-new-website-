import * as React from 'react';

const ReadArticle = ({articles}) => {
    
    
    return (
        <>
            {articles.map(article => (
            <div class="list-categorie">
                <span>{article.title}</span>
                <span>{article.subtitle}</span>
                <span>{article.heroPicture}</span>
                <span>{article.keywords}</span>
                <span>{articles.content}</span>
            </div>
            ))}


        </>
    );
}
 
export default ReadArticle;