import React from 'react';
 
import Navbar from 'navbar.jsx'

import Card from './card.jsx'
 

function App() {
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
            <h1>Placeholder</h1>
            <Card data={cardData} />
        </div>
    );
}

export default App;