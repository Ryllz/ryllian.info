import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class PlateDragga extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>High force grippers & lift platforms (WIP)</h2>
                <p>Fundamentally, almost all steel plate cutting machines are some form of gantry + table design; <br></br>
                Fixed table for the raw plate to be loaded on, and a moving gantry which traverses the length of the table with tools to process the plate.
                <br></br>
                </p>  
                <p>
                The K5600 "Plate Dragga" flips this paradigm, so the gantry and cutting tools are fixed while the plate is fed through for processing. 
                This provides a lot of benefits, but most significantly it reduces the job times for batches of small parts - they can be cut and dropped onto a outfeed conveyor, as opposed to needing to be picked out by an operator.
                </p>
                <br></br>
                <p>
                I was responsible for designing the hydraulic sub-systems that made this model possible, and it was one of the hardest "solo" responsibilities I undertook during my time at Kinetic.
                <br></br>
                This was because hydraulics were an all new addition for Kinetic at the time; we'd generally preferred using pneumatics for many reasons, so there was no tribal knowledge to fall back on.
                </p>
                <br></br>
                Thus beyond the purely mechanical aspects (gripper system and tracks and <Link to="/projects/plate_conveyor">plate conveyor</Link>) the design scope included specifying the pump, oil cooler, accumulator, control valves, all the hosing types, couplings, fittings, cylinders and countless accessories.
                
                What really kicked stress levels up a notch was the severe safety implications; erratic piston velocities or a wrong coupling breaking had serious consequences.
                <br></br>

                <h3>Cool features & backstory (WIP)</h3>
                <ul>
                    <li><b>Lift platform uses both mechanical and hydraulic balancing features</b></li>
                    During post-processing operations such as drilling or stamping, up to a few tons of load can be applied to just one side of the cutting platform.
                    <br></br>
                    As the cutting platform is held up by a cylinder on each side, this uneven loading isn't conducive to precision operations.

                    <li><b>The grippers which grab the plate all individually retract</b></li>
                    The extra complications around introducing this mechanism were substantial, but 
                    <li><b>Gripper geometry and force multiplication</b></li>
                    To keep the grippers low profile and still able to apply a consistent clamping force across a large range of plate thickness, a custom "jaw" style design was used.
                    <br></br>
                    The 
                </ul>
                <h2>Video</h2>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/nOyjXuZbA7M?start=31" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <hr></hr>
            </div>
        )
    }
}

export default PlateDragga;