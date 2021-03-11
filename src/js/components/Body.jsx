import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button, Item } from '@material-ui/core'
//import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

// import heroPic from '../assets/images/sd-skyline.jpeg';

export default class Body extends React.Component {

  render() {

    var items = [
      {
          name: "Random Name #1",
          description: "Probably the most random thing you have ever seen!"
      },
      {
          name: "Random Name #2",
          description: "Hello World!"
      }
  ]
    return (
      <div className="overall-container">
        <div className="body-container">
        <Carousel
        next={ () => {{
          items.map( (item, i) => <Item key={i} item={item} /> )
      }} }
        prev={ () => {{
          items.map( (item, i) => <Item key={i-1} item={item-1} /> )
      }} }
    >
        
    </Carousel>
          {/* <div className='picContainer'>
              <img id='heroPic' src={heroPic}/>
              <h2 className='subHeader'>What's up!</h2>
              <p className='listText'>
                My name is Cano, I'm a Full Stack Developer living in San Diego, CA. 
              </p>
            </div> */}
          {/* <React.Fragment>
            <CssBaseline />
            <Container maxWidth="xl" padding="0">
              <Typography
                component="div"
                style={{ backgroundColor: "#cfe8fc", height: "10vh" }}
              />
            </Container>
          </React.Fragment> */}
        </div>
      </div>
    );
  }
}
