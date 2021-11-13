import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';

const Friends = () => {
    const [friends,setFriends]=useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])
    return (
        <div style={{
            display:'grid',
            gridTemplateColumns:'repeat(3 ,1fr)'
        }}>
            {
                 friends.map(friend=><Friend 
                    key={friend.id}
                    friendList={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;