import '../App.css';
import MenloLogo from '../assets/Menlo.png';
import CourseraStanfordLogo from '../assets/CourseraStanford.png';

function Education() {
  return (
    <div className='EducationContainer'>
      <div className='Education'>
        <div className='EducationTitle'>Education</div>
        <div className='EducationPositions'>
          <div className='Menlo'>
            <a href='https://www.menloschool.org/' target='_blank'>
              <img className='MenloLogo' src={MenloLogo} alt='Menlo School' />
              <div className='EducationalInstituteTitle'>Menlo School</div>
            </a>
            <div className='EducationalInstituteTimeline'>
              August 2019 - June 2023
            </div>
            <div className='EducationalInsituteQuickStats'>
              GPA: 4.25, SAT: 1570 (800 math, 770 EBRW)
            </div>
            <div className='MenloCoursework'>
              12th grade coursework includes Advanced Topics in Math (H): Number
              Theory, Advanced Topics in Physics (H): Electromagnetism,
              Relativity, and Quantum Mechanics, AP Calculus BC, and Independent
              Study in Machine Learning
            </div>
          </div>
          <div className='CourseraStanford'>
            <img
              className='CourseraStanfordLogo'
              src={CourseraStanfordLogo}
              alt='Stanford Coursera logo'
            />
            <div className='EducationalInstituteTitle'>Menlo School</div>
            <div className='EducationalInstituteTimeline'>
              August 2019 - June 2023
            </div>
            <div className='EducationalInsituteQuickStats'>GPA: 4.25</div>
            <div className='MenloCoursework'>Classes Taken</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 */
export default Education;
