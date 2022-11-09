import '../App.css';
import MenloLogo from '../assets/Menlo.png';
import CourseraStanfordLogo from '../assets/CourseraStanford.png';
import UdemyLogo from '../assets/UdemyLogo.png';

function Education() {
  return (
    <div className='EducationContainer'>
      <div className='Education'>
        <div className='EducationTitle'>Education</div>
        <div className='RowContainer'>
          <div className='Row1'>
            <div className='InstitutionContainer'>
              <div className='LogoContainer'>
                <img className='Logo' src={MenloLogo} alt='Menlo School Logo' />
              </div>
              <div className='InstitutionTitle'>Menlo School</div>
              <div className='InstitutionTimeline'>August 2019 - June 2023</div>
              <div className='InstitutionQuickStats'>
                GPA: 4.25 / 4.00, SAT: 1570 (800 math, 770 EBRW)
              </div>
              <div className='EducationDescription'>
                12th grade coursework includes AP Calculus BC, Advanced Topics
                in Math (H): Number Theory, Advanced Topics in Physics (H):
                Electromagnetism, Relativity and Quantum Mechanics, and
                Independent Study in Machine Learning
              </div>
            </div>
            <div className='InstitutionContainer'>
              <div className='LogoContainer'>
                <img
                  className='Logo'
                  src={CourseraStanfordLogo}
                  alt='Coursera Stanford Logo'
                />
              </div>
              <div className='InstitutionTitle'>
                Stanford Online Machine Learning Specialization
              </div>
              <div className='InstitutionTimeline'>2022</div>
              <div className='InstitutionQuickStats'>Final Grade: 100%</div>
              <br />
              <div className='EducationDescription'>
                Topics covered include supervised machine learning, regression
                and classification, neural networks, recommender systems, tree
                ensembles, reinforcement learning, and advanced learning
                algorithms.
              </div>
            </div>
            <div className='InstitutionContainer'>
              <div className='LogoContainer'>
                <img className='Logo' src={UdemyLogo} alt='Udemy Logo' />
              </div>
              <div className='InstitutionTitle'>Udemy</div>
              <div className='InstitutionTimeline'>2017 - Present</div>
              <div className='InstitutionQuickStats'>
                100% Completion on 12+ Courses
              </div>
              <br />
              <div className='EducationDescription'>
                Courses include full stack engineering (MERN stack), Machine
                Learning and Tensorflow, React, React Native, Python,
                JavaScript, Java, and WebSockets.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
 */
export default Education;
