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
                    <h1>Baby steps</h1>
                    <hr/>
                    <p>I built this CNC mill during university, having gotten interested in CAM processes during my final year project. 
                    <br></br>The build consisted of the following key components:
                    </p>
                    <ul>
                        <li><b>Arduino Uno + gShield, later upgraded to a TinyG board.</b></li>
                        <li><b>V-wheel guide system and GT timing belt.</b></li>
                        <li><b>2.5kW air cooled ER11 collet 10k RPM spindle</b></li>
                    </ul>
                    <h1>Lessons Learned</h1>
                    <hr/>
                    <li><b>Acoustic noise</b></li>
                    <li><b>Electrical noise</b></li>
                    <li><b>DFM</b></li>
                    <li><b>Rigidity</b></li>
                    <h1>Build Photos</h1>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(./vfd_wiring_1.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">The VFD in the process of figuring out setup and wiring (AliExpress instructions weren't great)</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(./frame_setup_1.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Extrusion frame with mild steel angle braces</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./cnc_base_setup.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">All components wired for testing, MDF base boards being mounted</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./cnc_z.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Z-axis, assembled from AliExpress roller/rail/ballscrew and welded scrap angles</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./cnc_firstcut.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">First engraving job, so much dust...</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./cnc_me.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Me fresh out of university, assembling the control box; can almost smell the leather jacket and deodorant through the photo...</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./cnc_endresults.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Wedding gift portrait engraving, ~0.7x1.0m in size (my dainty hand for scale in the corner)</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    <br></br>
                </div>
            )
        } else if(this.state.activeTab === 1){
            return(
                <div className="tab-content">
                    <figure><h1 className='quote-title'><em>&ldquo;Just because you can, doesn&rsquo;t mean you should&rdquo; </em></h1>
                    <figcaption>—Coworker, <cite>upon falling off immediately from a starting wheelie</cite></figcaption>
                    </figure>
                    <hr/>
                        <p>This project makes no sense from a performance perspective; I built it because I wanted a BMX bike that went really really fast, and it delivered on that end 100%.
                        <br></br>The build consisted of the following key components:</p>
                        <ul>
                        <li><b>Adaptto Mini-E controller and BMS (4kW nominal output)</b></li>
                        <li><b>4x 8Ah 4s1p LiPo packs (59.2V nominal, 67.2V max, 30C continuous/40C burst)</b></li>
                        <li><b>MXUS v3 3kW &ldquo;Turbo&rdquo; motor, 4T winding</b></li>
                        </ul>
                        <p>The really cool feature of the Adaptto controller is also the integrated charging feature, 
                            where the windings in the hub motor itself are used as part of the buck/boost circuit.
                            From calculations based on wheel size, motor winding turns and battery pack voltage, I was expecting a top speed of ~60km/h. In practice my courage topped out at 50km/h.</p>
                        <p>Thus the peak max speed at ~67V and max accelerations at 180A remains untested...&hellip;</p>
                    <h3>Future Improvements</h3>
                    <hr/>
                    <ul>
                        <li>The bike had rear v-brakes only, so while 50km/h was a smooth ~2.5s throttle blip away, slowing down was a much more dramatic ordeal.</li>
                        <li>Complete lack of suspension made it impractical when riding bumpy roads or hopping curbs are necessary. The hub motor was also HEAVY (I had over-spec'ed with plans to upgrade to a 12kW controller initially).</li>
                        <li>Torque arm design which is susceptible to fatigue failure, due to the cyclic loading of heavy acceleration and regen braking.</li>
                        <li>An enclosure for the battery/controller that's rated for some puddle smashiong (IP64/5 or thereabouts), and more aesthetically pleasing (though the scrap copper sheet and recycled hose clamps do give it some character).</li>
                    </ul>
                    <h3>Lessons Learned</h3>
                    <hr/>
                        <ul>
                        <li><b>I massively overestimated my bike-riding capabilities when I set out to build this.</b><br></br>
                        In other words, always remember spec things to the lowest common denominator...
                        </li>
                        <li><b>Simple ideas are worth trying first.</b><br></br>
                        Due to the large hub motor size, I struggled to find a suitable rim given the desired spoke angle I'd calculated (based on normal spoke gauges). 
                        Poking around on Google, I'd initially found some other people using 0 degree spoke angles but with extra thick gauge spokes;
                        I quickly dismissed this as being too 'simple', plus it also felt wrong defying the spoke load calculation assumptions on all loads being purely tension). 
                        I then spent the longest time fussing around with custom rim designs, before caving in and giving this a go first - and it was a bittersweet experience when I found it worked great!</li>
                        <li><b>Always have a healthy distrust for component specifications.</b><br></br>
                        Specifically, cheap circuit breakers definitely have a lot of wiggle room with respect to their specified trip current curves.
                        </li>
                        <li><b>Tons of battery related things</b><br></br>
                        How to build packs from LiPo and Li-ion batteries, battery management systems, charging profiles etc.</li>
                        </ul>
                    <h3>Build Photos</h3>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_8.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">4kW worth of brakes baby!</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_7.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">400W server PSU for charging + chonky inductor add-on adapter</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_9.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Front charging port and 3D printed main support profile</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_5.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Battery pack with BMS strapped on-top, with foam inserts between each battery to prevent bumping</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_6.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Spaghetti wiring harness with C32 breaker (supposedly rated for 5-10x 32A for instantaneous trip)</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_3.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">HUD with twist throttle and regen thumb brake</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_4.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">MXUS 3k-Turbo, of course for "future-proofing" incase I ever got a 12kW controller</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_1.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Bike build in progress, heatshrinking in the living room</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(./ebike_2.png) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Completed prototype bike!</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    <h3>System Diagram</h3>
                    <hr/>
                        <img src="./ebike_system_diagram.jpg" alt="Adaptto system diagram" width="100%" height="auto"></img>
                    <p><i>Diagram courtesy of Adappto - http://adaptto.com/</i><br></br></p>
                </div>
            )
        } else if(this.state.activeTab === 2){
            return(
                <div className="tab-content">
                    <div id="test">test</div>
                    {this.loadHTML()}
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
    
    loadHTML(){
        fetch('./engagement_ring_box.html')
        .then(response=> response.text())
        .then(text=> document.getElementById('test').innerHTML = text);
      }
}

export default Projects;

