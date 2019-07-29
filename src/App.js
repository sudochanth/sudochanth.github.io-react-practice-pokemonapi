import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/layout/NavBar';

import './App.css';
import Dashboard from './components/layout/Dashboard';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="container">
        <Dashboard />
      </div>
    </div>
  )
}

export default App;