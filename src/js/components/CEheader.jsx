import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faSoundcloud, faYoutube} from '@fortawesome/free-brands-svg-icons';
import resume from '../assets/documents/CanoEspinozaResume.pdf';
import logo from '../assets/images/CElogo7.png';

export default class CEheader extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='headerContainer'>
            <div id='header'>
              <img id='logo' src={logo}/>
              <div id='title'>Cano Espinoza</div>
              <div id='links'>
                <a id='resumeLink' href={resume} target='_blank'>
                  <div id='resume'>Resume</div>
                </a>  
                <a className='icon' href='https://www.linkedin.com/in/cano-espinoza/' target='_blank'>
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
              </div>   
            </div>
        </div>
      </div>
    )
  }
}
