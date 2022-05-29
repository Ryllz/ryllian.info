import React, { Component } from 'react';
import { Grid, Button, Cell, Card, CardTitle, CardText, CardActions, IconButton, CardMenu } from 'react-mdl';

class Resume extends Component {
        render() {
            return(
                <div className='gradient-background'>
                    <div className="resume">
                        <br></br>
                        <Grid className="resume-grid">
                            <Cell col={4} phone={12}>
                                <img src={'./rzselfie2.png'} alt='hire me :)' className='avatar-resume'></img>
                                <div class='center-text'>
                                    <h1 className="title">Ryllian Zhang</h1>
                                </div>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3.5em', 
                                    background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Education</CardTitle>
                                    <CardText>
                                        <h4 id='edu-heading'>Bachelor of Mechanical Engineering (Honours)</h4>
                                        <hr class='low-margin'></hr>
                                        <p><b class='sub-heading'>University of Auckland</b></p>
                                        <p><i>2010 - 2013</i></p>
                                    </CardText>
                                </Card>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3.5em', 
                                    background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Skills</CardTitle>
                                    <CardText>

                                    </CardText>
                                </Card>
                            </Cell>
                            <Cell col={8} phone={12}>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3.5em', background: 'linear-gradient(80deg, #141E30, #243B55)'}}>
                                        Experience
                                    </CardTitle>
                                            <CardText id='resume-indent'>
                                            <h4 id='edu-heading'>Apple</h4>
                                            <p><b class='sub-heading'>Senior Hardware Engineer</b></p>
                                            <p class='date-box'>
                                            <i>Aug 2018 - Current</i>
                                            </p>
                                            <p>123</p>
                                            </CardText>
                                        <hr class='low-margin'></hr>
                                            <CardText id='resume-indent'>
                                            <h4 id='edu-heading'>Kinetic Engineering</h4>
                                            <p><b class='sub-heading'>Mechanical Design Engineer</b></p>
                                            <p><i>Sep 2014 - Aug 2018</i></p>
                                            <ul>
                                                <li>Responsible for all CAM programming of standard and custom CNC milling machines.</li>
                                                <li>Design of industrial CNC platforms and auxiliary tool systems.</li>
                                                <li>Mechanical design of autonomous plate processing machinery.</li>
                                                <li>Creation of CAD assistant plug-ins in C# for streamlining SolidWorks PDM and manufacturing drawing workflow management.</li>
                                            </ul>
                                            </CardText>
                                        <hr class='low-margin'></hr>
                                            <CardText id='resume-indent'>
                                            <h4 id='edu-heading'>Compac Sorting Systems</h4>
                                            <p><b class='sub-heading'>R&D Engineer</b></p>
                                            <p><i>Oct 2013 - Sep 2014</i></p>
                                            <ul>
                                                <li>Design of machined and sheetmetal parts for various sensor products.</li>
                                                <li>On-site installation + commissioning of prototypes, including scientific data collection and post-processing.</li>
                                                <li>Continuous improvements to MATLAB scripts to decrease statistical model generation times.</li>
                                                <li>Documentation and continuous improvement of production assembly processes.</li>
                                            </ul>
                                            </CardText>
                                        <hr class='low-margin'></hr>
                                            <CardText id='resume-indent'>
                                            <h4 id='edu-heading'>Scott PHS</h4>
                                            <p><b class='sub-heading'>Junior Design Engineer</b></p>
                                            <p><i>Apr 2012 - Feb 2013</i></p>
                                            <ul>
                                                <li>Responsible for creating tools in C# and VBA which interface with SolidWorks 2012, to fully automate the BOM creation and review process.</li>
                                                <li>Creation of parts library management/cleanup scripts to unify all legacy assemblies.</li>
                                                <li>Creation of expression-driven part templates to dynamically generate common profiles for conveyor designs.</li>
                                                <li>Responsible for manufacturing drawings + assisting senior engineers in the design of depalletizer, conveyor and palletizer systems.</li>
                                            </ul>
                                            </CardText>
                                        <hr class='low-margin'></hr>
                                            <CardText id='resume-indent'>
                                            <h4 id='edu-heading'>Lion Garage</h4>
                                            <p><b class='sub-heading'>Assistant Mechanic</b></p>
                                            <p><i>Nov 2011 - Feb 2012</i></p>
                                            <ul>
                                                <li>Assisting with day to day customer service.</li>
                                                <li>Repair and assembly/disassembly of various petrol engines + transmissions, MIG welding, bodywork repair, and general labour tasks.</li>
                                            </ul>
                                            </CardText>
                                </Card>
                            </Cell>
                        </Grid>
                        <br></br>
                    </div>
                </div>
            )
        }
}

export default Resume;