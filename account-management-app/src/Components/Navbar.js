// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          Your App Name
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto d-flex">
            <li className="nav-item">
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registration">
                Registration
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/accountinfo">
                Account Info
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
