// Sectors.js
import React from 'react';

const sectors = ['Sector 1', 'Sector 2', 'Sector 3', 'Sector 4', 'Sector 5', 'Sector 6', 'Sector 7', 'Sector 8', 'Sector 9', 'Sector 10'];

function Sectors() {
  return (
    <div className="sectors">
      <h2>Sectors</h2>
      <ul>
        {sectors.map((sector, index) => (
          <li key={index}>{sector}</li>
        ))}
      </ul>
    </div>
  );
}

export default Sectors;
