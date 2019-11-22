import React from 'react';

//import Header from './components/Header.jsx';
import Body from './components/Body.jsx';
import Projects from './components/Projects.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Header/> */}
        <Body/>
        <Projects/>
      </div>
    )
  }
}