import '../App.css';
import { FiMail } from 'react-icons/fi';
import { AiOutlineGithub } from 'react-icons/ai';
import { HiDocumentText } from 'react-icons/hi';

function Contact() {
  return (
    <div className='ContactContainer'>
      <div className='Contact'>
        <div className='ContactTitle'>Contact</div>
        <div className='Contacts'>
          <div className='SingleContact'>
            <FiMail color='#122a43' size='30' />
            <div className='DivForSpace'>jack.goler@gmail.com</div>
          </div>
          <div className='SingleContact'>
            <a href='https://github.com/jgoler' target='_blank'>
              <AiOutlineGithub color='#122a43' size='30' />
              <div className='DivForSpace'>JGoler</div>
            </a>
          </div>
          <div className='SingleContact'>
            <a
              href='https://docs.google.com/document/d/13vT6TeN7gw4cIxNgHuye8ipOpYXEfY5F0ALDgeRPfSA'
              target='_blank'
            >
              <HiDocumentText color='#122a43' size='35' />
              <div className='DivForSpace'>Resume</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
