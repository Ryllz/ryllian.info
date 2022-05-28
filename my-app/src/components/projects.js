import React, { Component } from 'react';
import { Grid, Button, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';

class Projects extends Component {
    render() {
        return(
            <div className="project-tabs">
            <h2 style={{textAlign:'center'}}>2014 - 2022 </h2>
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
                            <Button colored href="/projects/cnc_wood_router">Details</Button>
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
                            <Button colored href="/projects/engagement_ring_box">Details</Button>
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
                            <Button colored  href="/projects/electric_bmx_bike">Details</Button>
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
                            <Button colored>Details</Button>
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
                            <Button colored>Details</Button>
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
                            <Button colored>Details</Button>
                            </CardActions>
                            </Card>
                        </Cell>
                        <br></br>
                    </Grid>
                </div>
            </div>
        )
    }

}

export default Projects;

