import React, { useEffect, useState } from 'react';
import Post from '../Post/Post'
import Header from '../Header/Header';
import './Home.css';



const Home = () => {  
    const [post,setPost]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPost(data))
    },[])
    return(
        <div className="home">
            <Header></Header>
         {
             post.map(post=><Post post={post}></Post>)
         }
        </div>
        
    );
};

export default Home;