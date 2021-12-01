import logo from './logo.svg';
import './App.css';
import Card from './composants/card';
import Compteur from './composants/compteur';
import Horloge from './composants/horloge';
import { ThemeContext, themes } from './context/context'
import ThemedButton from './composants/ThemedButton';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';

function App() {
  const [theme, setTheme] = useState(true);
  function swap() {
    setTheme(!theme)

  }
  return (
    <div className="App">
      <ThemeContext.Provider value={{ theme, swap }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
