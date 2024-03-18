import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './InstructionPage.css';




// Assuming you have a directory of muscle images
const InstructionPage = () => {
  const { exerciseName } = useParams();
  const [exercise, setExercise] = useState(null);
  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await axios.get(`https://api.api-ninjas.com/v1/exercises?name=${exerciseName}`, {
          headers: {
            'X-Api-Key': 'mgS819STNx1KpuKbeAkddCtzAHrj9WgTMEsAwevC'
          }
        });
        setExercise(response.data[0]); // Assuming exerciseName is unique and returns only one exercise
      } catch (error) {
        console.error('Request failed:', error);
      }
    };
    fetchExercise();
  }, [exerciseName]);
  // Get the selected exercise name from local storage
  //const storedExerciseName = localStorage.getItem('selectedExercise');
  // Mapping of exercise names to video file paths
  const videoPaths = {
    'Rickshaw Carry': '/beg1.mp4',
    'Power snatch-': '/Power snatch.mp4',
    'Single-Leg Press': '/Single-Leg Press.mp4',
    'Clean from Blocks': '/block.mp4',
    'Incline Hammer Curls ': '/hammercurl.mp4',
    'Barbell deficit deadlift': '/barbell.mp4',
    'Romanian Deadlift With Dumbbells': '/dumbell.mp4',
    'Clean Deadlift': '/barbell.mp4',
    'Landmine twist': '/bb.mp4',
    'Weighted pull-up': '/bb.mp4',
    'Power snatch-': '//beg1.mp4',
    'Narrow-stance squat': '/squat.mp4',
    'Barbell forward lunge': '/barbell.mp4.mp4',
    // Add more exercise names and corresponding video file paths as needed
  };
  return (
    <div className="instruction-page">
      {exercise ? (

        <>
        <div className="main">
          <h2>{exercise.name}</h2>
          <p>Type: {exercise.type}</p>
          <p>Equipment: {exercise.equipment}</p>
          {/* Display muscle image */}
          <p>Difficulty: {exercise.difficulty}</p>
          <div className="video-container">
            {/* Use HTML5 video element to display the video */}
            <video width="560" height="315" controls>
              <source src={videoPaths[exercise.name]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="instructions">
            <h3>Instructions:</h3>
            <p>{exercise.instructions}</p>
          </div>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
 
  );
};
export default InstructionPage;