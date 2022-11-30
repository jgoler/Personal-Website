import '../App.css';
import MARVLLogo from '../assets/MARVL_logo.png';
import SnowflakeLogo from '../assets/Snowflake.png';

function WorkAndResearch() {
  return (
    <div className='WorkAndResearchContainer'>
      <div className='WorkAndResearch'>
        <div className='WorkAndResearchTitle'>Work and Research</div>
        <div className='WorkAndResearchExperiences'>
          <div className='WorkAndResearchLogosContainer'>
            <div className='WorkAndResearchFirstRowLogo'>
              <a href='https://marvl.stanford.edu/' target='_blank'>
                <img
                  className='WorkAndResearchExperienceLogoStanford'
                  src={MARVLLogo}
                  alt='Stanford University MARVL Logo'
                />
              </a>
              <div className='MARVLInformation'>
                <div className='OrganizationName'>
                  <a href='https://marvl.stanford.edu/' target='_blank'>
                    Stanford University Medical AI and Computer Vision Lab
                  </a>
                </div>
                <div className='Timeline'>June 2022 - Present</div>
                <div className='PositionTitle'>Research Intern</div>
                <div className='PositionDescription'>
                  Research medical applications of machine learning. Built a
                  platform for doctors to use that runs inference and analyzes
                  open surgery video. Optimized virtual machine usage to save
                  costs on GPUs. Work with a team of PhD students and postdocs.
                </div>
              </div>
            </div>
            <div className='WorkAndResearchFirstRowLogo'>
              <a href='https://www.snowflake.com/en/' target='_blank'>
                <img
                  className='WorkAndResearchExperienceLogoSnowflake'
                  src={SnowflakeLogo}
                  alt='Snowflake software company logo'
                />
              </a>
              <div className='SnowflakeInformation'>
                <a href='https://www.snowflake.com/en/' target='_blank'>
                  <div className='OrganizationName'>Snowflake</div>
                </a>
                <div className='Timeline'>June 2021 - August 2021</div>
                <div className='PositionTitle'>Apps Team Developer</div>
                <div className='PositionDescription'>
                  Worked alongside professional engineers to develop a data
                  exchange platform which enables providers to publish data that
                  can then be discovered by consumers. Only high school student
                  on team. Completed independent front-end tasks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/*
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
*/

export default WorkAndResearch;
