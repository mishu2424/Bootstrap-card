import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId}=useParams();
    const history=useHistory();
    const [details,setDetails]=useState({});
    useState(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${friendId}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    console.log(friendId);
    const handler1=()=>{
        history.push('/home')
    }
    return (
        <div style={{textAlign:'center'}}>
            <h1>Hello, my id:{friendId}</h1>
            <h3>Name:{details.name}</h3>
            <h5>{details.address?.city}</h5>
            <button onClick={handler1}>Back to home!</button>
        </div>
    );
};

export default FriendDetail;