import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class euler_angles extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>(WIP) Friendly Euler angles</h2>
                    <hr/>
                    <Grid>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                            <p>One of the projects I undertook during my time at Apple was to try and improve the accuracy of some Mecademic Meca500 R3 robots.</p>
                            <p>During the course of improving the performance of some pick/place type test cells, I'd resolved most of the other "low hanging fruit" in the error stack which were mostly fixture design improvements.</p>
                            <br></br>
                            <p>This left 2 key things on the to-do list:</p>
                            <ol>
                                <li>Create a semi-automatic probe based calibration system to replace the pre-existing visual alignment process, for setting the positions of the co-ordinate frames used by the test cell.</li>
                                <br></br>
                                <li>Improve the calibration of the robot itself, somewhere along the below scale:</li>
                                <ul>
                                    <li><b>Level 1</b> <p>Improved joint mastering, i.e. take real measurements to update joint homing offsets closer to real life vs. OEM nominal.</p></li>
                                    <li><b>Level 2</b> <p>Full kinematic calibration, i.e. joint lengths and other angular offsets as defined in the 4x4 transform matrix for each joint.</p></li>
                                    <li><b>Level 3</b> <p>Throw everything else we can think of into a dynamic model, i.e. joint deflection, backlash, temperature variation etc.</p>
                                    <p>This typically requires a 3rd party software like ROS or RoboDK as an interface to control the robot, as opposed to just updating controller parameters.</p>
                                    </li>
                                </ul>
                            </ol>
                            <p>To keep things brief I'll skip the discussing too deep around item 2, and focus on the major learning I remember from accomplishing item 1:
                                <br></br>Specifically, what are Euler angles, why did I need them, and how the heck does the math work.</p>
                            <h4>What?</h4>
                            <p>Euler angles are a set of 3 values, which can be used to define the angular orientation of a point in space. </p>
                            <p>To fully define a point in 3D space we require an XYZ value to determine the linear cartesian position, alongside a set of Euler angles to determine the angular orientation.</p>
                            <h4>Why?</h4>
                            <p>The accuracy of a robot movement heavily depends on the reference frames which determine both the tool "tip" location as well as any key work area locations.</p>
                            <p>TBC...</p>
                            <h4>How?</h4>
                            <p>TBC...</p>
                        </Cell>
                        <Cell col={12} phone={12}>
                        <img src={'/'} width="90%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                        </Cell>
                        <p><b>TLDR;</b> Calibrating 6-axis robots is a pain, but at least Euler angles are more intuitive than quarternions.</p>
                        <br></br>
                    </Grid>
                </div>
            )
        }
}

export default euler_angles;

