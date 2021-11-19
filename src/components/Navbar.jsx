import React from "react";
import { Link } from 'react-router-dom';

import "../styles/components/navbar.scss";
import "./search"
import Search from "./search";

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
          <li className="right">
            <Search />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
