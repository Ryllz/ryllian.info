import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class mead_brewing extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Sour Grapes Over Sour Honey (Page WIP)</h2>
                    <hr/>
                    <Grid>
                        <Cell col={4} phone={12}>
                        <img src={'/mead_bottle1.jpg'} width="90%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                        </Cell>
                        <Cell col={12} style={{'text-align':'center', margin: 'auto'}}>

                        </Cell>
                    </Grid>
                    <h2>Photos</h2>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Rustic bottles for the test batch!</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">High tech brewing equipment...</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
        }
}

export default mead_brewing;

