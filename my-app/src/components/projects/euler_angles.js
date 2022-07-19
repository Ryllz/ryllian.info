import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class euler_angles extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Euler angles - simplified</h2>
                    <hr/>
                    <Grid>
                        <Cell col={4} phone={12}>
                        <img src={'/'} width="90%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                        </Cell>
                        <Cell col={8} style={{'text-align':'top', margin: 'auto'}}>
                            <p>TBC</p>
                        </Cell>
                    </Grid>
                    <h3>Photos</h3>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption"></span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
        }
}

export default euler_angles;

