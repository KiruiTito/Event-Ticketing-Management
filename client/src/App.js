// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Main from './components/Main';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header';
import About from './components/About'
import Login from './components/Login';
import SignupForm from './components/SignupForm';
import LandingNav from './components/Nav';
import Addevent from './components/event/Addevent';




function App() {
  const location = useLocation();
  const showHeader = location.pathname !== '/' && location.pathname !== '/signup' && location.pathname !== '/login';

  return (
    
    <div>
          {showHeader && <Header />}
    
      <Routes>
      <Route path='/' element={<LandingNav />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/event' element={<Main />}/>
        <Route path='/About us' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/signup' element={<SignupForm />}/>
        <Route path='/addevent' element={<Addevent />}/>
        {/* <Route path='/cart' element={<Cart />}/> */}
        {/* <Route path='/cart' element={<TicketDetails />}/> */}
        
        {/* Add a default route for handling invalid paths */}
        {/* <Route path='/' element={<Home />}/> */}
      </Routes>
    </div>
  
);
}


export default App;
