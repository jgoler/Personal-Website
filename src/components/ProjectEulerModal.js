import '../App.css';

function ProjectEulerModal({ projectEulerModal, blurryBackground }) {
  const closeModalHandler = () => {
    projectEulerModal(false);
    blurryBackground(false);
  };
  return (
    <div className='ModalContainer'>
      <div className='SecondModalContainer'>
        <div className='ModalTitle'>Project Euler</div>
        <div className='ModalBody'>
          <div className='ModalDescription'>
            I am an avid{' '}
            <a href='https://projecteuler.net/' target='_blank'>
              Project Euler
            </a>{' '}
            problem solver. Project Euler is a series of over 800 challenging
            mathematical/computer programming problems that require more than
            just mathematical insights to solve. Although mathematics will help
            problem solvers arrive at elegant and efficient methods, the use of
            a computer and programming skills are required to solve most
            problems. In my Project Euler Github repo, I have my Python
            solutions to some of these problems. I've solved many more PE
            problems than are included in my repo, but will start adding all new
            problems to it, and I will go back and add more elegant solutions to
            problems I have done previously from time to time.
          </div>
          <div className='BottomModal'>
            <div className='HorizontalRow'></div>
            <div className='Tools'>
              <span className='ToolsStyle'>Tools: </span>
              Python
            </div>
            <div className='OtherInformation'>
              <div className='EmptyInformationPiece'></div>
              <a href='https://github.com/jgoler/Project-Euler' target='_blank'>
                {' '}
                <div className='InformationPiece'>Github Repository</div>
              </a>
              <div className='EmptyInformationPiece'></div>
            </div>
            <div className='ModalCloseButton' onClick={closeModalHandler}>
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectEulerModal;
