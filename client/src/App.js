// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
// import Ticket from './components/Ticket';
import './App.css';
import Home from './components/home/Home';
import Header from './components/header/Header'


function App() {


  return (
    
  
    <div>
      <Header />
    
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/event' element={<Main />}/>
        
        {/* Add a default route for handling invalid paths */}
        {/* <Route path='/' element={<Home />}/> */}
      </Routes>
    </div>
  
);
}


export default App;
