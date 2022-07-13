import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
class PartUnloader extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>The Ultimate Back and Time Saver (WIP Page)</h2>
                <hr></hr>
                <p style={{color:'red'}}><b><em>The below content is not intended to be a "review", and is likely out of date with respect to the latest versions/variants  .
                    <br></br>All commentary is focused solely on my own contributions and personal opinions.</em></b></p>
                <br></br>
                <p>One of the biggest bottlenecks in plasma cutting production is needing to pause the machine for the operator to unload the processed parts from the cutting table.</p>
                <p>The requirement brief when I designed this machine was to automate that aspect, and enable significant improvements to production planning by eliminating plasma cutting downtime.</p>
                <br></br>
                <p>To breakdown the differences in operation procedure:</p>
                <Grid>
                    <Cell col={6} phone={12} style={{'background-color':'#FFF8DC', 'padding':'1.5em', 'padding-top':'0', 'padding-bottom':'0'}}>
                        <h4>Without</h4>
                        <ol>
                        <li>Plates to be processed are loaded onto the cutting bed via crane</li>
                        <li>Job is run and parts are cut</li>
                        <li>Cutting gantry is parked and E-stopped</li>
                        <li>Cut parts are picked out of the plate skeletons</li>
                        <li>Plate skeletons are removed, and process repeated from the step 1</li>
                        </ol>
                    </Cell>
                    <Cell col={6} phone={12} style={{'background-color':'#FFF8DC', 'padding':'1.5em', 'padding-top':'0', 'padding-bottom':'0'}}>
                        <h4>With Unloader</h4>
                        <ol>
                        <li>Plates to be processed are loaded onto the cutting bed via crane</li>
                        <li>Job is run and parts are cut on the first plate plate</li>
                        <li>Cutting gantry starts processing parts from the next plate, <b>while</b> unloader picks out cut parts from the finished plate and places them onto pallet stations</li>
                        <li>Cut plate skeleton is removed and a fresh new plate loaded via crane, <b>while</b> cutting gantry is uninterrupted</li>
                        <li>Repeat step 3-4 until consumables require changing</li>
                        </ol>
                    </Cell>
                </Grid>
                <h3>Cool Features & Lessons Learned</h3>
                <ul>
                    <li><b>Designed for a huge range of part sizes</b></li>
                    <p>For the unloader to operate effectively, it must be able to pickup >90% of parts.</p>
                    <p>This means </p>
                    <li><b>Telescoping mechanisms</b></li>
                    <p></p>
                    <li><b>AGV systems in heavy industrial environments</b></li>
                    <p></p>
                    <li><b>Electromagnets are magic</b></li>
                    <p></p>
                </ul>
                <h3>Video</h3>
                <iframe width="560" height="315" style={{'padding-bottom':'2em'}} src="https://www.youtube.com/embed/LIZbw8HBWYc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        )
    }
}

export default PartUnloader;