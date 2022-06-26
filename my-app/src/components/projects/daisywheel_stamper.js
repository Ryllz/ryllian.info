import React, { Component } from 'react';

class DaisyWheelStamper extends Component {
    render() {
        return(
            <div className="tab-content">
                <h2>A rare case of University course content being applied</h2>
                <hr/>
                <p>This project was started for a client who needed a more permanent marking system than typical inkjet and percussion systems.
                <br></br>
                Notably, it needed to stamp alphanumeric codes into very hard grades of steel (with also a last minute request to try accomodate Iconel) and be able to stamp letters in any orientation.
                <br></br>
                In terms of the stamp capacity, the exact count escapes me, but I believe it was north of 30 to accomodate the english alphabet plus numerals and some punctuation/symbols.
                </p>
                <br></br>
                <p>For me this project stands out as it was a rare case (as given away by the title) where I actually applied a lot of course content learned during University on calculating forces required to "flow" and deform metals. 
                </p>
                <p>Thus a significant amount of time was spent working with a stamp vendor on getting the reliefs and letter font/sizing perfect, as well as making sure there would be no failure (either from fatigue or stress concentrations) of the stamp mounting system within the wheel.
                This was probably the biggest challenge of the project, and the final design hinged on a lot of small machining details and component material grades/post-processing all being 100% correct to specification.</p>
                <br></br>
                <p>
                Lastly, it's worth highlighting that I tackled this design relatively early on in my career, and it wouldn't have been possible without the tremendous amount of guidance and concept planning from the other brilliant engineers at Kinetic! 
                </p>

                <h3>Cool features & backstory</h3>
                <ul>
                    <li><b>The driving force of the Z-axis (stamping direction) is capable of over 3,000kg.</b></li>
                    This was verified when the entire 2,500kg was alarmingly lifted up off the floor during testing on a partially assembled test machine.
                    <li><b>To keep the entire tool compact, the 2 rotation axis are driven through a concentric shaft arrangement.</b></li>
                    Staggered servo motors are at the top of the tool assembly, to drive a respective set of staggered timing pulleys. <br></br>
                    The outer shaft provides rotation of the entire "fork" which houses the stamping wheel, while the inner shaft drives a bevel geared pinion shaft at 90 degrees - this being connected to the rotation of the stamping wheel itself via a final timing pulley (hidden under the red belt cover).
                    <li><b>Compensating for the shaft system</b></li>
                    From the point above, the mechanical design presents a problem - when turning the "fork" (changing the angle of letter placement), the bevel gear system means the wheel will also turn and end up selecting the wrong stamp!
                    <br></br>Thus in order to counteract this, some clever software was written to compensate for this motion coupling interaction.
                    <li><b>Bearing selection for high momentary static loads</b></li>
                    Typically for such environments/applications I would use bushings with a lubrication system for all the rotary shaft supports. <br></br>
                    However, this tool had to index as fast as possible in order to stamp at the speeds required, so bearings were selected.<br></br>
                    Very very heavy duty roller bearings on the wheel, and combined needle/roller bearings for the fork.
                    <li><b>"R" is one of the hardest letters to stamp clearly</b></li>
                    During a design review, I was jokingly hazed for populating the production CAD model wheel with all "R" stamps as my egotistic way of inserting my initials. <br></br>
                    ...but really it was mostly engineering reasons :)
                    <li><b>Designed and built to last</b></li>
                    Almost every component in the fork and wheel assembly was manufactured using 4340 steel with an intended safety factor >3.<br></br>
                    Due to the criticality of some of the assembly alignments we also couldn't risk corrosion in the case of dis-assembly/re-assembly for servicing, so all parts were nickel plated where possible.
                    <br></br>Overall it was a wickedly shiny and robust bit of kit!
                </ul>
                <hr></hr>
                <h3>Video</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/aby1Ti0bFpY" title="YouTube video player" frameborder="0" mute="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <hr></hr>
            </div>
        )
    }
}

export default DaisyWheelStamper;