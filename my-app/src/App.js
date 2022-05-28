//import logo from './logo.svg';
import { FooterSection, Footer, Drawer, Layout, Header, Textfield, HeaderRow, Navigation, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="navbar">
        <Layout>
        <script src=
                    "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
                    </script>
                    <script src="./loadHTML.js"></script>
            <Header waterfall className="header">
                <HeaderRow title={<Link to="/" className='name-link'>Ryllian Zhang</Link>}>
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
                    <FooterSection type="right" logo="Attributions">
                    </FooterSection>
                </Footer> 
            </Content>
        </Layout>
    </div>
  );
}

export default App;