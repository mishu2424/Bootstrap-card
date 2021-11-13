import React from 'react';

const Boot1 = (props) => {
    return (
        <div className="col-lg-12">
            <div class="row g-4">
  <div class="col">
    <div class="card mb-2 text-center">
        <div >
        <img className="rounded-pill" style={{width:"100px"}} src={props?.boot?.strTeamJersey} class="card-img-top" alt="..."/>
        </div>
     
      <div class="card-body">
        <h5 class="card-title">{props.boot.strTeam}</h5>
        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
    </div>
  </div>

  </div>

        </div>
    );
};

export default Boot1;