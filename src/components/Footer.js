import '../App.css';

function Footer() {
  return (
    <div className='FooterContainer'>
      <div className='GithubForWebsite'>
        Checkout my github repository for this website{' '}
        <a href='https://github.com/jgoler/Personal-Website' target='_blank'>
          here
        </a>
      </div>
      <div className='Footer'>
        Developed by Jack Goler. &copy; Jack Goler 2022.
      </div>
    </div>
  );
}

export default Footer;
