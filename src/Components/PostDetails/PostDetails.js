import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, []);
    // console.log(post.id)
    return (
        <div className="total-area">
            <div className="post-area">
                <h2 style={{fontFamily:'monospace'}}>id:{post.id}</h2>
                <h3 style={{fontFamily:'Times'}}>{post.title}</h3>
                <br/>
                <h5 style={{fontFamily:'cursive'}}>{post.body}</h5>
                <br/>
                
            </div>
            <Comments postId={id}></Comments>


        </div>
    );
};

export default PostDetails;