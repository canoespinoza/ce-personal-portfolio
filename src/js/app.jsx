import React from 'react';

import CEheader from './components/CEheader'
//import Body from './components/Body';
import Projects from './components/Projects';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <CEheader/>

        <Projects/>
      </div>
    )
  }
}