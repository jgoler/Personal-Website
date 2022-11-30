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
          <div className='ModalDescription'>Project Euler description</div>
          <div className='BottomModal'>
            <div className='HorizontalRow'></div>
            <div className='Tools'>
              <span className='ToolsStyle'>Tools: </span>
              Python
            </div>
            <div className='OtherInformation'>
              <div className='EmptyInformationPiece'></div>
              <div className='InformationPiece'>Github Repository</div>
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
