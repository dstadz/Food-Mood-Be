import React from 'react';
import './App.css';
import { Hello } from './components/Hello'

function App() {
  return (
    <div className="App">
    <Hello compiler="TypeScript" framework="React" />,
    </div>
  );
}

export default App;
