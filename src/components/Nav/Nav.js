import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
  <nav className="nav">
    <section className="nav-section">
      <h4 className="nav-category">Browse</h4>
      <NavLink to="/" className="nav-link">
        <i className="fas fa-border-all"></i>
        View all
      </NavLink>
      <NavLink to="/" className="nav-link">
        <i className="fas fa-fire-alt"></i>
        Top rated
      </NavLink>
    </section>
    <section className="nav-section">
      <h4 className="nav-category">Filter</h4>
      <p className="nav-link">
        <i className="fas fa-plus"></i>Rating
      </p>
      <p className="nav-link">
        <i className="fas fa-plus"></i>Release date
      </p>
    </section>
  </nav>
);

export default Nav;
