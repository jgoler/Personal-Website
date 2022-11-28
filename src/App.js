import './App.css';
import Welcome from './components/Welcome.js';
import AboutMe from './components/AboutMe.js';
import WorkAndResearch from './components/WorkAndResearch';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Awards from './components/Awards';
import Skills from './components/Skills';
import Contact from './components/Contact';
import { MdMenu, MdPerson, MdOutlineWork } from 'react-icons/md';
import { AiOutlineClose, AiFillHome } from 'react-icons/ai';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { BsTools } from 'react-icons/bs';
import { HiCode } from 'react-icons/hi';
import { FiMail } from 'react-icons/fi';
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
  const AwardsRef = useRef();
  const SkillsRef = useRef();
  const ContactRef = useRef();
  const [menuStatus, setMenuStatus] = useState(false);
  const [blurryBackground, setBlurryBackground] = useState(false);
  return (
    <div className='App'>
      {!menuStatus ? (
        <div>
          <div className='SidebarContainer' onClick={menuOpenHandler}>
            <div className='MenuContainer'>
              <MdMenu color='white' size='45' />
            </div>
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
              <div
                className='DropDownItem'
                onClick={() => AwardsRef.current.scrollIntoView()}
              >
                <FaAward color='white' size='35' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => SkillsRef.current.scrollIntoView()}
              >
                <HiCode color='white' size='35' />
              </div>
              <div
                className='DropDownItem'
                onClick={() => ContactRef.current.scrollIntoView()}
              >
                <FiMail color='white' size='35' />
              </div>
            </div>
          </div>
        </div>
      )}
      <div>
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
          <Projects blurryBackground={setBlurryBackground} />
        </div>
        {blurryBackground ? (
          <div className='BackgroundBlurry'></div>
        ) : (
          <div></div>
        )}
        <div ref={AwardsRef}>
          <Awards />
        </div>
        <div ref={SkillsRef}>
          <Skills />
        </div>
        <div ref={ContactRef}>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
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
