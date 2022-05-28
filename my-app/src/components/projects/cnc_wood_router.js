import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class cnc_wood_router extends Component {
        render() {
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
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/vfd_wiring_1.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">The VFD in the process of figuring out setup and wiring (AliExpress instructions weren't great)</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/frame_setup_1.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Extrusion frame with mild steel angle braces</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/cnc_base_setup.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">All components wired for testing, MDF base boards being mounted</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/cnc_z.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Z-axis, assembled from AliExpress roller/rail/ballscrew and welded scrap angles</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/cnc_firstcut.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">First engraving job, so much dust...</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/cnc_me.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Me fresh out of university, assembling the control box; can almost smell the leather jacket and deodorant through the photo...</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{background: 'url(/cnc_endresults.jpg) center / cover'}} >             
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
        }
}

export default cnc_wood_router;

