import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import './MainPage.css'; // Import CSS file

const muscleImages = {
  biceps: 'bicep.jpeg',
  // Add other muscle images as needed
};

const MainPage = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState('');

  const handleSearch = async (difficulty) => {
    try {
      const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
        params: {
          difficulty: difficulty
        },
        headers: {
          'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
        }
      });
      setExercises(response.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <>
      <div className="filter-options">
        <label>
          Difficulty Level:
          <button onClick={() => handleSearch('beginner')}>Beginner</button>
          <button onClick={() => handleSearch('intermediate')}>Intermediate</button>
          <button onClick={() => handleSearch('expert')}>Expert</button>
        </label>
      </div>
      <div className="exercise-card-container">
        {exercises.map((exercise, index) => (
          <div key={index}>
            <ExerciseCard exercise={exercise} muscleImages={muscleImages} />
          </div>
        ))}
      </div>
      <Link to="/store">Go to Store</Link>
    </>
  );
};

export default MainPage;