import React from 'react';
import { useParams } from 'react-router';

function Article() {
    let {id, category} = useParams();
    return ( 
        <div>
            id={id} and category={category}
        </div>
     );
}

export default Article;