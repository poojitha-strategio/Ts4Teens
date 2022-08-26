import React from 'react';
import './style.css';
import NavBar from './components/NavBar';
import { Switch, Route } from 'react-router-dom';
import Hoodies from './Hoodies';
import Home from './Home';
import Tshirt from './Tshirt';
import AboutUs from './AboutUs';

export default function App() {
  return (
    <div className="homepage">
      <NavBar />
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/Hoodies">
          <Hoodies />
        </Route>
        <Route path="/Tshirt">
          <Tshirt />
        </Route>
        <Route path="/AboutUs">
          <AboutUs />
        </Route>
      </Switch>
    </div>
  );
}
