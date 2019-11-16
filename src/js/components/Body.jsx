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
              <h2 className='subHeader'>What's up!</h2>
                <p className='listText'>
                  My name is Cano Espinoza, I'm a Full Stack Web Developer and San Diego, CA native.
                  Newly minted Junior FullStack Web Developer excited to use, hone, and expand my skills and knowledge. 
                  I enjoy being creative, collaborating, being part of a team, learning new things, and the process of building something. 
                  Eager to grow as a developer, and determined to become an extremely versatile, knowledgeable, and successful programmer. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Proin gravida hendrerit lectus a. Ac odio tempor orci dapibus ultrices in iaculis. 
                  Quam quisque id diam vel. Quam pellentesque nec nam aliquam sem et tortor consequat. 
                </p>
                &nbsp;
            </div>
          </div>
        </div>
      </div>
    )
  }
}