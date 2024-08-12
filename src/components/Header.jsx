import React from 'react'
import './style_sheets/Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className="main">
      <h1
        style={{
          color: "white",
          fontFamily: "Roboto",
          fontSize: "6em",
          textTransform: "uppercase",
          letterSpacing: "10px",      
        }}
      >
        Creatorverse
      </h1>
      <div className='header-button-div'>
        <Link to="/" className="header-button">View All Creators</Link>
        <Link to="/new" className="header-button">Add a Creator</Link>
      </div>
    </div>
  );
}

export default Header