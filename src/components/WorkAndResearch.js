import '../App.css';
import StanfordLogo from '../assets/Stanford.png';
import SnowflakeLogo from '../assets/Snowflake.png';

function WorkAndResearch() {
  return (
    <div className='WorkAndResearch'>
      <div className='WorkAndResearchTitle'>Work and Research Experience</div>
      <div className='JobsContainer'>
        <div className='StanfordMARVL'>
          <img
            className='StanfordLogo'
            src={StanfordLogo}
            alt='Stanford Logo'
          />
          <div className='StanfordTimeline'>June 2022 - Present</div>
          <div className='StanfordPositionTitle'>
            Research Intern,{' '}
            <a
              href='https://marvl.stanford.edu/index.html'
              target='_blank'
              color='#122a43'
            >
              Stanford University Medical AI and Computer Vision Lab (MARVL)
            </a>
          </div>
        </div>
        <div className='Snowflake'>
          <img
            className='SnowflakeLogo'
            src={SnowflakeLogo}
            alt='Snowflake logo'
          />
          <div className='SnowflakeTimeline'>2021</div>
          <div className='SnowflakePositionTitle'>Apps Team Developer</div>
        </div>
      </div>
      <div className='PositionDescriptions'>
        <div className='StanfordPosition'>
          Research medical applications of machine learning. Built a platform
          for doctors to use that runs inference and analyzes open surgery
          video. Optimized virtual machine usage to save costs on GPUs. Work
          with a team of PhD students and postdocs.
        </div>
        <div className='SnowflakePosition'>
          Worked alongside professional engineers to develop a data exchange
          platform. Only high school student on team. Completed independent
          front-end tasks.
        </div>
      </div>
    </div>
  );
}

export default WorkAndResearch;
