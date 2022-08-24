import React, { Fragment } from 'react';
import {  Route, Routes } from 'react-router-dom';
import Dev from '../src/pages/Dev';
import Des from '../src/pages/Des';
import TopBar from './components/layouts/TopBar';
import About from '../src/pages/About';

const Routenav = () => {
  return (
    <Fragment>
    
        <TopBar />
        <Routes>
          <Route path='/dev' element={<Dev />} />
          <Route path='/des' element={<Des />} />
          <Route path='/about' element={<About />} />
          
        </Routes>
      
    </Fragment>
  );
}

export default Routenav;
