import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
        <NavLink to="/home"className="nav-link">Home</NavLink>
        <NavLink to="/database"className="nav-link">Database</NavLink>
        <NavLink to="/contact"className="nav-link">Contact</NavLink>
        
    </nav>
  )
}
