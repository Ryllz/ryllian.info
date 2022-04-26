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
                <div className="tab-content">
                    <h1>My first CNC wood router</h1>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="tab-content">
                <div>
                <h1 className='quote-title'><em>&ldquo;Just because you can, doesn&rsquo;t mean you should&rdquo; </em></h1>
                </div>
                <div>
                <div>This project makes no sense from a performance perspective - I built it because I wanted a BMX bike that went really really fast, and it delivered on that end in spades.
                    <br></br>
                    That said, I've yet to build a more aesthetically pleasing enclosure for the electronics (that doesn't use scrap copper sheet and recycled hose clamps).
                </div>
                <br></br>
                <div>The build consisted of the following key components:</div>
                <ul>
                <li><b>Adaptto Mini-E controller and BMS (4kW nominal output)</b></li>
                <li><b>4x 8Ah 4s1p LiPo packs (59.2V nominal, 67.2V max, 30C continuous/40C burst)</b></li>
                <li><b>MXUS v3 3kW &ldquo;Turbo&rdquo; motor, 4T winding</b></li>
                </ul>
                <div>The really cool feature of the Adaptto controller is also the integrated charging feature, 
                    where the windings in the hub motor itself are used as part of the buck/boost circuit.</div>
                <br></br>
                <h2>Highlights</h2>
                <div>From calculations based on wheel size, motor winding turns and battery pack voltage, I was expecting a top speed of ~60km/h. In practice my courage topped out at 50km/h.</div>
                <br></br>
                <div>Thus the peak current output capability of 180A was never tested, which is a shame&hellip;</div>
                <h2>Downsides</h2>
                <ul>
                <li>The bike had rear v-brakes only, so while 50km/h was a smooth ~2.5s throttle blip away, slowing down was a much more dramatic ordeal.</li>
                <li>Complete lack of suspension made it impractical when riding bumpy roads or hopping curbs are necessary. The hub motor was also HEAVY (I had over-spec'ed with plans to upgrade to a 12kW controller initially).</li>
                <li>Torque arm design which is susceptible to fatigue failure, due to the cyclic loading of heavy acceleration and regen braking.</li>
                </ul>
                <h2>Lessons Learned</h2>
                <ul>
                <li><b>I massively overestimated my bike-riding capabilities when I set out to build this.</b><br></br>
                In other words, always remember spec things to the lowest common denominator...
                </li>
                <li><b>Simple ideas are worth trying first.</b><br></br>
                In this particular case, due to the large hub motor size, I struggled to find a suitable rim given the desired spoke angle I'd calculated (based on normal spoke gauges). 
                Poking around on Google, I'd initially found some other people using 0 degree spoke angles but with extra thick gauge spokes;
                 I quickly dismissed this as being too 'simple', plus it also felt wrong defying the spoke load calculation assumptions on all loads being purely tension). 
                 I then spent the longest time fussing around with custom rim designs, before caving in and giving this a go first - and it was a bittersweet experience when I found it worked great!</li>
                <li><b>Always have a healthy distrust for specs.</b><br></br>
                Specifically, cheap circuit breakers definitely have a lot of wiggle room with respect to their specified trip current curves.
                </li>
                <li><b>Tons of battery related things</b><br></br>
                 How to build packs from LiPo and Li-ion batteries, battery management systems, charging profiles etc.</li>
                </ul>
                <h2>Build Photos</h2>
                <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                <div class="mdl-card__title mdl-card--expand">             
                </div>
                <div class="mdl-card__actions">
                    <span class="demo-card-image__filename">Image.jpg</span>
                </div>
                </div>
                <h2>System Diagram</h2>
                <p>&nbsp;</p>
                </div>
                </div>
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

