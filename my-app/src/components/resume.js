import React, { Component} from 'react';
import { Grid, Chip, Cell, Card, CardTitle, CardText, Button} from 'react-mdl';
import ReactToPrint from "react-to-print";

class Resume extends Component {
    render() {
        return(
            <div className="resume" id='root'>
                <br></br>
                <Grid className="resume-grid">
                    <Cell col={4} tablet={12} phone={12}>
                        <img src={'/rzselfie2.png'} alt='so hireable' className='avatar-resume'></img>
                        <div>
                            <h1 className="title">Ryllian Zhang</h1>
                            <table class="center">
                                <tr>
                                    <td className='center'>
                                    <a  href="www.linkedin.com/in/ryllian-zhang"><img src={'/linkedin.png'} alt='email me!' className='ico-resume-mini'></img></a>
                                    <em>www.linkedin.com/in/ryllian-zhang</em>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='center'>
                                    <a href="mailto: ryllianz@gmail.com"><img src={'/email.png'} alt='email me!' className='ico-resume-mini'></img></a>
                                    <em>ryllianz@gmail.com</em>
                                    </td>
                                </tr>
                            </table>
                        </div>
                        <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                            <CardTitle style={{color: '#fff', height: '3em', 
                            background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                Education</CardTitle>
                                <Grid style={{width: '100%'}}>
                                    <Cell col={2} hidePhone={true} style={{margin: 'auto', 'text-align': 'center', 'min-width':'2em'}}>
                                        <img src={'/UoA_logo.png'} alt='University of Auckland' className='ico-resume-edu' style={{display: 'flex'}}></img>
                                    </Cell>
                                    <Cell col={10}>
                                        <h4 id='edu-heading'>Bachelor of Mechanical Engineering (Honours)</h4>
                                        <hr class='low-margin'></hr>
                                        <p><b class='sub-heading'>University of Auckland</b></p>
                                        <p><i>2010 - 2013</i></p>
                                    </Cell>
                                </Grid>
                        </Card>
                        <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                            <CardTitle style={{color: '#fff', height: '3em', 
                            background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                            Professional Certificates</CardTitle>
                                <Grid style={{width: '100%'}}>
                                    <Cell col={2} hidePhone={true} style={{margin: 'auto', 'text-align': 'center', 'min-width':'2em'}}>
                                        <img src={'/ibm.png'} alt='IBM' className='ico-resume-edu'></img>
                                    </Cell>
                                    <Cell col={10}>
                                        <h4 id='cert-heading'>IBM Full Stack Cloud Developer</h4>
                                    </Cell>
                                    <Cell col={12}  style={{margin: '0'}}>
                                        <hr class='low-margin'></hr>
                                    </Cell>
                                    <Cell col={2} hidePhone={true} style={{margin: 'auto', 'text-align': 'center', 'min-width':'2em'}}>
                                        <img src={'/google.png'} alt='Google' className='ico-resume-edu'></img>
                                    </Cell>
                                    <Cell col={10}>
                                        <h4 id='cert-heading'>Google Project Management</h4>
                                        <h4 id='cert-heading'>Google UX Design</h4>
                                    </Cell>
                                </Grid>
                            </Card>
                        <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                            <CardTitle style={{color: '#fff', height: '3em', 
                            background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                Soft Skills</CardTitle>
                                <Grid style={{width: '90%'}}>
                                    <Cell col={6} phone={12} style={{margin: 0}}>
                                        <uL class='small-left-padding'>        
                                        <li>Problem-solving</li>
                                        <li>Creativity</li>
                                        <li>Adaptability</li>
                                        </uL>
                                    </Cell>
                                    <Cell col={6} phone={12} style={{margin:0}}>
                                        <uL class='small-left-padding'>
                                        <li>Communication</li>
                                        <li>Time management</li>
                                        <li>Leadership</li>
                                        </uL>
                                    </Cell>
                                </Grid>
                        </Card>
                        <Card shadow={0} style={{width: '100%'}} id='resume-entry'>
                            <CardTitle style={{color: '#fff', height: '3em', 
                            background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                Technical Skills</CardTitle>
                            <CardText>
                                <table style={{width: '100%', 'padding-left': '1em', 'padding-right': '1em'}}>
                                    <tr><th>CAD</th></tr>
                                    <tr><Chip>SolidWorks</Chip><Chip>Siemens NX</Chip><Chip>AutoCAD LT</Chip><Chip>AutoCAD Electrical</Chip></tr>
                                    <hr class='low-margin'></hr>
                                    <tr><th>CAM</th></tr>
                                    <tr><Chip>edgeCAM</Chip><Chip>NX CAM</Chip><Chip>Fusion360</Chip><Chip>MasterCAM</Chip></tr>
                                    <hr class='low-margin'></hr>
                                    <tr><th>Simulation (FEA)</th></tr>
                                    <tr><Chip>Ansys Workbench</Chip><Chip>Ansys Icepak</Chip></tr>
                                    <hr class='low-margin'></hr>
                                    <tr><th>Programming</th></tr>
                                    <tr><Chip>Python</Chip><Chip>C#</Chip><Chip>VBA</Chip><Chip>C++</Chip><Chip>MATLAB</Chip><Chip>NI LabView</Chip><Chip>HTML</Chip><Chip>CSS</Chip></tr>
                                    <hr class='low-margin'></hr>
                                    <tr><th>Productivity</th></tr>
                                    <tr><Chip>Confluence</Chip><Chip>Adobe Photoshop</Chip><Chip>GIMP</Chip><Chip>VS Code</Chip><Chip>PyCharm</Chip></tr>
                                </table>
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
                                        <img src={'/liongarage_logo.png'} alt='Lion Garage' className='ico-resume'></img></td>
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
                        <Card shadow={0} style={{width: 'auto', margin:'auto'}} id='resume-entry'>
                            <CardTitle style={{color: '#fff', height: '3em', 
                            background: 'linear-gradient(80deg, #000428, #004e92)'}}>
                                Interests</CardTitle>
                            <Grid style={{width: 'auto',}}>
                                <Cell col={2} phone={4} style={{margin: 'auto', 'width':'auto'}}>
                                <img src={'/hiking.png'} alt='Hiking' className='ico-resume-interests'></img>
                                </Cell>
                                <Cell col={2} phone={4} style={{margin: 'auto', 'width':'auto'}}>
                                <img src={'/diving.png'} alt='Diving' className='ico-resume-interests'></img>
                                </Cell>
                                <Cell col={2} phone={4} style={{margin: 'auto', 'width':'auto'}}>
                                <img src={'/cars.png'} alt='Cars and engines in general!' className='ico-resume-interests'></img>
                                </Cell>
                                <Cell col={2} phone={4} style={{margin: 'auto', 'width':'auto'}}>
                                <img src={'/reading.png'} alt='Reading, mostly fiction' className='ico-resume-interests'></img>
                                </Cell>
                                <Cell col={2} phone={4} style={{margin: 'auto', 'width':'auto'}}>
                                <img src={'/fishing.png'} alt='Fishing' className='ico-resume-interests'></img>
                                </Cell>
                                <Cell col={2} phone={4} style={{margin: 'auto', 'width':'auto'}}>
                                <img src={'/gaming.png'} alt='Gaming, especially in VR' className='ico-resume-interests'></img>
                                </Cell>
                            </Grid>
                        </Card>
                    </Cell>
                </Grid>
                <br></br>
                <style>
                    {`@media print {
                        .avatar-resume{  
                            width: 2cm;
                            height: auto;
                            margin-top: 0;
                            margin-left: auto;
                            margin-right: auto;
                            border-radius: 15px;
                            border-style: solid;
                            border-width: thin;
                            border-color: #a7a7a733;
                            box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 1);
                        }
                        #edu-heading {
                            margin-top: 0cm !important;
                            margin-bottom: 0cm !important;
                            font-size: medium;
                            font-weight: bolder;
                        }
                        #cert-heading {
                            margin-top: 0cm !important;
                            margin-bottom: 0cm !important;
                            font-size: small;
                            font-weight: bolder;
                        }
                        #exp-heading {
                            margin-top: 0cm !important;
                            margin-bottom: 0cm !important;
                            line-height: 1.5em;
                            font-size: large;
                            font-weight: bolder;
                        }
                        .ico-resume {
                            width: 1cm;
                            padding: 0.5em;
                            margin-right: 0.5em;
                        }
                        .print-banner {
                            display: none;
                        }
                        .ico-resume-mini {
                            width: 0.5cm;
                            margin:0.2em;
                            padding-right: 0.5em;
                        }
                        .ico-resume-interests {
                            max-width: 1cm !important;
                            padding: 0.2cm;
                        }
                        hr.low-margin {
                            margin: 0.05cm;
                        }
                        .mdl-card__title-text{
                            color: rgb(255, 255, 255) !important;
                        }
                        a[href]:after {
                            content: none !important;
                        }
                    }`
                    }
                </style>
            </div>
        )
    }
}

class PrintWrapper extends React.Component {
    render() {
        return (
        <div className='gradient-background'>
            <Resume ref={el => (this.componentRef = el)} />
            <ReactToPrint 
            trigger={() => <div class="print-banner"><img src={'/printer.png'} alt='Print' className='ico-print'></img><Button raised ripple colored>Print Me</Button></div>}
            content={() => this.componentRef}
            />
        </div>
        );
        }
}


export default PrintWrapper;