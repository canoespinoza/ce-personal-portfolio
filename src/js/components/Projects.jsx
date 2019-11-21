import React from 'react';
import mortgageCalc from './images/mortgageCalc.png';
import vstda from './images/vstda.png';
import sdTopSpots from './images/sdtopspots.png';

export default class Projects extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <h1 className='sectionTitle'>Projects</h1>
        <div className='bodyContainer'>
            <div className='projectBody'>
              <div className='sectionBody'>
                <div className='projectLink'>
                  <a href='https://ce-mortgage-calculator.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={mortgageCalc}></img>
                  </a>
                  <div className='projectInfo'>
                    <h4 className='projectTitle'>Mortgage Calculator:</h4>  
                    <a className='gitLink' href='https://github.com/canoespinoza/React-Mortgage-Calculator'>
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
                    <a className='gitLink' href='https://github.com/canoespinoza/React100-VSTDA'>
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
                    <a className='gitLink' href='https://github.com/canoespinoza/React100-San-Diego-Top-Spots'>
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