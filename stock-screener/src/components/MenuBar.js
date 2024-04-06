// MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';

function MenuBar() {
  return (
    <div className="menu-bar">
      <ul>
        <li><Link to="/filter">Filter</Link></li>
        <li><Link to="/sectors">Sectors</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </div>
  );
}

export default MenuBar;
