import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Chronometer from './pages/Chronometer';
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <section className="App-header">
             <Route exact path="/" render={ () => <Home setTimeMinutes={ this.setTimeMinutes } setTimeSeconds={ this.setTimeSeconds}/> } />
             <Route path="/chronometer" render = { () => <Chronometer minutes={ minutes } seconds={ seconds } turnOff={ this.turnOff }/> } />
            </section>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
