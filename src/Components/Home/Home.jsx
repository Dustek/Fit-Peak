import React,{useState} from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Link } from "react-router-dom";
import "./Home.css";


const Home = () => {

    const recentSearch = localStorage.getItem('selectedExercise');
  return (
    <div>
      <div className="mainbanner">
        <div></div>
        <div className="forhead">
            <p className="p1">World's Best <span>Muscle Strength Workout.</span></p>
            <p className="p2">Smash your fitness goals with unlimited Access.Work out anywhere anytime , on any device.</p>
        </div>
        </div>
        <div className="mainbanner2"></div>


        <div>

     
      {/* Display the recent search if it exists */}
      {recentSearch && (
        <div>
          <h1 style={{margin:'30px'}}>Your Recent favourite workout is <span style={{color:'#ff8600',fontSize:"3.5rem"}}>{recentSearch}.</span></h1>
          {/* <h2 className="hhh">{recentSearch}</h2> */}
        </div>
      )}
   
      <Link to="/Exercise" className="linku">Go To Workout Page</Link>
    </div>


      
    </div>
  );
}

export default Home;
