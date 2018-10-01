import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './routes/home/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Home}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
