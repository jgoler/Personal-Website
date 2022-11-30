import '../App.css';

function ShellModal({ shellModal, blurryBackground }) {
  const closeModalHandler = () => {
    shellModal(false);
    blurryBackground(false);
  };
  return (
    <div className='ModalContainer'>
      <div className='SecondModalContainer'>
        <div className='ModalTitle'>Custom Shell</div>
        <div className='ModalBody'>
          <div className='ModalDescription'>
            I built this custom shell in 2020 during my Sophomore year using
            Python. When the shell program is run, it prompts the user much like
            any other shell, and is able to perform many of the basic linux
            commands.
          </div>
          <div className='BottomModal'>
            <div className='HorizontalRow'></div>
            <div className='Tools'>
              <span className='ToolsStyle'>Tools: </span>
              Python
            </div>
            <div className='OtherInformation'>
              <div className='EmptyInformationPiece'></div>
              <a
                href='https://github.com/jgoler/Custom-Linux-Shell'
                target='_blank'
              >
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

export default ShellModal;
