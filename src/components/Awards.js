import '../App.css';

function Awards() {
  return (
    <div className='AwardsContainer'>
      <div className='Awards'>
        <div className='AwardsTitle'>Selected Awards and Honors</div>
        <div className='AwardsFirstRow'>
          <div className='Award'>
            <div className='AwardTitle'>
              National Merit Scholar Semifinalist
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
              2022 American Invitational Mathematics Examination Qualifier
            </div>
            <div className='AwardDescription'>
              American Math Competition test takers who score within the top 5%
              qualify for the AIME. Scored 97.5 on the 2021 AMC 12A and 99 on
              the 2021 AMC 12B, both of which were qualifying test scores.
            </div>
          </div>
          <div className='Award'>
            <div className='AwardTitle'>AP Scholar with Distintion</div>
            <br />

            <div className='AwardDescription'>
              Named an AP Scholar with Distintion by College Board. Awarded to
              less than 10% of American high schoolers.
            </div>
          </div>
          <div className='Award'>
            <div className='AwardTitle'>
              UC University System Eligibility in Local Context Award
            </div>
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
