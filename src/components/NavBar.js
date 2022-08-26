import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [currentButton, setCurrentButton] = useState('Home');

  const setActiveColor = (e) => {
    setCurrentButton(e.target.innerHTML);
  };
  return (
    <div className="NavBar">
      <div>
        <h1 className="title">Ts4Teens</h1>
      </div>
      <div
        className={currentButton == 'Home' ? 'active' : ''}
        onClick={setActiveColor}
        currentTarget="home"
      >
        <Link to="/Home">Home</Link>
      </div>
      <div
        className={currentButton == 'T-shirts' ? 'active' : ''}
        onClick={setActiveColor}
      >
        <Link to="/Tshirt">T-shirts</Link>
      </div>
      <div
        className={currentButton == 'Hoodies' ? 'active' : ''}
        onClick={setActiveColor}
      >
        <Link to="/Hoodies">Hoodies</Link>
      </div>
      <div
        className={currentButton == 'About Us' ? 'active' : ''}
        onClick={setActiveColor}
      >
        <Link to="/AboutUs">About Us</Link>
      </div>
    </div>
  );
};
export default NavBar;
