// App.js
import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
// import Ticket from './components/Ticket';
import './App.css';

function App() {
  return (
    <Main />
    // <Router>
    //   <Routes>
    //     {/* Define your routes */}
    //     <Route path="/" element={<Main />} />
    //     <Route path="/tickets/:eventId" element={<Ticket/>} />
    //   </Routes>
    // </Router>
  );
}

export default App;
