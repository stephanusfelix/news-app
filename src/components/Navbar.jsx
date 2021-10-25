import React from "react";
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <ul>
          <li>
            <Link to="/">Indonesia</Link>
          </li>
          <li>
            <Link to="/programming">Programming</Link>
          </li>
          <li>
            <Link to="/covid">COVID-19</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
