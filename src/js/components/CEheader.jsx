import React from 'react';
import {NavBar} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin, faGithub, faSoundcloud, faYoutube} from '@fortawesome/free-brands-svg-icons';
import resume from '../assets/documents/Cano Espinoza Resume.pdf';
import logo from '../assets/images/CElogo7.png';

export default class CEheader extends React.Component {

//   componentDidMount() {
//     window.addEventListener("scroll", this.handleScroll);
//   }

//   componentWillUnmount() {
//     window.removeEventListener("scroll", this.handleScroll);
//   }


// handleScroll(e) {
//   if (window.scrollY > 100) {
//     document.querySelector(".logo").className = "logo-hidden";
//   } 
//   else {
//     document.querySelector(".logo").className = "logo";
//   }
// };

  render() {
    return (
      <div className='overall-container'>
        <div className='header-container'>
            <div id='header'>
              <img className='logo' src={logo}/>
              {/* <div id='title'>Cano Espinoza</div> */}
              <div id='links'>
                <a id='resume-link' href={resume} target='_blank'>
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
