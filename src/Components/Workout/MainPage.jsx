import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';

const muscleImages = {
  biceps: 'bicep.jpeg'
// abdominals:
// abductors:
// adductors:
// biceps
// calves
// chest
// forearms
// glutes
// hamstrings
// lats
// lower_back
// middle_back
// neck
// quadriceps
// traps
// triceps


};



const MainPage = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await axios.get('https://api.api-ninjas.com/v1/exercises?muscle=biceps', {
          headers: {
            'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
          }
        });
        setExercises(response.data);
      } catch (error) {
        console.error('Request failed:', error);
      }
    };

    fetchExercises();
  }, []);

  return (
    <>
    <div className="main-page">
      {exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise} muscleImages={muscleImages}/>
      ))}
    </div>

    <Link to="/store">Go to Store</Link>
</>
  );
};

export default MainPage;

