import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.css';

// ExerciseCard component is a child component of MainPage
// It receives the exercise object and muscleImages object as props
// It displays the exercise details in a card format
const ExerciseCard = ({ exercise, muscleImages }) => {
  const { name, type, muscle, equipment, difficulty } = exercise;

  //when the user clicks on the view instructions link, the selected exercise will be stored in the local storage
  const handleClick = () => {
    localStorage.setItem('selectedExercise', name);
  };

  return (
 
    <div className="exercise-card">
      {/* muscleImages[muscle] means obj{key}  */}
    <img className="exercise-image" src={muscleImages[muscle]} alt={muscle}  style={{width:'300px',height:'200px'}}/>
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