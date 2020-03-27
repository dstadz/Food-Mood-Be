import React from 'react'
import { Route } from 'react-router-dom'
import Counter from './components/Counter'

import './App.css';
import { Hello } from './components/Hello'
import LandingPage from './components/LandingPage'

const App: React.FC = () => (
  <div className="App">
  <Hello compiler="TypeScript" framework="React" />
  <LandingPage text='hello ' />
  <Counter>
    {({ count, setCount }) => (
      <div>
        {count}
        <button onClick={()=> setCount(count+1)}>+</button>
      </div>
    )}
  </Counter>
  </div>
);


export default App;
