import React from 'react';
import './App.css';
import IntroText from './introtext';
import NavBar from './navbar';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className = "container">      
        <img src= "/myhead.jpg" alt= "Headshot" className = "Headshot"></img>
        <IntroText />
        </div>
      </div>
  );
}

export default App;
