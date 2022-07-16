import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class mead_brewing extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Sour honey over sour grapes</h2>
                    <hr/>
                    <Grid>
                        <Cell col={4} phone={12}>
                        <img src={'/mead_bottle1.jpg'} width="90%" style={{'vertical-align':'middle'}} class='inline-img'></img>
                        </Cell>
                        <Cell col={8} style={{'text-align':'top', margin: 'auto'}}>
                            <p>Myself and a close friend were talking about vineyards during a hike when we arrived upon the ambitions idea to start a mead brewery.</p>
                            <p>At the time, the main logic was that it was a new yet old drink that would regain popularity eventually, and ticked all the right checkboxes in terms of being a more 'hip' alternative to dessert wines which were continually going up in popularity;</p>
                            <p>People love sweet alcoholic drinks, and the typical medieval/fantasy setting associated with mead we hoped would give it that extra marketing push.</p>
                            <br></br>
                            <p>While the business totally fell flat in the end as it turned out we couldn't brew a consistent and tasy beverage to save our lives, I did however learn a lot about the following along the way:</p>
                            <ul>
                                <li><b>Reproducing a specific flavour is extremely hard</b></li>
                                <p>After brewing probably well over 60L, we found it near impossible to get a consistent yield;</p>
                                <p>Despite all our efforts sanitizing all the containers/vessels and measuring apparatus, and carefully measuring out the yeast + additives + specific gravity during the process of adding honey.</p>
                                <p>Now everytime I drink a popolar beer or wine, I marvel at how much process engineering must be in place to achieve the consistency that they do at that scale.</p>
                                <li><b>Label and packaging design</b></li>
                                <p>It was quite fun coming up with various different concepts for the label and packaging, mostly based on variations of the Manuka or Pohutukawa flower and some bee themed elements.</p>
                                <p>The minimalistic final design we arrived at for the label can be seen on the left; we also had other flower versions watercolour painted for us by my wife's talented friend.</p>
                                <li><b>There's a LOT of licensing and site inspection costs involved</b></li>
                                <p>Who knew we couldn't just sell alcohol out the back of a truck at the local market??</p>
                                <p>Joke aside, I'm now also very wary about all the craft brews and such being sold at local markets :)</p>
                            </ul>
                        </Cell>
                    </Grid>
                    <h3>Photos</h3>
                    <hr/>
                    <Grid className='project-photo-grid'>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/mead2.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">Rustic bottles for the first batch</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/mead3.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">High tech brewing cupboard</span>
                                </div>
                            </div>
                        </Cell>
                        <Cell col={4} phone={12} align='middle'>
                            <div class="gallery-card-image mdl-card mdl-shadow--2dp" id="photo-card">
                                <div class="mdl-card__title mdl-card--expand" style={{height: '30vh', background: 'url(/mead1.jpg) center / cover'}} >             
                                </div>
                                <div class="mdl-card__actions">
                                    <span class="card-image-caption">The end result! Though unfortunately the first few batch were not the most palateable...</span>
                                </div>
                            </div>
                        </Cell>
                    </Grid>
                </div>
            )
        }
}

export default mead_brewing;

