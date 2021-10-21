import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Chronometer from './pages/Chronometer.js';
import Home from './pages/Home'

function App() {
  return (
      <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chronometer"  component={Chronometer}/>
      </Switch>
  );
}

export default App;
