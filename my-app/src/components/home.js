import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText } from 'react-mdl';

class Home extends Component {
        render() {
            return(
                <div style={{width:'100%', margin: 'auto'}}>
                    <Grid className="home-grid">
                        <Cell col={12}>
                            <img src={'./rzselfie.png'} alt='avatar' className='avatar-main'></img>
                        </Cell>
                        <Cell col={12} align='middle'>
                            <div className='intro-box'>
                                <h1>Senior Hardware Engineer</h1>
                                <hr/>
                                <Grid className="skill-grid">
                                    <Cell col={3}>
                                        <Card shadow={0} style={{width: '20vw', margin: 'auto'}}>
                                                <CardTitle style={{color: '#fff', height: '80px',
                                                 background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(255,81,47,0.8) 100%) center / cover'}}>
                                                     Robotics</CardTitle>
                                                <CardText>
                                                    <p>General mechatronics system design experience.</p>
                                                </CardText>
                                        </Card>
                                    </Cell>
                                    <Cell col={3}>
                                        <Card shadow={0} style={{width: '20vw', margin: 'auto'}}>
                                                    <CardTitle style={{color: '#fff', height: '80px', 
                                                    background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(12,79,5,0.7) 100%) center / cover'}}>
                                                        Industrial Machinery</CardTitle>
                                                    <CardText>
                                                        <p>Design of precision CNC platforms and auxiliary systems.</p>
                                                    </CardText>
                                        </Card>
                                    </Cell>
                                    <Cell col={3}>
                                        <Card shadow={0} style={{width: '20vw', margin: 'auto'}}>
                                                    <CardTitle style={{color: '#fff', height: '80px', 
                                                    background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(55,59,68,0.9) 100%) center / cover'}}>
                                                        Test & Production Fixtures</CardTitle>
                                                    <CardText>
                                                        <p>Design of precision locating fixtures for use in a range of environments.</p>
                                                    </CardText>
                                        </Card>
                                    </Cell>
                                    <Cell col={3}>
                                        <Card shadow={0} style={{width: '20vw', margin: 'auto'}}>
                                                    <CardTitle style={{color: '#fff', height: '80px', 
                                                    background: 'radial-gradient(circle, rgba(67,206,162,0.6) -140%, rgba(24,90,157,0.9) 100%) center / cover'}}>
                                                        Process Automation</CardTitle>
                                                    <CardText>
                                                        <p>Implementing continuous improvement across all aspects.</p>
                                                    </CardText>
                                        </Card>
                                    </Cell>
                                </Grid>
                                <hr/>
                                <Grid className="ico-grid">
                                    <Cell col={3} align='middle'><img src={'./industrial-robot.png'} alt='robot_logo' className='skill-ico'></img></Cell>
                                    <Cell col={3} align='middle'><img src={'./machinery.png'} alt='machinery_logo' className='skill-ico'></img></Cell>
                                    <Cell col={3} align='middle'><img src={'./cogwheel.png'} alt='cogwheel_logo' className='skill-ico'></img></Cell>
                                    <Cell col={3} align='middle'><img src={'./automation.png'} alt='automation_logo' className='skill-ico'></img></Cell>
                                </Grid>
                            </div>
                        </Cell>
                        <Grid className="home-grid">
                        <div className='intro-box'>
                            <Cell col={12} align='middle'>
                                <h1>About Me</h1>
                                <hr/> <br></br>
                                    <p> I'm an avid learner that pursued a career in engineering due to a natural curiosity in how things work.</p>
                                    <p> From an early career </p>
                                <hr/>
                            </Cell>
                        </div>
                        </Grid>
                        <Grid className="home-grid">
                        <div className='intro-box'>
                            <Cell col={12} align='middle'>
                                <h1>Project Highlights</h1>
                                <hr/> <br></br>
                                    <p> I'm an avid learner that pursued a career in engineering due to a natural curiosity in how things work.
                                    </p>
                                <hr/>
                            </Cell>
                        </div>
                        </Grid>
                    </Grid>

                </div>
            )
        }
}

export default Home;