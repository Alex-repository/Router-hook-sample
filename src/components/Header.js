import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <NavLink to="/" className="navbar-brand ">
        React CRUD & Routing
      </NavLink>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/productos" className="nav-link">
            Productos
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/producto-nuevo"
            className="nav-link"
            activeClassName="active"
          >
            Nuevo Productos
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            to="/producto-nuevo"
            className="nav-link"
            activeClassName="active"
          >
            Nuevo Productos
          </NavLink>
        </li> */}
      </ul>
    </div>
  </nav>
);

export default Header;