import '../App.css';

function QuadstrModal({ quadstrModal, blurryBackground }) {
  const closeModalHandler = () => {
    quadstrModal(false);
    blurryBackground(false);
  };
  return (
    <div className='ModalContainer'>
      <div className='SecondModalContainer'>
        <div className='ModalTitle'>Quadstr</div>
        <div className='ModalBody'>
          <div className='ModalDescription'>
            I built Quadstr over the summer following my freshman year of high
            school. I realized that a lot of my peers wanted to share things
            with other people in my grade, however, at times they didn’t feel
            comfortable attaching their name to their questions or thoughts. In
            some cases, people had questions about things that might be
            embarrassing, or wanted to share things that were too personal for
            their other social media channels, or even felt uncomfortable
            sharing ideas without knowing how they would be received. Whatever
            the situation, they seemed to want an anonymous means of
            communication that would still allow them to engage with friends or
            the school community rather than with strangers. As a result, I
            built Quadstr, a social media site where classmates could talk and
            hangout in private groups called “quads.” On Quadstr, anyone can
            create a quad and invite specific people to join, like a friend
            group or a class (e.g., classmates in your English class). Quad
            members can see the real names of other quad members for the quads
            they have joined, but comments made in the quad chat feature are
            posted anonymously. I thought building Quadstr would be a clever
            solution to the problem many of my peers experienced, where they did
            not always feel comfortable asking hard questions or discussing very
            personal or sensitive topics under their own names.
          </div>
          <div className='BottomModal'>
            <div className='HorizontalRow'></div>
            <div className='Tools'>
              <span className='ToolsStyle'>Tools: </span>
              HTML, CSS, JavaScript, ReactJS, ExpressJS, NodeJS, MongoDB, Heroku
            </div>
            <div className='OtherInformation'>
              <div className='InformationPiece'>Landing Page</div>
              <div className='InformationPiece'>Medium Article</div>
              <div className='InformationPiece'>Github Repository</div>
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

export default QuadstrModal;
