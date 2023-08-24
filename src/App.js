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
        <Projects img={"./assets/gfg-clone.png"} h={'Codehub'} para={'Developed a Frontend clone of Geeks for Geeks, using ReactJs.'}  projectlink={'https://github.com/ShagunKohlii/CodeHub-react'} />
        <Projects img={'./assets/weather-app.png'} h={'Weather app'} para={'Developed Weather App using ReactJS to showcase real-time weather information.'}  projectlink={'https://github.com/ShagunKohlii/Weather-app'} />
        <Projects img={'./assets/rockgame.png'} h={'rock paper scissor game'} para={'Developed Rock-Paper-Scissors game using HTML, CSS, and JavaScript'}  projectlink={'https://github.com/ShagunKohlii/Rock-paper-scissor-game'} />
        <Projects img={'./assets/portfoliojs.png'} h={'Personal Portfolio'} para={'Created a personal portfolio website using ReactJS to showcase my work and skills.'}  projectlink={'https://github.com/ShagunKohlii/portfolio-react'} />

        {/* </div> */}
      </div>
      <div id='contactid' className='contact-component'>
      <Contact />
      </div>
    </>
  );
}

export default App;
