import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard.jsx';
import ExerciseSearchForm from './ExerciseSearchForm'; // Import the ExerciseSearchForm component
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
      // shows initial excercises
      fetchExercises();
    }, []);
  
    const fetchExercises = async (options = {}) => {
      try {
        // Log the request details before making the API call
    console.log('API Request URL:', 'https://api.api-ninjas.com/v1/exercises');
    console.log('API Request Parameters:', {
      limit: 10,
      ...options
    });
        const response = await axios.get('https://api.api-ninjas.com/v1/exercises', {
          params: {
            limit: 10, // Always limit to 10 results
            ...options // Spread the options object to include any additional parameters
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
  
  // Callback function to handle search
  const handleSearch = (options) => {
    fetchExercises(options);
  };

  return (
    <>
      <ExerciseSearchForm onSearch={handleSearch} />
      <div className="main-page">
        {exercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} muscleImages={muscleImages} />
        ))}
      </div>
      <Link to="/store">Go to Store</Link>
    </>
  );
};

export default MainPage;