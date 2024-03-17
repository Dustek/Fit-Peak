import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import './MainPage.css'; // Import CSS file

//this page is the main page of the workout section
//it will display the data from Ninjas API
//it will display the data in the form of cards
//card is ExcerciseCard.jsx


const muscleImages = {
  biceps: 'bicep.jpeg',
  // Add other muscle images as needed
};

//here we are using the useState hook to get the data from the API
//setExercises is a function that updates the exercises data from the API
// excerises is an array of objects, each object is an exercise with a name, description, and difficulty
//it will map over the exercises array to display the exercises in the form of cards
//we are using the axios to get the data from the API
//axios is fetching the data from the API its intslled using npm install axios
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
          {/* Difficulty Level:three buttons for 3 levels of difficulties */}

          <button onClick={() => handleSearch('beginner')}>Beginner</button>
          <button onClick={() => handleSearch('intermediate')}>Intermediate</button>
          <button onClick={() => handleSearch('expert')}>Expert</button>
        </label>
      </div>
      <div className="exercise-card-container">
        {/* mapping the cards */}
        {/* excersise card is excesise.jsx component/card */}
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