import '../App.css';
import QuadstrMockup from '../assets/quadstr_image.png';

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
