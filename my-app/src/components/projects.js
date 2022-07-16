import React, { Component } from 'react';
import { Grid, Button, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';

class Projects extends Component {
    render() {
        return(
            <div className="project-tabs">
            <h2 style={{textAlign:'center'}}>Personal Projects</h2>
                <hr class="short1"/>
                <div className='project-box'>
                    <Grid className='project-grid'>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/cnc_1.jpg) center / cover no-repeat'}}><h3 class='project-title'>CNC Wood Router</h3></CardTitle>
                            <CardText>
                                Baby steps on my journey in designing CNC platforms
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/cnc_wood_router"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/ringbox_1.jpg) center / cover no-repeat'}}><h3 class='project-title'>Engagement Ring Box</h3></CardTitle>
                            <CardText>
                                A mix of design, CAM + CNC milling, laser cutting and 3D printing
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/engagement_ring_box"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/ebike_1.png) center / cover no-repeat'}}><h3 class='project-title'>Electric BMX Bike</h3></CardTitle>
                            <CardText>
                                Who needs suspension, brakes and gears anyways?
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/electric_bmx_bike"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/this_page.png) center / cover no-repeat'}}><h3 class='project-title'>This Website</h3></CardTitle>
                            <CardText>
                                Getting more familiar with web-based programming skills
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/this_page"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle expand style={{height: '20em', color: '#fff', background: 'url(/bottle_design1.jpg) center / cover no-repeat'}}><h3 class='project-title'>Mead Brewing</h3></CardTitle>
                            <CardText>
                                The flavours of process control, repeatability and reproducibility
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/mead_brewing"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle expand style={{height: '20em', color: '#fff', background: 'url(/infinity_mirror1.png) center / cover no-repeat'}}><h3 class='project-title'>Disco Infinity Mirror</h3></CardTitle>
                            <CardText>
                                ...and other LED + Arduino projects
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/infinity_mirror"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle expand style={{height: '20em', color: '#fff', background: 'url(/laser_turret.jpg) center / cover no-repeat'}}><h3 class='project-title'>Webcam/Laser Turret</h3></CardTitle>
                            <CardText>
                                Pew pew pew with OpenCV
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/laser_turret"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <br></br>
                    </Grid>
                </div>
                <br></br>
                <h2 style={{textAlign:'center'}}>Professional Projects</h2>
                <hr class="short1"/>
                <div className='project-box'>
                    <Grid className='project-grid'>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/daisy_stamper1.png) center / cover no-repeat'}}><h3 class='project-title'>Roller Stamper</h3></CardTitle>
                            <CardText>
                                Material hardness, and learnings in high force timing belt applications
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/daisywheel_stamper"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/hydraulic_systems.png) center / cover no-repeat'}}><h3 class='project-title'>Hydraulic System Design</h3></CardTitle>
                            <CardText>
                                The familiarity of pneumatics, but much less forgiving
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/hydraulic_systems"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/plate_conveyor1.JPG) center / cover no-repeat'}}><h3 class='project-title'>Designing for Safety</h3></CardTitle>
                            <CardText>
                                Ensuring operator safety of heavy plate conveyors
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/plate_conveyor"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/m100_cover.png) center / cover no-repeat'}}><h3 class='project-title'>Workshop-scale Milling</h3></CardTitle>
                            <CardText>
                                High stakes CAM programming on a 13.3m x 2.7m x 1.8m mill
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/M100_cam"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/unloader_cover1.png) center / cover no-repeat'}}><h3 class='project-title'>Plate Unloading Robot</h3></CardTitle>
                            <CardText>
                                Industrial AGV-style platform for picking and palletizing plasma cut steel parts with 5 axis of motion
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/part_unloader"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/meca500_cover.png) center / cover no-repeat'}}><h3 class='project-title'>6-Axis Robot Calibration</h3></CardTitle>
                            <CardText>
                                <b>(PAGE WIP)</b> Notes on manipulating Euler angles used in many 6-axis robot systems
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/solidworks_csharp.png) center / cover no-repeat'}}><h3 class='project-title'>C# SolidWorks API Integration</h3></CardTitle>
                            <CardText>
                                <b>(PAGE WIP)</b> Apps and add-ons using the SolidWorks + PDMWorks APIs
                            </CardText>
                            <CardActions border>
                            <Link to="/projects/csharp_solidworks"><Button colored>Details</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <br></br>
                    </Grid>
                </div>
                <br></br>
                <br></br>
            </div>
        )
    }

}

export default Projects;

