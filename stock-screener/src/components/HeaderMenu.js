import React, { useState } from 'react';
// import './components/HeaderMenu.css';


function HeaderMenu() {
  const [menuItems] = useState([
    { id: 1, text: 'All Stocks', link: '/' },
    { id: 2, text: 'Banking', link: '/banking' },
    { id: 3, text: 'Consume', link: '/consume' },
    { id: 4, text: 'Derived', link: '/derived' },
    { id: 5, text: 'Energy', link: '/energy' },
    { id: 6, text: 'FMCG', link: '/fmcg' },
    { id: 7, text: 'Healthcare', link: '/healthcare' },
    { id: 8, text: 'Industries', link: '/industries' },
    { id: 9, text: 'IT Industry', link: '/itindustry' },
    { id: 10, text: 'Media', link: '/media' },
    { id: 11, text: 'Others', link: '/others' },
    
    ]);

  return (
    <div className="side-menu">
      
        <ul className="stocks">
        {menuItems.map(item => (
          <li key={item.id}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HeaderMenu;
