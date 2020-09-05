import React from 'react';
import { useParams } from 'react-router-dom';

const Comments = () => {
    const{id}=useParams;
    return (
        <div>
            <h2>comments section</h2>
        </div>
    );
};

export default Comments;