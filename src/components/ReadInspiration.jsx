import * as React from 'react';

const ReadInspiration = ({inspirations}) => {
    
    
    return (
        <>
            {inspirations.map(inspiration => (
            <div class="list-categorie">
                <span>{inspiration.quote}</span>
                <span>{inspiration.author}</span>
            </div>
            ))}


        </>
    );
}
 
export default ReadInspiration;