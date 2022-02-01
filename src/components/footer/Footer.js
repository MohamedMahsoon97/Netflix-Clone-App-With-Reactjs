import './Footer.scss';

const Footer = () => {
      return (
            <div className='footer'>
                  <div className='footer_section'>
                        <ul className='list'>
                              <li>FAQ</li>
                              <li>Investor Relations</li>
                              <li>Privacy</li>
                              <li>Speed Test</li>
                        </ul>
                        <ul className='list'>
                              <li>Help Center</li>
                              <li>Jobs</li>
                              <li>Cookie Preferences</li>
                              <li>Legal Notices</li>
                        </ul>
                        <ul className='list'>
                              <li>Account</li>
                              <li>Ways to Watch</li>
                              <li>Corporate Information</li>
                              <li>Only on Netflix</li>
                        </ul>
                        <ul className='list'>
                              <li>Media Center</li>
                              <li>Terms of Use</li>
                              <li>Contact Us</li>
                        </ul>
                  </div>
                  <div className='netflix_title'>
                        <h3>All Rights Reserved &copy; Netflix Egypt 2022</h3>
                  </div>
            </div>
      );
};

export default Footer;
