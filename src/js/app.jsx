import React from 'react';

import Sticky from 'react-sticky-el';
import Header from './components/Header';
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