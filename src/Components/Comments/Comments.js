import React, { useEffect, useState } from 'react';
import CommentArea from '../CommentArea/CommentArea';

const Comments = (props) => {
    const postId=props.postId;
    console.log(postId)

    const[comments,setComments]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res=>res.json())
        .then(data=>setComments(data))
    },[])
    // const allComments=(comments.length)
    return (
        <div>
            <h6 style={{borderBottom: '1px solid lightgray',paddingBottom:'20px'}}> view all comments</h6>
            {
            comments.map(comment =><CommentArea comment={comment}></CommentArea>)
            }
        </div>
    );
};

export default Comments;