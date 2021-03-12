import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import limlogo from '../assets/images/limitless-new.png';
import vstda from '../assets/images/vstda-new.png';
import sdTopSpots from '../assets/images/sdtopspots-new.png';
import vcsg from '../assets/images/vcsg.png';
import evochiro from '../assets/images/evolutionchiro.png';
import makecoolbeats from '../assets/images/makecoolbeats-new.png';

export default class Projects extends React.Component {

  render() {
    return (
      <div className='overall-container'>
        {/* <h1 className='section-title'>Projects</h1> */}
        <div className='body-container'>
            <div className='project-body'>

              <div className='section-body'>

              <div className='project-link' id='evochiro'> 
                  <a href='https://www.evolutionchiro.com/' target='_blank'>
                    <img className='proj-image' src={evochiro}></img>
                  </a>
                  <div className='project-info'>
                    <h4 className='project-title'>Evolution Chiropractic</h4>  
                    <a className='git-link' href='https://www.evolutionchiro.com/' target='_blank'>
                      <Button class='button-1'>
                        View Website
                      </Button>
                    </a>
                    <ul className='project-description'>
                      <li>HTML, CSS, October CMS</li>
                    </ul>
                  </div>
                </div>  
                
              <div className='project-link' id='vcsg'> 
                  <a href='https://www.vcsgvets.com/' target='_blank'>
                    <img className='proj-image' src={vcsg}></img>
                  </a>
                  <div className='project-info'>
                    <h4 className='project-title'>VCSG</h4>  
                    <a className='git-link' href='https://www.vcsgvets.com/' target='_blank'>
                      <Button class='button-1'>
                        View Website
                      </Button>
                    </a>
                    <ul className='project-description'>
                      <li>HTML, CSS, October CMS</li>
                    </ul>
                  </div>
                </div>  

                <div className='project-link' id='limitless'>
                  <a href='https://www.linkedin.com/company/im-limitless-llc/about/' target='_blank'>
                    <img className='proj-image' id='lim-logo' src={limlogo}></img>
                  </a>
                  <div className='project-info'>
                    <h4 className='project-title'>IM LIMITLESS</h4>
                    <a className='git-link' href='https://www.linkedin.com/company/im-limitless-llc/about/' target='_blank'>
                      <Button class='button-1'>
                        Learn More
                      </Button>
                    </a>  
                    <ul className='project-description'>
                      <li>Goal-tracking mobile app that provides rewards through partnerships with local businesses</li>
                      <li>React Native, Javascript, PostgreSQL, Go</li>
                      <li>Coming soon...</li>
                    </ul>
                  </div>
                </div>

                <div className='project-link' id='makecoolbeats'>  
                  <a href='https://www.makecoolbeats.com' target='_blank'>
                    <img className='proj-image' src={makecoolbeats}></img>
                  </a>
                  <div className='project-info'>
                    <h4 className='project-title'>make cool beats</h4>
                      <ButtonGroup 
                        orientation='vertical'>
                        <a className='git-link' href='https://www.makecoolbeats.com' target='_blank'>  
                            <Button class='button-1' size='large'>
                              View WebApp
                            </Button>
                        </a>  
                        <a className='git-link' href='https://github.com/canoespinoza/make-cool-beats' target='_blank'>
                          <Button class='button-2' size='large'>
                            View Github
                          </Button>
                        </a>
                      </ButtonGroup>
                    <ul className='project-description'>
                      <li>A free, mobile-first drum pad that accurately represents what professional music producers use</li>
                      <li>Sleek, simple, interactive UI that is perfect for mobile use </li>
                      <li>Created the website with the goal of bringing the fun of beat-making to the masses</li>
                      <li>Javascript, Howler.js, CSS Grid</li>
                    </ul>
                  </div>
                </div> 

                <div className='project-link' id='vstda'>  
                  <a href='https://ce-vstda.herokuapp.com/' target='_blank'>
                    <img className='proj-image' src={vstda}></img>
                  </a>
                  <div className='project-info'>
                    <h4 className='project-title'>Very Simple ToDo App:</h4>  
                    <a className='git-link' href='https://github.com/canoespinoza/React100-VSTDA' target='_blank'>
                      <ButtonGroup 
                          orientation='vertical'>
                          <a className='git-link' href='https://ce-vstda.herokuapp.com/' target='_blank'>  
                              <Button class='button-1' size='large'>
                                View WebApp
                              </Button>
                          </a>  
                          <a className='git-link' href='https://github.com/canoespinoza/React100-VSTDA' target='_blank'>
                            <Button class='button-2' size='large'>
                              View Github
                            </Button>
                          </a>
                        </ButtonGroup>
                    </a>
                    <ul className='project-description'>
                      <li>Features include adding todo items, color-coding them based on priority, marking them as completed, removing them from the list, and editing them. </li>
                      <li>Javascript, React, Bootstrap, Express</li>
                    </ul>
                  </div>
                </div> 

                <div className='project-link' id='sdtopspots'> 
                  <a href='https://ce-sd-topspots.herokuapp.com/' target='_blank'>
                    <img className='proj-image' src={sdTopSpots}></img>
                  </a>
                  <div className='project-info'>
                    <h4 className='project-title'>San Diego Top Spots:</h4>  
                    <a className='git-link' href='https://github.com/canoespinoza/React100-San-Diego-Top-Spots' target='_blank'>
                      <ButtonGroup 
                          orientation='vertical'>
                          <a className='git-link' href='https://ce-sd-topspots.herokuapp.com/' target='_blank'>  
                              <Button class='button-1' size='large'>
                                View WebApp
                              </Button>
                          </a>  
                          <a className='git-link' href='https://github.com/canoespinoza/React100-San-Diego-Top-Spots' target='_blank'>
                            <Button class='button-2' size='large'>
                              View Github
                            </Button>
                          </a>
                        </ButtonGroup>
                    </a>
                    <ul className='project-description'>
                      <li>Displays a short description of a fun activity in San Diego</li>
                      <li>Integrates Google Maps API to display location link</li>
                      <li>Javascript, React, Bootstrap, Express, Axios</li>
                    </ul>
                  </div>
                </div>  

              </div>
            </div>
        </div>
      </div>
    )
  }
}