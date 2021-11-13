import React, { useEffect, useState } from 'react';
import Boot1 from '../Boot1/Boot1';

const Boot = () => {
    const [Boots,setBoots]=useState([]);
    useEffect(()=>{
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Arsenal')
        .then(res=>res.json())
        .then(data=>setBoots(data.teams))
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row container">
                        {
                            Boots.map(Boot=><Boot1 boot={Boot}></Boot1>)
                        }
                    </div>
                </div>
                <div className="col-lg-4 ">Hi</div>
            </div>
        </div>
    );
};

export default Boot;