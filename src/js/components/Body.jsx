import React from 'react';
import profilePic from './images/profilePic.JPG';


export default class Body extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='bodyContainer'>
          <div className='row'>
            <div className='body'>
              <img id='profilePic' src={profilePic}/>
              <h2 className='subHeader'>Technologies</h2>
                <p className='listText'>
                  Javascript,  NodeJS,  Agile/SCRUM,  React/Redux,  CSS,  
                  Bootstrap,  HTML,  Express,  Git,  JIRA,  
                  Mocha,  MongoDB,  Loopback, MySQL
                </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}