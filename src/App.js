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
             <Route exact path="/" component={Home} />
             <Route path="/chronometer"  component={Chronometer}/>
            </section>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
