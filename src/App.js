import './App.css';
// import React, { useRef } from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Animation from './components/Animation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Headroom from 'react-headroom';

function App() {
  return (
    <>
      <div className='backgorund-home'>
        <Headroom>
          <Navbar />

        </Headroom>
        <div className='Home-component' id='homeid'>
          <Home />
          <Animation />
        </div>
      </div>
      <div className="about-page" id='aboutid'><About /></div>
      <div className='skill-component' id='skillid'>
        <Skills />
      </div>
      <div className="project-component" id='projectid'>
        <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '40px', fontSize:'2rem' }}>Projects</h2>
        {/* <div className='project-trial'> */}
        <Projects img={"./assets/gfg-clone.png"} h={'Codehub'} para={'this is the clone of gfg and it is made with reactjs and mui.'} />
        <Projects img={'./assets/weather-app.png'} h={'Weather app'} para={'this is the weather app and it is made with vanilla js and openmap.org.'} />
        <Projects img={'./assets/rockgame.png'} h={'rock paper scissor game'} para={'This is the rock paper scissor game made with the help of vanilla js '} />
        <Projects img={'./assets/rockgame.png'} h={'Personal Portfolio'} para={'This is the personal portfolio made with the help of Reactjs '} />

        {/* </div> */}
      </div>
      <div id='contactid' className='contact-component'>
      <Contact />
      </div>
    </>
  );
}

export default App;
