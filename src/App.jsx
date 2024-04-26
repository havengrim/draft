import React from 'react';
import './index.css';
import CarouselWithNavbar from './components/CarouselWithNavbar';
import { Button } from './components/ui/button';
import Details from './components/Details';
import Giving from './components/Giving';
import Sermon from './components/Sermon';
import Email from './components/Email';
import Event from './components/Event';
import Footer from './components/Footer';

function App() {
  return (
    <div className=''>
        <CarouselWithNavbar />
        <Details />
        <Giving />
        <Sermon />
        <Email />
        <Event />
        <Footer />
    </div>
  );
}

export default App;
