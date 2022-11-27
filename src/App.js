import './App.css';
import Welcome from './components/Welcome.js';
import AboutMe from './components/AboutMe.js';
import WorkAndResearch from './components/WorkAndResearch';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Awards from './components/Awards';
import { MdMenu, MdPerson, MdOutlineWork } from 'react-icons/md';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { useRef, useState } from 'react';

function App() {
  const menuOpenHandler = () => {
    setMenuStatus(!menuStatus);
  };
  const HomeRef = useRef();
  const AboutMeRef = useRef();
  const WorkAndResearchRef = useRef();
  const EducationRef = useRef();
  const ProjectsRef = useRef();
  const [menuStatus, setMenuStatus] = useState(false);
  return (
    <div className='App'>
      {menuStatus ? (
        <div className='SidebarContainer' onClick={menuOpenHandler}>
          <div className='MenuContainer'>
            <MdMenu color='white' size='45' />
          </div>
        </div>
      ) : (
        <div className='SidebarContainer'>
          <div className='DropDown'>
            <div className='DropDownListHolder'>
              <div className='X' onClick={menuOpenHandler}>
                <AiOutlineClose color='white' size='45' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => HomeRef.current.scrollIntoView()}
              >
                <AiFillHome color='white' size='35' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => AboutMeRef.current.scrollIntoView()}
              >
                <MdPerson color='white' size='35' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => WorkAndResearchRef.current.scrollIntoView()}
              >
                <MdOutlineWork color='white' size='35' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => EducationRef.current.scrollIntoView()}
              >
                <FaGraduationCap color='white' size='35' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => ProjectsRef.current.scrollIntoView()}
              >
                <BsTools color='white' size='35' />
              </div>
            </div>
          </div>
        </div>
      )}
      <div ref={HomeRef}>
        <Welcome />
      </div>
      <div ref={AboutMeRef}>
        <AboutMe />
      </div>
      <div ref={WorkAndResearchRef}>
        <WorkAndResearch />
      </div>
      <div ref={EducationRef}>
        <Education />
      </div>
      <div ref={ProjectsRef}>
        <Projects />
      </div>
      <div>
        <Awards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

/*
<button onClick={() => scrollToRef.current.scrollIntoView()}>
        {' '}
        Test
      </button>
*/
