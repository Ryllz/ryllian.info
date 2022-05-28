import React, { Component } from 'react';
import { Grid, Button, Cell, Card, CardTitle, CardText, CardActions, IconButton, CardMenu } from 'react-mdl';
import ParticlesBg from 'particles-bg';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <div style={{width:'100%', margin: 'auto'}}>
                <Cell col={12}>
                    <img src={'./rzselfie.png'} alt='avatar' className='avatar-main'></img>
                </Cell>
                <br></br>
                <h1 className="title">Senior Hardware Engineer</h1>
                <hr class="short1"/>
                <div className='intro-box'>
                    <Grid className="skill-grid">
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '4em',
                                    background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(255,81,47,0.8) 100%) center / cover'}}>
                                    Robotics</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>General mechatronics expertise with robotic systems and auxiliary modules.</p>
                                </CardText>
                                <img src={'./industrial-robot.png'} alt='robot_logo' className='skill-ico'></img>
                            </Card>
                            </Cell>
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '4em', 
                                background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(12,79,5,0.7) 100%) center / cover'}}>
                                    Industrial Machinery</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>Experienced in the design of precision drilling/milling/plasma CNC platforms.</p>
                                </CardText>
                                <img src={'./machinery.png'} alt='machinery_logo' className='skill-ico'></img>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '4em', 
                                background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(55,59,68,0.9) 100%) center / cover'}}>
                                    Fixture Design</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>Skilled in design of precision fixtures for use in both production & test environments.</p>
                                </CardText>
                                <img src={'./cogwheel.png'} alt='cogwheel_logo' className='skill-ico'></img>
                            </Card>
                        </Cell>
                        <Cell col={3} phone={12}>
                            <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                <CardTitle style={{color: '#fff', height: '4em', 
                                background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(24,90,157,0.9) 100%) center / cover'}}>
                                    Process Automation</CardTitle>
                                <CardText>
                                    <p class='no-bottom-margin'>Driving continuous improvement across production and R&D processes.</p>
                                </CardText>
                                <img src={'./automation.png'} alt='automation_logo' className='skill-ico'></img>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
    
            <h1 className='title'>About Me</h1>
            <hr class="short1"/> 
            <div className='about-box'>
            <Grid className="about-grid">
                <Cell col={12} align='middle'>
                    <div className='aboutme'></div>
                    <p1> I'm an avid learner who pursued a career in engineering to satisfy my natural curiosity in how things work.
                    <br></br> Although my experience is primarily in the mechanical specialization, I pride myself in a diverse range of interests and hobbies which add to my problem solving toolkit.
                    </p1>
                    <br></br>
                    <p2><br></br>...for example, building this website to learn some basic skills in git and frontend/backend web development </p2>&#128516;
                </Cell>
            </Grid>
            </div>
            <h1 className='title'>Personal Projects</h1>
            <hr class="short1"/>
            <div className='project-box'>
                <Grid className='project-grid'>
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                        <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/cnc_1.jpg) center / cover no-repeat'}}><h3 class='project-title'>CNC Wood Router</h3></CardTitle>
                        <CardText>
                            Prologue chapter of my journey in designing CNC platforms
                        </CardText>
                        <CardActions border>
                        <Link to="/projects/cnc_wood_router"><Button colored>Details</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={4} phone={12} align='middle'>
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
                    <Cell col={4} phone={12} align='middle'>
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
                    <Cell col={4} phone={12} align='middle'>
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
                    <Cell col={4} phone={12} align='middle'>
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
                    <Cell col={4} phone={12} align='middle'>
                        <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                        <CardTitle expand style={{height: '20em', color: '#fff', background: 'url(/laser_turret.jpg) center / cover no-repeat'}}><h3 class='project-title'>Laser Turret</h3></CardTitle>
                        <CardText>
                            Work in progress!
                        </CardText>
                        <CardActions border>
                        <Link to="/projects/laser_turret"><Button colored>Details</Button></Link>
                        </CardActions>
                        </Card>
                    </Cell>
                    <br></br>
                </Grid>
            </div>
            <ParticlesBg color="#778899" type="cobweb" bg={true}/>
        </div>
        )
    }
}
export default Home;