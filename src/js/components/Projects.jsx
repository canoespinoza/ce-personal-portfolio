import React from 'react';
import mortgageCalc from './images/mortgageCalc.png';
import vstda from './images/vstda.png';
import sdTopSpots from './images/sdtopspots.png';
import CRLee from './images/C.R. Lee (1).webm';

export default class Projects extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='bodyContainer'>
            <div className='projectBody'>
              <div className='sectionBody'>
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
                    <div className='projectDescription'>
                      This is a screencast walkthrough of Ms. Lee's brand website. A team and I were asked to transition Ms. Lee's personal site out of Wordpress and into React.
                      We were given content and a color scheme, but we had free reign to structure out 
                      the site how we saw fit. I designed and built the Credentials and Achievements pages (timestamps 0:39 and 1:04), 
                      which the team decided to adopt as the standard layout for each page. The site is fully-responsive and
                      looks great on mobile devices (timestamp 2:00). Ms. Lee was extremely happy with our work. 
                    </div>
                  </div>
                </div>
                <div className='projectLink'>
                  <a href='https://ce-mortgage-calculator.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={mortgageCalc}></img>
                  </a>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>Mortgage Calculator:</h4>  
                    <a className='gitLink' href='https://github.com/canoespinoza/React-Mortgage-Calculator' target='_blank'>
                      https://github.com/canoespinoza/React-Mortgage-Calculator
                    </a>
                    <div className='projectDescription'>
                      Want to know your mortgage payments? This app accepts input for a loan amount,
                      an interest rate, and a term length, then calculates your mortgage payment one the button 
                      is clicked. Built using Javascript, React, Bootstrap, and Express.
                    </div>
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
                    <div className='projectDescription'>
                      Keep track of all your tasks using this todo app. Features include adding todo items, color-coding them
                      based on priority, marking them as completed, removing them from the list, and editing them. 
                      Built using Javascript, React, Bootstrap, and Express.
                    </div>
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
                    <div className='projectDescription'>
                      Discover fun things to do in San Diego with this app. Displays a short description of the activity and a map 
                      to it's location Google maps.
                      Built using  Javascript, React, Bootstrap, Express, and Axios.
                    </div>
                  </div>
                </div>  
              </div>
            </div>
        </div>
      </div>
    )
  }
}