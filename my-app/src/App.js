//import logo from './logo.svg';
import React from 'react';
import { FooterSection, Footer, Drawer, Layout, Header, HeaderRow, Navigation, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { Button } from 'react-mdl';


function App() {

    const modalStyle = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          'text-align': 'center',
          'border-radius': '25px',
          'background-color': '#787878',
        },
        overlay: {zIndex: 1000}
      };

    // Modal.setAppElement('#');

    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function afterOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }
  
    return (
        <div className="navbar">
            <Layout>
                <Header waterfall className="header">
                    <HeaderRow title={<Link to="/" className='name-link'>Ryllian Zhang</Link>}>
                    </HeaderRow>
                    <HeaderRow className='navRow'>
                        <Navigation>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Projects</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/blog">Blog</Link>
                        </Navigation>
                    </HeaderRow>
                </Header>
                <Drawer title="Ryllian Zhang">
                    <Navigation>
                        <Link to="/">Home</Link>
                        <Link to="/resume">Resume</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/blog">Blog</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" />
                    <Main/>
                    <Footer size="mini" className="footer">
                        <FooterSection type="left" logo="Copyright © Ryllian Zhang 2022">
                        </FooterSection>
                            <FooterSection type="right">
                            <a onClick={openModal} className="footer-link" style={{color: '#e8e8e8'}}>Attributions</a>
                            <Modal
                                isOpen={modalIsOpen}
                                onAfterOpen={afterOpenModal}
                                onRequestClose={closeModal}
                                contentLabel="Attributions Modal"
                                style={modalStyle}
                            >
                                <h4 ref={(_subtitle) => (subtitle = _subtitle)} style={{color: '#0a0a0a'}}>Thanks to...</h4>
                                <div>
                                    <li><a href="https://www.flaticon.com/free-icons/robot-arm" title="robot arm icons">Robot arm icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/robot" title="robot icons">Robot icons created by Eucalyp - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/cog" title="cog icons">Cog icons created by Pause08 - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/python" title="python icons">Python icons created by Nadiinko - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/automation" title="automation icons">Automation icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/microsoft" title="microsoft icons">Microsoft icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/html" title="html icons">Html icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Smashicons - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by riajulislam - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/print" title="print icons">Print icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/diving" title="diving icons">Diving icons created by istar_design_bureau - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/reading" title="reading icons">Reading icons created by mangsaabguru - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/car" title="car icons">Car icons created by Smashicons - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/hiking" title="hiking icons">Hiking icons created by Smashicons - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/fishing" title="fishing icons">Fishing icons created by wanicon - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/print" title="print icons">Print icons created by Freepik - Flaticon</a></li>
                                    <li><a href="https://www.flaticon.com/free-icons/game-controller" title="game controller icons">Game controller icons created by Freepik - Flaticon</a></li>
                                </div>
                                <br></br>
                                <Button onClick={closeModal}><b>Click anywhere to close</b></Button>
                                
                            </Modal>
                            </FooterSection>
                        </Footer> 
                    </Content>
                </Layout>
            </div>
        );
    }

export default App;