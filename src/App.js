import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navs from './Nav/Nav';
import Header from './Header/Header';
import { Fragment } from 'react';
import Section from './section2/section';
import Section3 from './section3/section3';
import Section4 from './section4/sction4';
import Section5 from './section5/section5';
import Section6 from './section6/section';
import Section7 from './section7/section7';
import Section8 from './section8/section8';
import Footer from './footer/footere';




function App() {
  return (
    
    <Fragment>
       <Navs/>
       <Header/>
       <Section/>
       <Section3/>
       <Section4/>
       <Section5/>
       <Section6/>
       <Section7/>
       <Section8/>
       <Footer/>
    </Fragment>
  );
}

export default App;
