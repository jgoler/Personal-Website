import '../App.css';

function Awards() {
  return (
    <div className='AwardsContainer'>
      <div className='Awards'>
        <div className='AwardsTitle'>Selected Awards and Honors</div>
        <div className='AwardsFirstRow'>
          <div className='Award'>
            <div className='AwardTitle'>
              <a
                href='https://www.nationalmerit.org/s/1758/interior.aspx?sid=1758&gid=2&pgid=424#:~:text=Semifinalists%20are%20the%20highest%20scoring,Semifinalists%20through%20their%20high%20schools.'
                target='_blank'
              >
                National Merit Scholar Semifinalist
              </a>
            </div>
            <br></br>
            <div className='AwardDescription'>
              Named a National Merit Scholar Semifinalist by NMSC. Awarded to
              less than 1% of U.S. high school seniors; includes the
              highest-scoring PSAT entrants in each state.
            </div>
          </div>
          <div className='Award'>
            <div className='AwardTitle'>
              <a
                href='https://www.maa.org/math-competitions/american-invitational-mathematics-examination-aime'
                target='_blank'
              >
                2022 American Invitational Mathematics Examination Qualifier
              </a>
            </div>
            <br></br>
            <div className='AwardDescription'>
              American Math Competition test takers who score within the top 5%
              qualify for the AIME. Scored 97.5 on the 2021 AMC 12A and 99 on
              the 2021 AMC 12B, both of which were qualifying test scores.
            </div>
          </div>
          <div className='Award'>
            <div className='AwardTitle'>
              <a
                href='https://apstudents.collegeboard.org/awards-recognitions/ap-scholar-award'
                target='_blank'
              >
                AP Scholar with Distintion
              </a>
            </div>
            <br />
            <div className='AwardDescription'>
              Named an AP Scholar with Distintion by College Board. Awarded to
              less than 10% of American high schoolers.
            </div>
          </div>
          <div className='Award'>
            <div className='AwardTitle'>
              <a
                href='https://admission.universityofcalifornia.edu/admission-requirements/freshman-requirements/california-residents/local-guarantee-elc.html'
                target='_blank'
              >
                UC University System Eligibility in Local Context Award
              </a>
            </div>
            <br></br>
            <div className='AwardDescription'>
              Awarded to students with GPAs within the top 9% of their school's
              senior class in the state of California.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Awards;
