import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Projects from './components/Projects'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <Body/>
        <Projects/>
      </div>
    )
  }
}