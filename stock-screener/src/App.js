import './App.css';
import React, { useState, useEffect } from 'react';
import HeaderMenu from './components/HeaderMenu';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stock Analysis App</h1>
      </header>
      <div>
        <HeaderMenu />

      </div>
    
      <div>
        <h1>List from API</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li> 
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;





