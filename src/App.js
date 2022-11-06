import './App.css';
import Welcome from './components/Welcome.js';
import AboutMe from './components/AboutMe.js';
import WorkAndResearch from './components/WorkAndResearch';
import Education from './components/Education';
import Projects from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Welcome />
      <AboutMe />
      <WorkAndResearch />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
