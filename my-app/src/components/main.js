import React from 'react';
import Home from './home';
import Resume from './resume';
import Blog from './blog';
import Projects from './projects';
import Contact from './contact';
import { Routes, Route} from 'react-router-dom';


const Main = () => (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route exact path='/projects/cnc' element={<Projects activeTab={'1'}/>}/>
        <Route exact path='/projects/ringbox' element={<Projects activeTab={'3'}/>}/>
    </Routes>
)

export default Main;