import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Routenav from './Routes';
function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<Routenav />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
