import React, { Component } from 'react';
import { Tabs, Tab, Grid, Button, Cell, Card, CardTitle, CardText, CardActions} from 'react-mdl';
import { Link } from 'react-router-dom';

class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="blog-content">
                    <Grid>
                        <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', 'min-height': '25em', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/mess-chaos.png) center / contain no-repeat'}}></CardTitle>
                            <CardText>
                                <h4 style={{'margin-top': 0}}>The elegance of a simple storyline</h4>
                                Rants about my ex-favourite fictional franchises
                            </CardText>
                            <CardActions border>
                            <Link to="/blog/storylines"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', 'min-height': '25em', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/repeat.png) center / contain no-repeat'}}></CardTitle>
                            <CardText>
                                <h4 style={{'margin-top': 0}}>The rat race</h4>
                                Thoughts on attaining material goals
                            </CardText>
                            <CardActions border>
                            <Link to="/blog/rat_race"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        }
        if(this.state.activeTab === 1){
            return(
                <div className="blog-content">
                        <Grid>
                        <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', 'min-height': '25em', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/voice_of_fire.png) center / cover no-repeat'}}></CardTitle>
                            <CardText>
                                <h5 style={{'margin-top': 0}}>Impact of scale on design choices</h5>
                                And my opinions how to best reflect this in functional and aesthetic features
                            </CardText>
                            <CardActions border>
                            <Link to="/blog/design_scale"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', 'min-height': '25em', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/right_repair.jpg) center / contain no-repeat'}}></CardTitle>
                            <CardText>
                                <h4 style={{'margin-top': 0}}>Right to repair</h4>
                                My thoughts for and against stricter right to repair laws
                            </CardText>
                            <CardActions border>
                            <Link to="/blog/right_to_repair"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', 'min-height': '25em', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/mechanic_needed.jpg) center / cover no-repeat'}}></CardTitle>
                            <CardText>
                                <h4 style={{'margin-top': 0}}>The decline in pride of workmanship</h4>
                                Frustrations around finding good mechanics and tradespeople
                            </CardText>
                            <CardActions border>
                            <Link to="/blog/workmanship"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', 'min-height': '25em', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '8em', color: '#fff', background: 'url(/google_coursera.jpg) center / cover no-repeat'}}></CardTitle>
                            <CardText>
                                <h4 style={{'margin-top': 0}}>Google UX design course</h4>
                                My submitted portfolio and thoughts on the course content
                            </CardText>
                            <CardActions border>
                            <Link to="/blog/google_ux_course"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                        </Cell>
                    </Grid>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>2021</Tab>
                    <Tab>2022</Tab>
                </Tabs>
                <section className="projects-grid">
                {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Blog;