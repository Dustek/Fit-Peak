import React from 'react';

function DetailedInformation({ exercise }) {
  const getVideoUrl = () => {
// put in logic to get video here
  };
    return (
        <div>
          <h2>{exercise.title}</h2>
          <p>{exercise.description}</p>
          <div>
            <video width="320" height="240" controls>
              <source src={getVideoUrl()} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p>recommended equipment: {exercise.equipment} </p>
          <img
            src={getImageUrl(exercise.equipment)} // not sure how we can display equipment image
            alt={exercise.equipment}
          />
{/* Maybe add a link to shop here? */}
        </div>
      );
    }
    
    export default DetailedInformation;