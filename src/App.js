import './App.css';
import Welcome from './components/Welcome.js';
import AboutMe from './components/AboutMe.js';
import WorkAndResearch from './components/WorkAndResearch';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { MdMenu } from 'react-icons/md';

function App() {
  return (
    <div className='App'>
      <div className='SidebarContainer'>
        <div className='MenuContainer'>
          <MdMenu color='white' size='45' />
        </div>
      </div>
      <Welcome />
      <AboutMe />
      <WorkAndResearch />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
