import React from 'react';
import limlogo from '../assets/images/lim-logo.png';
import vstda from '../assets/images/vstda.png';
import sdTopSpots from '../assets/images/sdtopspots.png';
import CRLee from '../assets/images/C.R. Lee (1).webm';
import makecoolbeats from '../assets/images/makecoolbeats.png';

export default class Projects extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='bodyContainer'>
            <div className='projectBody'>

              <div className='sectionBody'>

                <div className='projectLink'>
                  <a href='https://www.linkedin.com/company/im-limitless-llc/about/' target='_blank'>
                    <img className='projImage' id='lim-logo' src={limlogo}></img>
                  </a>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>IM LIMITLESS</h4>
                    <a className='gitLink' href='https://www.linkedin.com/company/im-limitless-llc/about/' target='_blank'>
                      https://www.linkedin.com/company/im-limitless-llc/about/
                    </a>  
                    <ul className='projectDescription'>
                      <li>Goal-tracking mobile app that provides rewards through partnerships with local businesses</li>
                      <li>Launching August 2020</li>
                      <li>React Native, Javascript, PostgreSQL, Go</li>
                    </ul>
                  </div>
                </div>

                <div className='projectLink'>  
                  <a href='https://www.makecoolbeats.com' target='_blank'>
                    <img className='projImage' src={makecoolbeats}></img>
                  </a>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>make cool beats</h4>  
                    <a className='gitLink' href='https://github.com/canoespinoza/make-cool-beats' target='_blank'>
                    https://github.com/canoespinoza/make-cool-beats
                    </a>
                    <ul className='projectDescription'>
                      <li>A free, mobile-first drum pad that accurately represents what professional music producers use</li>
                      <li>Sleek, simple, interactive UI that is perfect for mobile use </li>
                      <li>Created the website with the goal of bringing the fun of beat-making to the masses</li>
                      <li>Javascript, Howler.js, CSS Grid</li>
                    </ul>
                  </div>
                </div> 

                <div className='projectLink'>  
                  <a href='https://ce-vstda.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={vstda}></img>
                  </a>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>Very Simple ToDo App:</h4>  
                    <a className='gitLink' href='https://github.com/canoespinoza/React100-VSTDA' target='_blank'>
                      https://github.com/canoespinoza/React100-VSTDA
                    </a>
                    <ul className='projectDescription'>
                      <li>Features include adding todo items, color-coding them based on priority, marking them as completed, removing them from the list, and editing them. </li>
                      <li>Javascript, React, Bootstrap, Express</li>
                    </ul>
                  </div>
                </div> 

                <div className='projectLink'> 
                  <a href='https://ce-sd-topspots.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={sdTopSpots}></img>
                  </a>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>San Diego Top Spots:</h4>  
                    <a className='gitLink' href='https://github.com/canoespinoza/React100-San-Diego-Top-Spots' target='_blank'>
                    https://github.com/canoespinoza/React100-San-Diego-Top-Spots
                    </a>
                    <ul className='projectDescription'>
                      <li>Displays a short description of a fun activity in San Diego</li>
                      <li>Integrates Google Maps API to display location link</li>
                      <li>Javascript, React, Bootstrap, Express, Axios</li>
                    </ul>
                  </div>
                </div>  

                <div className='projectLink'>
                  <video controls
                    src={CRLee}
                    className='projVideo'
                  >
                    <source src={CRLee} type='video/webm'/>
                    <p>Unfortunately, your browser does not support this video.
                       But you can view it here: <a href='https://drive.google.com/file/d/1hTaKlHJN49NhBqep7J1UWIpN_LnKmK6k/view?usp=sharing'
                       >C.R. Lee Walkthrough</a>
                    </p>
                  </video>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>Cheryl R. Lee's Brand Website:</h4> 
                    <ul className='projectDescription'>
                      <li>A team and I were asked to transition Ms. Lee's personal site out of Wordpress and into React.</li>
                      <li>I designed and built the Credentials and Achievements pages (timestamps 0:39 and 1:04), which the team decided to adopt as the standard layout for each page.</li>
                      <li>Fully responsive design (timestamp 2:00)</li>
                    </ul> 
                  </div>
                </div>

              </div>
            </div>
        </div>
      </div>
    )
  }
}