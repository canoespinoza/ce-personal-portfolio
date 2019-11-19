import React from 'react';
import profilePic from './images/profilePic.JPG';


export default class Body extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='bodyContainer'>
          <div className='body'>
            <div className='picContainer'>
              <img id='profilePic' src={profilePic}/>
            </div>
            <h2 className='subHeader'>What's up!</h2>
              <p className='listText'>
                My name is Cano Espinoza, I'm a Full Stack Web Developer and San Diego, CA native.
                The majority of my education and work experience is in music and the recording arts.
                I have worked as an audio engineer in both studio and live settings. I was drawn towards 
                web development because of its practicality and versatility, and after learning how to write code,
                I fell in love with it. I enjoy using my creativity and problem-solving skills to craft beautiful and
                high-functioning apps and webpages. I enjoy collaborating, working on a team, and building projects from 
                the ground up. I live by the motto "Always be moving forward," so I strive to be continously honing my skills,
                learning new things, and growing more successful.  
              </p>
          </div>
        </div>
      </div>
    )
  }
}