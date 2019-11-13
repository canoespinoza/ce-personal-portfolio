import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faSoundcloud, faYoutube} from '@fortawesome/free-brands-svg-icons';
import profilePic from './images/profilePic.JPG';
import resume from './documents/Resume(CanoEspinoza)V2.pdf';

export default class Body extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='bodyContainer'>
          <div className='row'>
            <div id='body'>
              <img id='profilePic' src={profilePic}/>
              <h2 className='subHeader'>Technologies</h2>
                <p className='listText'>
                  Javascript,  NodeJS,  Agile/SCRUM,  React/Redux,  CSS,  
                  Bootstrap,  HTML,  Express,  Git,  JIRA,  
                  Mocha,  MongoDB,  Loopback, MySQL
                </p>
              <h2 className='subHeader'>Links</h2> 
                <p id='links'>
                  <a className='icon' href='https://www.linkedin.com/in/cano-espinoza-b8a343193/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin}/>
                  </a>
                  <a className='icon' href='https://github.com/canoespinoza' target='_blank'>
                    <FontAwesomeIcon icon={faGithub}/>
                  </a>
                  <a className='icon' href='https://soundcloud.com/che_beats' target='_blank'>
                    <FontAwesomeIcon icon={faSoundcloud}/>
                  </a>
                  <a className='icon' href='https://www.youtube.com/channel/UCaaIItB3QrC1zfU8FiHeeCA' target='_blank'>
                    <FontAwesomeIcon icon={faYoutube}/>
                  </a>
                </p>
              <a id='resumeLink' href={resume} target='_blank'>
                <h2 id='resume'>Resume</h2>
              </a>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}