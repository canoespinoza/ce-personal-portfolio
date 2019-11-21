import React from 'react';

//import Header from './components/Header';
import Sticky from 'react-sticky-el';
import Body from './components/Body';
import Projects from './components/Projects'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Sticky>
          <Header/>
        </Sticky>
        <Body/>
        <Projects/>
      </div>
    )
  }
}