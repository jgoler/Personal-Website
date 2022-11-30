import '../App.css';

function StudentPulseModal({ studentPulseModal, blurryBackground }) {
  const closeModalHandler = () => {
    studentPulseModal(false);
    blurryBackground(false);
  };
  return (
    <div className='ModalContainer'>
      <div className='SecondModalContainer'>
        <div className='ModalTitle'>Student Pulse</div>
        <div className='ModalBody'>
          <div className='ModalDescription'>
            Student Pulse is a microsurvey tool for schools to use that I
            developed during my Junior year. Student Pulse enables schools to
            give students 1 minute weekly surveys and tracks student well-being
            and larger patterns within a school's student body. The app then
            assigns the school a "Student Pulse", which is a number between 1
            and 100 indicating the student body overall well-being, 1 being the
            lowest score, and 100 being the best score. In addition to recording
            the student well-being and determining a pulse score, Student Pulse
            also returns the recorded metrics back to the administration, and
            compares the stats to nearby schools for a basis of comparison.
          </div>
          <div className='BottomModal'>
            <div className='HorizontalRow'></div>
            <div className='Tools'>
              <span className='ToolsStyle'>Tools: </span>
              JavaScript, React Native, Express, NodeJS, MongoDB
            </div>
            <div className='OtherInformation'></div>
            <div className='ModalCloseButton' onClick={closeModalHandler}>
              Close
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPulseModal;
