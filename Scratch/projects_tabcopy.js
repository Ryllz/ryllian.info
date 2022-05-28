import React, { Component } from 'react';
import { Grid, Cell, Tabs, Tab } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div className="tab-content">

                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="tab-content">

                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="tab-content">

                </div>
            )
        } else if(this.state.activeTab === 3){
            return(
                <div className="tab-content">

                </div>
            )
        } else if(this.state.activeTab === 4){
            return(
                <div className="tab-content">

                </div>
            )
        } else if(this.state.activeTab === 5){
            return(
                <div className="tab-content">

                </div>
            )
        }
    }

    render() {
        return(
            <div className="project-tabs">
                <script src="InsertHTML.js"></script>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>CNC Wood Router</Tab>
                    <Tab>Electric BMX Bike</Tab>
                    <Tab>Engagement Ring Box</Tab>
                    <Tab>This Webpage</Tab>
                    <Tab>Mead Brewing</Tab>
                    <Tab>Laser Turret</Tab>
                </Tabs>
                <section className="project-section">
                {this.toggleCategories()}
                </section>
            </div>
        )
    }

}

export default Projects;

