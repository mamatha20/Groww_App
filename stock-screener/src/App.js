// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import HeaderMenu from './components/HeaderMenu';
// import MenuBar from './components/MenuBar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Filter from './components/Filter';
// import Sectors from './components/Secors';

// import SearchBar from './components/SearchBar';




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
        {/* <p className="heading">
          All Stocks
        </p> */}
      </div>

      <div className="App">
        {/* <MenuBar /> */}


        {/* <BrowserRouter>
          <Routes>
          <Route path="/sectors" component={Sectors} />
          </Routes>
          </BrowserRouter> */}
      </div>
      <div className="side-menu">
        
      </div>
      <div>
      <h1>List from API</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li> // Assuming each item has a unique 'id' and 'name' property
        ))}
      </ul>
    </div>
    </div>
  );
}

export default App;





