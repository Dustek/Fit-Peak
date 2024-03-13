import React, { useState } from 'react';
import Navbar from './Components/Navbar/navbar.jsx'
import Card from './Components/card.jsx'
import DetailedInformation from './Components/detailedinfo.jsx';

function App() {
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleCardClick = (exercise) => {
      setSelectedExercise(exercise);
    };
// dummy data for card - to be replaced from info from API
    const cardData = {
        id: 1,
        title: "Leg press",
        type: "strength",
        muscle: "leg",
        difficulty: "beginner",
        image: "https://example.com/sample-image.jpg",
    };

    return (
        <div>
            <Navbar></Navbar>
            <h1>Card List</h1>
      {selectedExercise ? (
        <DetailedInformation exercise={selectedExercise} />
      ) : (
        <div className="card-container">
          <Card data={cardData} onClick={() => handleCardClick(cardData)} />
        </div>
      )}
    </div>
    );
}

export default App;