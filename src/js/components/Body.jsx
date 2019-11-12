import React from 'react';

import profilePic from './images/profilePic.JPG'

export default class Body extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='bodyContainer'>
          <div className='row'>
            <div id='body'>
              <img id='profilePic' src={profilePic}/>
              <h2 className='subHeader'>Technologies</h2>
                <ul>
                  <li className='list'>Javascript</li>
                  <li className='list'>NodeJS</li>
                  <li className='list'>Agile/SCRUM</li>
                  <li className='list'>React/Redux</li>
                  <li className='list'>CSS</li>
                  <li className='list'>Bootstrap</li>
                  <li className='list'>HTML</li>
                  <li className='list'>CSS</li>
                  <li className='list'>Express</li>
                  <li className='list'>Git</li>
                  <li className='list'>JIRA</li>
                  <li className='list'>Mocha</li>
                  <li className='list'>MongoDB</li>
                  <li className='list'>Loopback</li>
                  <li className='list'>MySQL</li>
                </ul>
              <h2 className='subHeader col-4'>Links</h2>  
            </div>
          </div>
        </div>
      </div>
    )
  }
}