import React from 'react';
import mortgageCalc from './images/mortgageCalc.png';
import vstda from './images/vstda.png';
import sdTopSpots from './images/sdtopspots.png';

export default class Projects extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='bodyContainer'>
            <div className='projectBody'>
              <h1 className='sectionTitle'>Projects</h1>
              <div className='sectionBody'>
                <div className='projectLink'>
                  <a href='https://ce-mortgage-calculator.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={mortgageCalc}></img>
                  </a>
                </div>
                <div className='projectLink'>  
                  <a href='https://ce-vstda.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={vstda}></img>
                  </a>
                </div> 
                <div className='projectLink'> 
                  <a href='https://ce-sd-topspots.herokuapp.com/' target='_blank'>
                    <img className='projImage' src={sdTopSpots}></img>
                  </a>
                </div>  
              </div>
            </div>
        </div>
      </div>
    )
  }
}