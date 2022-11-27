import '../App.css';
import QuadstrMockup from '../assets/quadstr_image.png';
import BloqImage from '../assets/Bloq_Image.png';
import StudentPulseImage from '../assets/Student_Pulse_Image.png';

function Projects() {
  return (
    <div className='ProjectsContainer'>
      <div className='Projects'>
        <div className='ProjectsTitle'>Projects</div>
        <div className='ProjectsFirstRow'>
          <div className='Project'>
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
          <div className='Project'>
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
                  alt='Quadstr Mockup'
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
                  src={QuadstrMockup}
                  alt='Quadstr Mockup'
                />
              </div>
              <div className='ProjectTitle'>Quadstr</div>
              <div className='AboutContainer'>Details</div>
            </div>
          </div>
          <div className='Project'>
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
          <div className='Project'>
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
        </div>
      </div>
    </div>
  );
}

export default Projects;
