import React from 'react';
import './App.css';
import IntroText from './introtext';
import NavBar from './navbar';
import Skills from './skills';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <div className = "container">      
        <img src= "/myhead.jpg" alt= "Headshot" className = "Headshot"></img>
        <IntroText />
        <Skills />

        </div>
      </div>
  );
}

export default App;
