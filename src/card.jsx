import React from 'react';

function Card({ data }) {
    return (
      <div className="card">
        <img src={data.image} alt={data.title} />
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p className="card-text">{data.description}</p>
          <p className="card-text">Type: {data.type}</p>
          <p className="card-text">Muscle: {data.muscle}</p>
          <p className="card-text">Difficulty: {data.difficulty}</p>
        </div>
      </div>
    );
  }
  
  export default Card;