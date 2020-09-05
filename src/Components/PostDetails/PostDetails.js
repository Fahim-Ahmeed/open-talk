import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import './PostDetails.css';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const { id } = useParams()
    const [post, setPost] = useState([])
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    // console.log(post.id)
    return (
        <div className="total-area">
            <div className="post-area">
                <h2>id:{post.id}</h2>
                <h3>heading:{post.title}</h3>
                <hr />
                <h5>{post.body}</h5>
                <br/>
                
            </div>
            <Comments postId={id}></Comments>


        </div>
    );
};

export default PostDetails;