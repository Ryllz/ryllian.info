import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions} from 'react-mdl';

class Contact extends Component {

      render() {
        return(
          <div className="resume">
                <br></br>
                <Grid className="resume-grid">
                    <Cell col={4} phone={12}>
                      <img src={'/me_contact.jpg'} alt='hire me :)' className='avatar-contact'></img>
                      <div>
                          <h1 className="title">Say hello!</h1>
                          <table class="center">
                              <tr>
                                  <td className='center'>
                                  <a  href="www.linkedin.com/in/ryllian-zhang"><img src={'/linkedin.png'} alt='email me!' className='ico-resume-mini'></img></a>
                                  <em>www.linkedin.com/in/ryllian-zhang</em>
                                  </td>
                              </tr>
                              <tr>
                                  <td className='center'>
                                  <a href="mailto: ryllianz@gmail.com"><img src={'/email.png'} alt='email me!' className='ico-resume-mini'></img></a>
                                  <em>ryllianz@gmail.com</em>
                                  </td>
                              </tr>
                          </table>
                      </div>
                    </Cell>
                    <Cell col={8}>
                        <Card shadow={0} style={{width: 'auto', height: '100%', 'min-height': '35vh', 'max-height': '672px',  margin:'auto', background: 'url(/location.jpg) center / cover'}}>
                            <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                              <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                                Currently around...
                                </span>
                              </CardActions>
                        </Card>
                    </Cell>
                    <Cell col={12}>
                    <Card shadow={0} style={{width: '100%', height: '60vh', 'max-height': '1300px', background: 'url(/rangitoto_sunrise.jpg)', 'background-position': 'center center', 'background-size': 'cover', 'background-repeat': 'no-repeat', margin: 'auto'}}>
                    <CardActions style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.5)'}}>
                        <span style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}>
                            ...probably here to be specific :)
                        </span>
                    </CardActions>
                        <CardTitle expand />
  
                    </Card>
                    </Cell>

                </Grid>
                <br></br>
            </div>
        );
      }
}

export default Contact;