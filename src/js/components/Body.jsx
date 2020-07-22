import React from 'react';
import heroPic from '../assets/images/sd-skyline.jpeg';

export default class Body extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='bodyContainer'>
            <div className='picContainer'>
              <img id='heroPic' src={heroPic}/>
              <h2 className='subHeader'>What's up!</h2>
              <p className='listText'>
                My name is Cano, I'm a Full Stack Developer living in San Diego, CA. 
              </p>
            </div>
        </div>
      </div>
    )
  }
}