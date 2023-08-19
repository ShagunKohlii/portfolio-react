import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Animation from './components/Animation';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <div className='backgorund-home'>
        <Navbar />
        <div className='Home-component'>
          <Home />
          <Animation />
        </div>
      </div>
      <div className="about-page"><About /></div>
      <div className='skill-component'>
        <Skills />
      </div>
      <div className="project-component">
        <h2 style={{ color: 'black', textAlign: 'center', marginBottom: '40px' }}>Projects</h2>
        {/* <div className='project-trial'> */}
        <Projects  img={"./assets/gfg-clone.png"} h={'Codehub'} para={'this is the clone of gfg and it is made with reactjs and mui.'}/>
        <Projects img={'./assets/weather-app.png'} h={'Weather app'} para={'this is the weather app and it is made with vanilla js and openmap.org.'}/>
        <Projects  img={'./assets/rockgame.png'} h={'rock paper scissor game'} para={'This is the rock paper scissor game made with the help of vanilla js '}/>
        <Projects  img={'./assets/rockgame.png'} h={'rock paper scissor game'} para={'This is the rock paper scissor game made with the help of vanilla js '}/>

        {/* </div> */}
      </div>
      <Contact/>
    </>
  );
}

export default App;
