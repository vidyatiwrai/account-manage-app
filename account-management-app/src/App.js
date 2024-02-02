// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change import here
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './Components/Login';
import Registration from './Components/Registeration';
import AccountInfo from './Components/AccountInfo';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <Router>
      <div className="container mt-5">
               {/* Navbar Component */}
        <Navbar/>
         {/* Routing for Different Sections */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accountinfo" element={<AccountInfo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
