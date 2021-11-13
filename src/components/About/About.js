import React, { useEffect, useState } from 'react';

const About = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res=>res.json())
        .then(data=>setPosts(data))
    },[])
    return (
        <div style={{textAlign:'center'}}>
           <h1>Hey,i am from about.</h1>
           {
             posts.map(post=><li>{post.title}</li>)
           }
        </div>
    );
};

export default About;