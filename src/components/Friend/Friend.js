import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
  const {name,email,phone,website,company,id}=props.friendList
  const url=`/friend/${id}`
 
    return (
        <div style={{
            border:'1px solid gold',
            borderRadius:'20px',
            margin:'10px',
            padding:'2%',
            textAlign:'center'
        }}>

            <h1>Name:{name}</h1>
            <h3>Email:{email}</h3>
            <h5>{phone}</h5>
            <h6>Site:{website}</h6>
            <h6>{company.name}</h6>
            <Link to={url}>Visit me</Link>
            <br />
            <Link to={url}>
                 <button>Visit me</button>
            </Link>
        </div>
    );
};

export default Friend;