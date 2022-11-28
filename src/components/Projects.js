import '../App.css';
import QuadstrMockup from '../assets/quadstr_image.png';
import BloqImage from '../assets/Bloq_Image.png';
import StudentPulseImage from '../assets/Student_Pulse_Image.png';
import ShellImage from '../assets/Shell_Image.png';
import ProjectEulerImage from '../assets/Project_Euler.png';
import QuadstrModal from './QuadstrModal';
import { useState } from 'react';

function Projects({ blurryBackground }) {
  const [quadstrModal, setOpenQuadstrModal] = useState(false);
  const [bloqModal, setOpenBloqModal] = useState(false);

  const quadstrClickHandler = () => {
    let cur = quadstrModal;
    setOpenQuadstrModal(!quadstrModal);
    blurryBackground(!cur);
  };

  const bloqClickHandler = () => {
    let cur = bloqModal;
    setOpenBloqModal(!bloqModal);
    blurryBackground(!cur);
  };

  if (!quadstrModal) {
    if (!bloqModal) {
      blurryBackground(false);
    }
  }
  return (
    <div className='ProjectsContainer'>
      {quadstrModal ? (
        <QuadstrModal quadstrModal={setOpenQuadstrModal} blurryBackground />
      ) : (
        <div></div>
      )}
      {bloqModal ? (
        <QuadstrModal quadstrModal={setOpenQuadstrModal} blurryBackground />
      ) : (
        <div></div>
      )}
      <div className='Projects'>
        <div className='ProjectsTitle'>Projects</div>
        <div className='ProjectsFirstRow'>
          <div className='Project' onClick={quadstrClickHandler}>
            <div className='ProjectPresentationContainer'>
              <div className='ProjectImageContainer'>
                <img
                  className='ProjectImage'
                  src={QuadstrMockup}
                  alt='Quadstr Mockup'
                />
              </div>
              <div className='ProjectTitle'>Quadstr</div>
              <div className='AboutContainer'>Details</div>
            </div>
          </div>
          <div className='Project' onClick={bloqClickHandler}>
            <div className='ProjectPresentationContainer'>
              <div className='ProjectImageContainer'>
                <img
                  className='ProjectImage'
                  src={BloqImage}
                  alt='Bloq Mockup'
                />
              </div>
              <div className='ProjectTitle'>Bloq</div>
              <div className='AboutContainer'>Details</div>
            </div>
          </div>
          <div className='Project'>
            <div className='ProjectPresentationContainer'>
              <div className='ProjectImageContainer'>
                <img
                  className='ProjectImage'
                  src={StudentPulseImage}
                  alt='Student Pulse Mockup'
                />
              </div>
              <div className='ProjectTitle'>Student Pulse</div>
              <div className='AboutContainer'>Details</div>
            </div>
          </div>
        </div>
        <div className='ProjectsSecondRow'>
          <div className='Project'>
            <div className='ProjectPresentationContainer'>
              <div className='ProjectImageContainer'>
                <img
                  className='ProjectImage'
                  src={ShellImage}
                  alt='Bash Shell Logo'
                />
              </div>
              <div className='ProjectTitle'>Custom Linux Shell</div>
              <div className='AboutContainer'>Details</div>
            </div>
          </div>
          <div className='Project'>
            <div className='ProjectPresentationContainer'>
              <div className='ProjectImageContainer'>
                <img
                  className='ProjectImage'
                  src={ProjectEulerImage}
                  alt='Project Euler Logo'
                />
              </div>
              <div className='ProjectTitle'>Project Euler</div>
              <div className='AboutContainer'>Details</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
