import '../App.css';
import ProfilePicture from '../assets/ProfilePicture.png';

function Welcome() {
  return (
    <div className='Welcome'>
      <div className='InnerWelcomeContainer'>
        <div className='ProfilePictureContainer'>
          <img
            src={ProfilePicture}
            alt='Profile Picture'
            className='ProfileImage'
          />
        </div>
        <div className='WelcomeTextContainer'>
          Hi, I'm <span style={{ color: '#2dc093' }}>Jack!</span>
        </div>
        <div className='EmptyForSpacing'></div>
      </div>
    </div>
  );
}

export default Welcome;
