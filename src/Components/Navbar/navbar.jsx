import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navbar.css';

function Navbar () {
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Fit-Peak</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Exercise</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Buy equipment</a>
        </li>
        <li className="nav-item">
          <a className="nav-link">Messege us!</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      </>
    )
}
export default Navbar;