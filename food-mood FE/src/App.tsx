import React from 'react'
import { Route } from 'react-router-dom'

import './App.css';
import { Hello } from './components/Hello'
import LandingPage from './components/LandingPage'

function App() {
  return (
    <div className="App">
    <Hello compiler="TypeScript" framework="React" />
    <LandingPage text='hello ' />
    </div>
  );
}

export default App;
