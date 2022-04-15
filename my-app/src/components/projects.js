import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div>
                    <h1>test</h1>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div><h1>test2</h1></div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div><h1>test2</h1></div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div><h1>test2</h1></div>
            )
        }        
    }

    render() {
        return(
            <div className="project-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>CNC Wood Router</Tab>
                    <Tab>Electric BMX Bike</Tab>
                    <Tab>Engagement Ring Box</Tab>
                    <Tab>Electric Foil Board</Tab>
                </Tabs>
                <section className="project-section">
                {this.toggleCategories()}
                </section>
            </div>
        )
    }
}

export default Projects;