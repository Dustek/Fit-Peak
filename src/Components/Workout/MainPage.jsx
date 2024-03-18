import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import ExerciseCard from './ExerciseCard';
import './MainPage.css'; 
import styled from 'styled-components';

//this page is the main page of the workout section
//it will display the data from Ninjas API
//it will display the data in the form of cards
//card is ExcerciseCard.jsx

const Button = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin: 0 auto;
  border: none;
  font-size: 20px;
  background-color: green;
  color: white;
  transition: all 0.5s;
  border-radius: 100%;

  &:hover {
    background-color: green;
    color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    border: 3px solid black;
  }
`;

const Button2 = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin: 0 auto;
  border: none;
  font-size: 20px;
  border-radius: 100%;
  background-color: blue;
  transition: all 0.5s;
  color: white;

  &:hover {
    background-color: blue;
    color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    border: 3px solid black;
  }
`;

const Button3 = styled.button`
  width: 200px;
  height: 200px;
  border-radius: 5px;
  margin: 0 auto;
  border: none;
  font-size: 20px;
  background-color: red;
  color: white;
  border-radius: 100%;
  transition: all 0.5s;

  &:hover {
    background-color: red;
    color: white;
    box-shadow: 0 0 20px rgba(0, 0, 0, 1);
    border: 3px solid black;
  }
`;

const Buttondiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Divi = styled.div`
  width: 220px;
  height: 220px;
  padding: 20px;
border-radius: 100%;
  border: 2px solid #9b5de5;
  margin: 20px; 

  &:hover {
    border: 2px solid #ffc300;
  }
`;

const Main = styled.div`
width: 100vw;

display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`;

const Linki= styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
  background-color: #ffc300;
  border-radius: 5px;
  transition: all 0.5s;
  &:hover {
    background-color: #9b5de5;
    color: white;
  }
`;





const muscleImages = {
  biceps: './biceps.jpeg',
  quadriceps: './quardicep.jpeg',
  lower_back: './lower-back.jpeg',
  forearms: './forearms.jpeg',
  hamstrings: './hamstrings.jpeg',
  abdominals: './abdominals.jpeg',
  lats: './lats.jpeg',
  shoulders: './shoulders.jpeg',
  middle_back: './middle-back.jpeg',
  glutes: './glutes.jpeg',
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
  const [containerColor, setContainerColor] = useState(''); // Initial color

  const handleSearch = async (difficulty, color) => {
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
      setContainerColor(color); // This sets the container colour based on button clicked
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  return (
    <>
      <Main style={{ backgroundColor: containerColor }}>
        <div className="filter-options">
          <label>
            {/* Difficulty Level:three buttons for 3 levels of difficulties */}
            <Buttondiv> 
              <Divi><Button onClick={() => handleSearch('beginner', '#dcffde')}>Click for Beginner Level Exercises</Button></Divi>
              <Divi><Button2 onClick={() => handleSearch('intermediate', '#dcddff')}>Click for Intermediate Level Exercises</Button2></Divi>
              <Divi><Button3 onClick={() => handleSearch('expert', '#ffc7c7')}>Click for Expert Level Exercises</Button3></Divi>
            </Buttondiv>
          </label>
        </div>
        <div className="exercise-card-container">
          {/* mapping the cards */}
          {/* excersise card is excercise.jsx component/card */}
          {exercises.map((exercise, index) => (
            <div key={index}>
              <ExerciseCard exercise={exercise} muscleImages={muscleImages} />
            </div>
          ))}
        </div>
        <Linki to="/Shop">Visit Our Store Page </Linki>
      </Main>
    </>
  );
};

export default MainPage;