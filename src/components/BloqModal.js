import '../App.css';

function BloqModal({ bloqModal, blurryBackground }) {
  const closeModalHandler = () => {
    bloqModal(false);
    blurryBackground(false);
  };
  return (
    <div className='ModalContainer'>
      <div className='SecondModalContainer'>
        <div className='ModalTitle'>Bloq</div>
        <div className='ModalBody'>
          <div className='ModalDescription'>
            I developed Bloq in my sophomore year of high school during remote
            learning due to the pandemic. Bloq allows high schoolers to connect
            with other high schoolers based on common interests. Bloq runs on
            both IOS and Android.
          </div>
          <div className='BottomModal'>
            <div className='HorizontalRow'></div>
            <div className='Tools'>
              <span className='ToolsStyle'>Tools: </span>
              JavaScript, React Native, Express, NodeJS, MongoDB
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

export default BloqModal;
