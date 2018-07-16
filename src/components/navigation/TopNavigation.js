import React from 'react';

const TopNavigation = () => (
  <nav className="navbar is-link" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href="/">
        <h1 className="title is-h1 has-text-white">Docker Registry UI</h1>
      </a>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarExampleTransparentExample" className="navbar-menu">
      <div className="navbar-start">
        <a className="navbar-item" href="/repos">
          Repos
        </a>
      </div>
    </div>
  </nav>
);

export default TopNavigation;
