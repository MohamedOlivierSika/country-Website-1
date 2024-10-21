import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Link } from 'react-router-dom';
import Continent from './Home';
import Restaurents from './subPages/Restaurents';
import Activity from './subPages/Activity';
import Hotels from './subPages/Hotels';
import AfricanCountry from './subPages/AfricanCountry';
import { useState } from 'react';
import { useEffect } from 'react';



function App() {



  
  return (
  <Router>
    <div className='App'>
      <Routes>
        <Route path='/' element={<Continent/>}/>
        <Route path='/:country' element={<AfricanCountry />}/>
        <Route path='/:country/restaurent' element={<Restaurents/>}/>
        <Route path='/:country/activity' element={<Activity/>}/>
        <Route path='/:country/hotels' element={<Hotels/>}/>
      </Routes>
    </div>
  </Router>
  );
}


export default App;