
import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class this_page extends Component {
        render() {
            return(
                <div className="tab-content">
                    <h1></h1>

                    <p>I've dabbled before in graphical design, and I've always wanted to learn more about what's behind the scenes with all the webapps I used day to day.
                        During my role as an automation engineer at Apple, being part of a broader network of satellite offices
                        also the push to move things to 

                    </p>

                    <h2>Lessons Learned</h2>
                    <ul>
                    <li><strong>Interoperability is a nightmare</strong></li>
                    Making sure all design elements are supported by common browsers (and resize correctly), is something that I think most people take for granted when visitng websites.
                    The sheer effort required to create a seamless experience across mobile + tablet + desktop browser(s) is staggering. 
                    For the most part I implemented some flex grids and called it a day :)
                    <li><strong>The cascade in CSS is real</strong></li>
                    The ability to hone in and tweak a specific sub-element is really neat, while the "superset" default nature of CSS really makes changing themes site wide a breeze.
                    Finally perfecting a CSS palette and rolling it out across all pages with a click, is a joyful experience.
                    <li><strong>It's turtles all the way down</strong></li>
                    One of the most frustrating things when trying to really understand why something doesn't work, is chasing the bug through layers and layers of abstraction.
                    My experience with debugging C# and Python apps, which both had very robust tools for stepping through code and figuring out why X input gives Y results.
                    However, with React.js and HTML/CSS, often times weird behaviour is significantly more difficult to understand and fix.
                    <li><strong>Readability and commenting across languages </strong></li>
                    I found commenting in JS/HTML/CSS a pain.
                    The flow just isn't the same, as my habitual commenting in Python and C# felt more effortless (the // and # markers are incredibly easy to write in line).
                    Probably just me not being familiar with VSCode (and laziness).
                    <li><strong>Nested curly brackets, ugh</strong></li>
                    Sometimes a line of code will have just a soup of />)} characters and it honestly makes me want to cry when debugging.
                    Nesting data objects within data objects within an inline function also just looks plain wrong a lot of times.
                    </ul>
                </div>
            )
        }
}

export default this_page;





