import * as React from 'react';
import { Link } from 'react-router-dom';

const ReadArticle = ({articles}) => {
    
    
    return (
        <>
            {articles.map(article => (
                <div  key={article._id}>
                    <span>{article.title}</span>
                    <span>{article.subtitle}</span>
                    <span>{article.heroPicture}</span>
                    <span>{article.keywords}</span>
                    <span>{article.content}</span>
                    <Link to={`/admin/article/update/${article._id}`}>
                        <span>Modifier</span>
                    </Link>
                    <Link to={`/admin/article/delete/${article._id}`}>
                        <span>Supprimer</span>
                    </Link>
                </div>
            ))}


        </>
    );
}
 
export default ReadArticle;