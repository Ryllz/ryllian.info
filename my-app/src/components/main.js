import React from 'react';
import Home from './home';
import Resume from './resume';
import Blog from './blog';
import Projects from './projects';
import Contact from './contact';

import RingBox from './projects/engagement_ring_box';
import ElectricBMX from './projects/electric_bmx_bike';
import WoodRouter from './projects/cnc_wood_router';
import MeadBrewing from './projects/mead_brewing';
import LaserTurret from './projects/laser_turret';
import ThisPage from './projects/this_page';

import DaisyWheelStamper from './projects/daisywheel_stamper';
import M100CAM from './projects/M100_cam';
import PartUnloader from './projects/part_unloader';
import PlateDragga from './projects/hydraulic_systems';
import PlateConveyor from './projects/plate_conveyor';


import { Routes, Route } from 'react-router-dom';


const Main = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>

        <Route path="/projects/engagement_ring_box" element={<RingBox />}/>
        <Route path="/projects/electric_bmx_bike" element={<ElectricBMX />}/>
        <Route path="/projects/cnc_wood_router" element={<WoodRouter />}/>
        <Route path="/projects/mead_brewing" element={<MeadBrewing />}/>
        <Route path="/projects/laser_turret" element={<LaserTurret />}/>
        <Route path="/projects/this_page" element={<ThisPage />}/>

        <Route path="/projects/daisywheel_stamper" element={<DaisyWheelStamper />}/>
        <Route path="/projects/M100_cam" element={<M100CAM />}/>
        <Route path="/projects/part_unloader" element={<PartUnloader />}/>
        <Route path="/projects/hydraulic_systems" element={<PlateDragga />}/>
        <Route path="/projects/plate_conveyor" element={<PlateConveyor />}/>
    </Routes>
)

export default Main;