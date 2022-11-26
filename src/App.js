import './App.css';
import Welcome from './components/Welcome.js';
import AboutMe from './components/AboutMe.js';
import WorkAndResearch from './components/WorkAndResearch';
import Education from './components/Education';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { MdMenu } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { useRef, useState } from 'react';

function App() {
  const menuOpenHandler = () => {
    setMenuStatus(!menuStatus);
  };
  //const AboutMeRef = useRef();
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
        <div className='SidebarContainer' onClick={menuOpenHandler}>
          <div className='DropDown'>
            <div className='DropDownListHolder'>
              <div className='X'>
                <AiOutlineClose color='white' size='45' />
              </div>
              <div className='DropDownItem'>Test1</div>
              <div className='DropDownItem'>Test2</div>
              <div className='DropDownItem'>Test3</div>
              <div className='DropDownItem'>Test4</div>
              <div className='DropDownItem'>Test5</div>
            </div>
          </div>
        </div>
      )}
      <Welcome />
      <AboutMe />
      <WorkAndResearch />
      <Education />
      <Projects />
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
