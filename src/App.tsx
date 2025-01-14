//  import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Exhibits from './components/Exhibits';
import Events from './components/Events';
import VirtualTour from './components/VirtualTour';
import Tickets from './components/Tickets';
import StartupRegistration from './components/StartupRegistration';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Exhibits />
      <Events />
      <Tickets />
      <VirtualTour/>
      <StartupRegistration />
      <Contact />
    </div>
  );
}

export default App;