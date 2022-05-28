//import logo from './logo.svg';
import { FooterSection, Footer, Drawer, Layout, Header, Textfield, HeaderRow, Navigation, Content } from 'react-mdl';
import './App.css';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="navbar">
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet"></link>
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" rel="stylesheet"></link>
        <link href="css/aos.css?ver=1.1.0" rel="stylesheet"></link>
        <link href="css/bootstrap.min.css?ver=1.1.0" rel="stylesheet"></link>
        <link href="css/main.css?ver=1.1.0" rel="stylesheet"></link>
        <Layout>
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