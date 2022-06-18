import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';
class Blog extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
                <div><h1>WIP</h1></div>
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