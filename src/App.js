import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/Home';
import Routenav from './Routes';
import { GlobalThemeProvider } from './context/globalthemeContext';

function App() {
  return (
    // <GlobalThemeProvider>
      <Fragment>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='*' element={<Routenav />} />
          </Routes>
        </BrowserRouter>
      </Fragment>
    // </GlobalThemeProvider>
  );
}

export default App;
