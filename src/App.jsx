import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { BeakerIcon } from '@heroicons/react/24/solid'
import Footer from './components/FooterPart/Footer';

const App = () => {
  return (
    <div>
    
     {/* header */}
     <Header />
     {/* main content */}
     <div className='min-h-[calc(100vh-136px)]'>
        <Outlet />
      </div>
      {/* footer */}
      <Footer />

    </div>
  );
};

export default App;
