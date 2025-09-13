import React, { useState } from 'react';
import Homepage from './components/templates/Homepage';
import { DesignSystem } from './components/pages';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState<'homepage' | 'design-system'>('homepage');

  return (
    <div className="App">
      <nav className="app-nav">
        <button
          className={`nav-button ${currentPage === 'homepage' ? 'active' : ''}`}
          onClick={() => setCurrentPage('homepage')}
        >
          Homepage
        </button>
        <button
          className={`nav-button ${currentPage === 'design-system' ? 'active' : ''}`}
          onClick={() => setCurrentPage('design-system')}
        >
          Design System
        </button>
      </nav>

      {currentPage === 'homepage' && <Homepage />}
      {currentPage === 'design-system' && <DesignSystem />}
    </div>
  );
}

export default App;
