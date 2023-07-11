import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class RightToRepair extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h2>Mixed feelings</h2>
                    <hr/>
                    <p>Being an avid DIY enthusiast and also a senior engineer that get's a look behind the capitalist curtain, the right to repair movement is always a fun topic to discuss with people.</p>
                    <p>Below is a few atypical talking points I like to throw out to argue with people :)</p>
                    <hr/>
                    <Grid>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                            <h3>Yay - more/stricter laws please!</h3>
                            <ul>
                                <li>Charging insane markup on consumables and parts (to try force people into the above option) results in a lot of thrown away goods which could've lived longer.</li>
                                <li>Parts distribution exclusivity is how entire countries end up being ripped off relative to other countries with better consumer laws. I'm looking at you Yamaha NZ.</li>
                                <li>Software lockouts and proprietary diagnostic tools are just a long-winded way of turning a one-off purchase into a lease or subscription.</li>
                                <li>Following from the above, it's a slippery slope until you don't really "own" anything anymore.</li>
                                <li>As someone who's very particular about repair/service quality, it plain sucks being forced into paying someone else to do what's likely to be a worse job.</li>
                            </ul>
                            TL;DR - Environmentalism and independence.
                        </Cell>
                        <Cell col={12} style={{'text-align':'top', margin: 'auto'}}>
                            <h3>Nay - why rock the boat?</h3>
                            <ul>
                                <li>Endless time from front-line support staff would be wasted dealing with wacky issues arising from botched DIY. This cost will get passed on to consumers.</li>
                                <li>Doing things right is often more difficult than it appears. Specifically, every shade tree mechanic has been in the situation where a quick morning job turns into a weekend commitment...</li>
                                <li>There can be co-existence issues between components which are calibrated out at factory, which are impossible to replicate as an end user.</li>
                                <li>Crappy repairs result in an unfairly poor perception product/brand - nobody blames the repair person. I've lost count of the number of friends who cheap out on repairs then complain X brand is crap.</li>
                                <li>Most people don't want to repair stuff, and the concessions in cost/form-factor/complexity to make something repairable outweigh the benefits.</li>
                            </ul>
                            TL;DR - People suck, we want cheaper stuff. 
                        </Cell>
                    </Grid>
                  <br></br>
                  <br></br>
                </div>
            )
        }
}

export default RightToRepair;

