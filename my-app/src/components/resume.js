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
                                <img src={'/rzselfie2.png'} alt='hire me :)' className='avatar-resume'></img>
                                <div>
                                    <h1 className="title">Ryllian Zhang</h1>
                                    <table class="center">
                                        <tr>
                                            <td className='left-align'>
                                            <img src={'/email.png'} alt='email me!' className='ico-resume-mini'></img>
                                            </td>
                                            <td className='left-align'>
                                            <em>ryllianz@gmail.com</em>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                            <img src={'/linkedin.png'} alt='email me!' className='ico-resume-mini'></img>
                                            </td>
                                            <td className='left-align'>
                                            <em>www.linkedin.com/in/ryllian-zhang</em>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3em', 
                                    background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Education</CardTitle>
                                    <CardText>
                                        <table class="center">
                                            <tr>
                                                <td><img src={'/UoA_logo.png'} alt='University of Auckland' className='ico-resume-edu'></img></td>
                                                <td>
                                                    <h4 id='edu-heading'>Bachelor of Mechanical Engineering (Honours)</h4>
                                                    <hr class='low-margin'></hr>
                                                    <p><b class='sub-heading'>University of Auckland</b></p>
                                                    <p><i>2010 - 2013</i></p>
                                                </td>
                                            </tr>
                                        </table>
                                        
                                        
                                    </CardText>
                                </Card>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3em', 
                                    background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Soft Skills</CardTitle>
                                    <CardText>
                                        <uL>
                                        <li>Time management</li>
                                        <li>Communication</li>
                                        <li>Adaptability</li>
                                        <li>Problem-solving</li>
                                        <li>Creativity</li>
                                        <li>Leadership</li>
                                        </uL>
                                    </CardText>
                                </Card>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3em', 
                                    background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Technical Skills</CardTitle>
                                    <CardText>
                                        <table class='left-pad'>
                                            <tr><th>CAD</th></tr>
                                            <tr>SolidWorks &middot; Siemens NX &middot; AutoCAD LT & Electrical</tr>
                                            <hr class='low-margin'></hr>
                                            <tr><th>CAM</th></tr>
                                            <tr>edgeCAM &middot; NX CAM &middot; Fusion360 &middot; MasterCAM</tr>
                                            <hr class='low-margin'></hr>
                                            <tr><th>Simulation (FEA)</th></tr>
                                            <tr>Ansys Workbench &middot; Ansys Icepak</tr>
                                            <hr class='low-margin'></hr>
                                            <tr><th>Software</th></tr>
                                            <tr>Python &middot; C# &middot; VBA &middot; C++ &middot; MATLAB &middot; NI LabView</tr>
                                            <hr class='low-margin'></hr>
                                            <tr><th>Software IDEs</th></tr>
                                            <tr>VS Code &middot; PyCharm</tr>
                                        </table>
                                    </CardText>
                                </Card>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3em', 
                                    background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Interests</CardTitle>
                                    <CardText>
                                        <li>WIP</li>
                                    </CardText>
                                </Card>
                            </Cell>
                            <Cell col={8} phone={12}>
                                <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                                    <CardTitle style={{color: '#fff', height: '3em', background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                        Experience
                                    </CardTitle>
                                            <CardText id='resume-indent'>
                                            <table>
                                            <tr>
                                            <td>
                                                <img src={'/apple_logo.png'} alt='Apple' className='ico-resume'></img></td>
                                            <td>
                                                <h4 id='exp-heading'>Apple</h4>
                                                <p><b class='sub-heading'>Senior Hardware Engineer</b></p>
                                                <p class='date-box'>
                                                <i>Aug 2018 - Current</i>
                                                </p>
                                                </td>
                                            </tr>
                                            </table>
                                            <ul>
                                                <li>Leading automation projects for various teams across HWE/HWT groups, from initial design through to deployment.</li>
                                                <li>Development of a universal device fixture ecosystem used across Powertech & HID orgs, enabling significant UX improvements for both R&D and feature verification teams.</li>
                                                <li>Implementing processes and documentation required to unify data collection processes across regional sites.</li>
                                                <li>Developed end-to-end (from hardware & software to documentation/training) toolkits for 6-axis robot calibration co-ordinate frames.</li>
                                                <li>Management and continuous recruitment & improvement of a robotics and automation wiki/forum built on the Confluence platform.</li>
                                                <li>Responsible for on-going feature additions plus fixture updates for over 70+ automated data collection stations spread across sites in New Zealand, USA and China.</li>
                                            </ul>
                                            </CardText>
                                    <hr class='low-margin'></hr>
                                        <CardText id='resume-indent'>
                                        <table>
                                            <tr>
                                            <td>
                                                <img src={'/kinetic_logo.png'} alt='Kinetic Engineering' className='ico-resume'></img></td>
                                            <td>
                                            <h4 id='exp-heading'>Kinetic Engineering</h4>
                                            <p><b class='sub-heading'>Mechanical Design Engineer</b></p>
                                            <p><i>Sep 2014 - Aug 2018</i></p>
                                            </td>
                                            </tr>
                                            </table>
                                        <ul>
                                            <li>Responsible for all CAM programming of standard and custom CNC milling machines.</li>
                                            <li>Design of industrial CNC plasma cutting platforms and auxiliary processing and motion systems.</li>
                                            <li>Design of hydraulic and pneumatic sub-systems.</li>
                                            <li>Responsible for the continuous improvement of CAM processes.</li>
                                            <li>Creation of CAD assistant plug-ins in C# for streamlining SolidWorks PDM and manufacturing drawing workflow management.</li>
                                        </ul>
                                        </CardText>
                                    <hr class='low-margin'></hr>
                                        <CardText id='resume-indent'>
                                        <table>
                                            <tr>
                                            <td>
                                                <img src={'/compac_logo.png'} alt='Compac Sorting Equipment' className='ico-resume'></img></td>
                                            <td>
                                            <h4 id='exp-heading'>Compac Sorting Equipment</h4>
                                            <p><b class='sub-heading'>R&D Engineer</b></p>
                                            <p><i>Oct 2013 - Sep 2014</i></p>
                                            </td>
                                            </tr>
                                            </table>
                                            <ul>
                                                <li>Design of machined and sheetmetal parts for various sensor products.</li>
                                                <li>On-site installation + commissioning of prototypes, including scientific data collection and post-processing.</li>
                                                <li>Continuous improvements to MATLAB scripts to decrease statistical model generation times.</li>
                                                <li>Documentation and continuous improvement of production assembly processes.</li>
                                            </ul>
                                        </CardText>
                                    <hr class='low-margin'></hr>
                                        <CardText id='resume-indent'>
                                        <table>
                                            <tr>
                                            <td>
                                                <img src={'/scottphs_logo.png'} alt='Scott PHS' className='ico-resume'></img></td>
                                            <td>
                                            <h4 id='exp-heading'>Scott PHS</h4>
                                            <p><b class='sub-heading'>Junior Design Engineer</b></p>
                                            <p><i>Apr 2012 - Feb 2013</i></p>
                                            </td>
                                            </tr>
                                            </table>
                                            <ul>
                                                <li>Responsible for creating tools in C# and VBA which interface with SolidWorks 2012, to fully automate the BOM creation and review process.</li>
                                                <li>Creation of parts library management/cleanup C++ scripts to analyze component CAD data within model and assembly files.</li>
                                                <li>Creation of expression-driven part templates to dynamically generate common profiles for conveyor designs.</li>
                                                <li>Responsible for basic manufacturing drawings + assisting senior engineers in the design of depalletiser, conveyor and palletiser systems.</li>
                                            </ul>
                                        </CardText>
                                    <hr class='low-margin'></hr>
                                        <CardText id='resume-indent'>
                                        <table>
                                            <tr>
                                            <td>
                                                <img src={'/liongarage_logo.png'} alt='Scott PHS' className='ico-resume'></img></td>
                                            <td>
                                            <h4 id='exp-heading'>Lion Garage</h4>
                                            <p><b class='sub-heading'>Assistant Mechanic</b></p>
                                            <p><i>Nov 2011 - Feb 2012</i></p>
                                            </td>
                                            </tr>
                                            </table>
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