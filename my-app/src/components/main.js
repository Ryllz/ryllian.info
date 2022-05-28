import React from 'react';
import Home from './home';
import Resume from './resume';
import Blog from './blog';
import Projects from './projects';
import Contact from './contact';

import RingBox from './projects/engagement_ring_box';
import ElectricBMX from './projects/electric_bmx_bike';
import WoodRouter from './projects/cnc_wood_router';

import { Routes, Route} from 'react-router-dom';


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
    </Routes>
)

export default Main;