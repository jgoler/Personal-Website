import '../App.css';
import { FaPython, FaJava, FaReact, FaLinux, FaNpm } from 'react-icons/fa';
import { SiJavascript, SiGooglecloud } from 'react-icons/si';
import { DiNodejs } from 'react-icons/di';
import { SiMongodb, SiExpress, SiTensorflow } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { IoLogoCss3 } from 'react-icons/io';
import { BsCheckLg } from 'react-icons/bs';
import { GrHeroku } from 'react-icons/gr';

function Skills() {
  return (
    <div className='SkillsContainer'>
      <div className='Skills'>
        <div className='SkillsTitle'>Skills</div>
        <div className='SkillsSubTitle'>Programming Languages and Tools</div>
        <div className='SkillsIcons'>
          <div className='IconStyle'>
            <FaPython size='60' />
          </div>
          <div className='IconStyle'>
            <FaJava size='60' />
          </div>
          <div className='IconStyle'>
            <SiJavascript size='60' />
          </div>
          <div className='IconStyle'>
            <DiNodejs size='60' />
          </div>
          <div className='IconStyle'>
            <SiMongodb size='60' />
          </div>
          <div className='IconStyle'>
            <SiExpress size='60' />
          </div>
          <div className='IconStyle'>
            <AiFillHtml5 size='60' />
          </div>
          <div className='IconStyle'>
            <IoLogoCss3 size='60' />
          </div>
          <div className='IconStyle'>
            <FaReact size='60' />
          </div>
          <div className='IconStyle'>
            <SiTensorflow size='60' />
          </div>
          <div className='IconStyle'>
            <FaLinux size='60' />
          </div>
          <div className='IconStyle'>
            <FaNpm size='60' />
          </div>
          <div className='IconStyle'>
            <SiGooglecloud size='60' />
          </div>
          <div className='IconStyle'>
            <GrHeroku size='60' />
          </div>
        </div>
        <div className='AreasOfExpertise'>
          <div className='AreasOfExpertiseTitle'>Areas of Expertise</div>
          <div className='AreaOfExpertise'>
            <div className='CheckContainer'>
              <BsCheckLg color='#3295e1' size='18' />
            </div>
            Artificial Intelligence and Machine Learning
          </div>
          <div className='AreaOfExpertise'>
            <div className='CheckContainer'>
              <BsCheckLg color='#3295e1' size='18' />
            </div>
            Full Stack (Mobile/Web) Development
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
