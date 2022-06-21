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

import RollerStamper from './projects/roller_stamper';

import { Routes, Route, HashRouter } from 'react-router-dom';


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
        <Route path="/projects/roller_stamper" element={<RollerStamper />}/>
    </Routes>
)

export default Main;