
import './App.css';
import React from 'react';
import Sania from './Sania.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faSkype, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'


function App() {

  return (
    <>
      <div className="business-card-container">
        <div className="business-card">
          <div className="infom">
            <div>
              <img src={Sania} className='img' />
            </div>
            <div className="profile-info">
              <h2>Sania Khatri</h2>
              <h4>Aspiring Full Stack Developer</h4>
              <p>saniakhatri@gmail.com</p>
            </div>

            <div className="buttons">
            
          
            <a href="mailto:saniakhatri003@gmail.com" target="_blank" rel="noopener noreferrer">
              <button className='btn1'> <FontAwesomeIcon icon={faEnvelope} className="icons" /> Email</button>
            </a>
            <a href="https://www.linkedin.com/in/saniakhatri003/" target="_blank" rel="noopener noreferrer">
              <button className='btn2'> <FontAwesomeIcon icon={faLinkedin} className="icons" /> LinkedIn</button>
            </a>
                
            </div>
          </div>

          <div className="about-section">
            <h3>About</h3>
            <p>I am Aspiring to be a Full Stack Web Developer. I done my post-graduation (MCA) from Kuruksherta University. And my graduation (B.Sc. Computer Science) from B.P.S. University. Now I looking for job as a Software Developer</p>
          </div>
          <div className="interests-section">
            <h3>Interests</h3>
            <p>Passionate about Novels, finding solace in the art of Sketching, embracing the serenity of nocturnal Walks, indulging in the timeless melodies of old Ghazals, and captivated by the rich narratives of Pakistani Dramas. </p>
          </div>
          <div className="footer-icons">
            <a href="https://www.facebook.com/saniabarira.khatri.7" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className="icons" />
            </a>
            <a href="https://github.com/Sania90503" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="icons" />
            </a>
            <a href="https://www.instagram.com/be_u_tifuull/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} className="icons" />
            </a>
            <a href="https://twitter.com/Sania_Barira" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="icons" />
            </a>
            <a href="https://join.skype.com/invite/vCKY8cnbYk7w" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSkype} className="icons" />
            </a>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
