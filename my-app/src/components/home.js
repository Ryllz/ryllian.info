import React, { Component } from 'react';
import { Grid, Button, Cell, Card, CardTitle, CardText, CardActions } from 'react-mdl';
import ParticlesBg from 'particles-bg'
class Home extends Component {
        render() {
            return(
                <div style={{width:'100%', margin: 'auto'}}>
                    <Cell col={12}>
                        <img src={'./rzselfie.png'} alt='avatar' className='avatar-main'></img>
                    </Cell>
                    <br></br>
                    <h1 className="title">Senior Hardware Engineer</h1>
                    <Grid className="home-grid">
                    <hr class="short1"/>
                        <Cell col={12} align='middle'>
                            <div className='intro-box'>
                            <Grid className="skill-grid">
                                <Cell col={3} phone={12}>
                                    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                        <CardTitle style={{color: '#fff', height: '5vh',
                                            background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(255,81,47,0.8) 100%) center / cover'}}>
                                            Robotics</CardTitle>
                                        <CardText>
                                            <p>General mechatronics expertise in robotic systems and auxiliary modules.</p>
                                            <CardActions border>
                                            <img src={'./industrial-robot.png'} alt='robot_logo' className='skill-ico'></img>
                                            </CardActions>
                                        </CardText>
                                    </Card>
                                    </Cell>
                                <Cell col={3} phone={12}>
                                    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                        <CardTitle style={{color: '#fff', height: '5vh', 
                                        background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(12,79,5,0.7) 100%) center / cover'}}>
                                            Industrial Machinery</CardTitle>
                                        <CardText>
                                            <p>Experienced in the design of precision drilling/milling/plasma CNC platforms.</p>
                                            <CardActions border>
                                            <img src={'./machinery.png'} alt='machinery_logo' className='skill-ico'></img>
                                            </CardActions>
                                        </CardText>
                                    </Card>
                                </Cell>
                                <Cell col={3} phone={12}>
                                    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                        <CardTitle style={{color: '#fff', height: '5vh', 
                                        background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(55,59,68,0.9) 100%) center / cover'}}>
                                            Fixture Design</CardTitle>
                                        <CardText>
                                            <p>Skilled in design of precision fixtures for use in both production & test environments.</p>
                                            <CardActions border>
                                            <img src={'./cogwheel.png'} alt='cogwheel_logo' className='skill-ico'></img>
                                            </CardActions>
                                        </CardText>
                                    </Card>
                                </Cell>
                                <Cell col={3} phone={12}>
                                    <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
                                        <CardTitle style={{color: '#fff', height: '5vh', 
                                        background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(24,90,157,0.9) 100%) center / cover'}}>
                                            Process Automation</CardTitle>
                                        <CardText>
                                            <p>Driving continuous improvement across production and R&D processes.</p>
                                            <CardActions border>
                                            <img src={'./automation.png'} alt='automation_logo' className='skill-ico'></img>
                                            </CardActions>
                                        </CardText>
                                    </Card>
                                </Cell>
                            </Grid>
                        </div>
                        </Cell>
                    </Grid>
                    <h1 className='title'>About Me</h1>
                    <hr class="short1"/> 
                    <Grid className="about-grid">
                        <div className='about-box'>
                            <Cell col={12} align='middle'>
                                <div id='aboutme'></div>
                                <p1> I'm an avid learner that pursued a career in engineering, to satisfy my natural curiosity in how things work.
                                <br></br> Although my background is in mechanical engineering, I pride myself in a diverse range of interests and hobbies which add to my problem solving toolkit.
                                </p1>
                                <br></br>
                                <p2><br></br>...for example, building this website to build some basic skills in git and frontend/backend web development.</p2>&#128516;
                            </Cell>
                        </div>
                    </Grid>
                    <h1 className='title'>Project Highlights</h1>
                    <hr class="short1"/> <br></br>
                    <div className='project-box'>
                    <Grid className="project-grid">
                        <Cell col={3} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Electric Bike</CardTitle>
                            <CardText>
                                "asdasd"
                            </CardText>
                            <CardActions border>
                            <Button colored>Details</Button>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Engagement Ring Box</CardTitle>
                            <CardText>
                                "asdasd2"
                            </CardText>
                            <CardActions border>
                            <Button colored>Details</Button>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={3} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>4kW BMX E-Bike</CardTitle>
                            <CardText>
                                "asdasd2"
                            </CardText>
                            <CardActions border>
                            <Button colored>Details</Button>
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