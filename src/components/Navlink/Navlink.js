import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navlink.css'
const Navlink = () => {
    return (
        <div className="nav-design">
             <NavLink activeStyle={{
                 color:'red',
                 fontWeight: "bold"
             }} to="/home">Home</NavLink>
        <NavLink activeStyle={{
                 color:'red',
                 fontWeight: "bold"
             }} to="/about">About us</NavLink>
             <NavLink activeStyle={{
                 color:'red',
                 fontWeight: "bold"
             }} to="/culture">Culture</NavLink>
        </div>
    );
};

export default Navlink;