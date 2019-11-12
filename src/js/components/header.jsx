import React from 'react';

import logo from './images/CElogo1.png'

export default class header extends React.Component {

  render() {
    return (
      <div className='overallContainer'>
        <div className='headerContainer'>
          <div className='row'>
            <div className='col-12'>
              <div id='header'>
                <img id='logo' src={logo}/>
                <div id='title'>Cano Espinoza</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}