//import logo from './logo.svg';
import { FooterSection, Footer, Drawer, Layout, Header, Textfield, HeaderRow, Navigation, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="navbar">
        <Layout>
            <Header waterfall className="header">
                <HeaderRow title="Ryllian Zhang" href="/">
                    <Textfield
                        value=""
                        onChange={() => {}}
                        label="Search3"
                        expandable
                        expandableIcon="search"
                    />
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
                    <FooterSection type="right" logo="Attributions">
                    </FooterSection>
                </Footer> 
            </Content>
        </Layout>
    </div>
  );
}

export default App;