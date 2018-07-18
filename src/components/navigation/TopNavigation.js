import React from 'react';

const TopNavigation = () => (
  <div className="top-bar">
    <div className="top-bar-left">
      <ul className="dropdown menu" data-dropdown-menu>
        <li className="menu-text">Docker Registry UI</li>
        <li><a href="/repos">Repos</a></li>
      </ul>
    </div>
    <div className="top-bar-right">
      <ul className="menu">
        <li><input type="search" placeholder="Search"/></li>
        <li><button type="button" className="button">Search</button></li>
      </ul>
    </div>
  </div>
);

export default TopNavigation;
