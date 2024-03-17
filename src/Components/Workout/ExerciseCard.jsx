import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.css';

const ExerciseCard = ({ exercise, muscleImages }) => {
  const { name, type, muscle, equipment, difficulty } = exercise;

  const handleClick = () => {
    localStorage.setItem('selectedExercise', name);
  };

  return (
    <div className="exercise-card">
    <img className="exercise-image" src={muscleImages[muscle]} alt={muscle} />
    <div className="exercise-details">
      <h2 className="exercise-name">{name}</h2>
      <p className="exercise-info">
        <span className="exercise-label">Type:</span> {type}
      </p>
      <p className="exercise-info">
        <span className="exercise-label">Equipment:</span> {equipment}
      </p>
      <p className="exercise-info">
        <span className="exercise-label">Difficulty:</span> {difficulty}
      </p>
    </div>
    <Link
      to={`/instructions/${name}`}
      onClick={handleClick}
      className="view-instructions-link"
    >
      View Instructions
    </Link>
  </div>
);
};

export default ExerciseCard;