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
                <div>
                    <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/) center / cover no-repeat'}}><h3 class='project-title'>WIP</h3></CardTitle>
                            <CardText>
                                Lorem ipsum
                            </CardText>
                            <CardActions border>
                            <Link to="/"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                    </Cell>
                </div>
            )
        }
        if(this.state.activeTab === 1){
            return(
                <div>
                    <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/) center / cover no-repeat'}}><h3 class='project-title'>WIP</h3></CardTitle>
                            <CardText>
                                Lorem ipsum
                            </CardText>
                            <CardActions border>
                            <Link to="/"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                    </Cell>
                </div>
            )
        }
        if(this.state.activeTab === 2){
            return(
                <div>
                    <Cell col={4} phone={12} align='middle'>
                            <Card shadow={0} style={{width: '100%', height: '100%', margin: 'auto'}}>
                            <CardTitle className='project-title-pic' expand style={{height: '20em', color: '#fff', background: 'url(/) center / cover no-repeat'}}><h3 class='project-title'>WIP</h3></CardTitle>
                            <CardText>
                                Lorem ipsum
                            </CardText>
                            <CardActions border>
                            <Link to="/"><Button colored>Read</Button></Link>
                            </CardActions>
                            </Card>
                    </Cell>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>2020</Tab>
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