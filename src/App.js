import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Chronometer from './pages/Chronometer.js';
import Home from './pages/Home'

function App() {
  return (
      <Switch>
          <Route exact path="/pomodoro" component={Home} />
          <Route path="/pomodoro/chronometer"  component={Chronometer}/>
      </Switch>
  );
}

export default App;
