import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { Link } from 'react-router-dom';

class laser_turret extends Component {
        render() {
            return(
                <div className="tab-content">
                <h1>(WIP) Making fun from scraps</h1>
                    <hr/>
                    <p>During peak lockdown (I forget which one at this point), I decided to overhaul my home security system.
                        After settling on some XiaoMi cameras due to price, the feature I found lacking most was a face/human figure tracker.
                    <br></br></p>
                    <p>It was a bit baffling that a motorized 360 degree camera didn't offer this feature - after all, what good is the coverage if an intruder can just walk off frame?<br></br>
                    I figured what better way than to try build my own camera turret and learn a bit more about machine vision in the process.
                    <br></br></p>
                    <p>The build consisted of the key components below:
                    </p>
                    <ul>
                        <li><b>Logitech C920 HD webcam</b></li>
                        <li><b>Salvaged aluminum flanged shaft</b></li>
                        <li><b>3D printed base and frame, designed while trying out some generative design features in Fusion360</b></li>
                        <li><b>Arduino Uno and gShield 3-axis controller </b></li>
                        <li><b>NEMA14 stepper motors leftover from a NEMA23 upgrade for my old <Link to="/projects/cnc_wood_router">CNC router</Link></b></li>
                    </ul>
                    <h1>Lessons Learned</h1>
                    <hr/>
                    <h4>Image processing is HARD</h4>
                    
                    <h4>Optimization is HARDER</h4>
 
                    <h4>Overcoming choice paralysis</h4>
                   
                    <h1>Build Photos</h1>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Face recognition and tracking working using OpenCV, with basic control loop to keep face centered</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                    <br></br>
                </div>
            )
        }
}

export default laser_turret;

