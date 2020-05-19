import React from 'react';
import {Route,Switch}from 'react-router-dom'
import Home from './Home'
import AnimeArea from "./AnimeArea"
import './App.css';

function App() {
  return (
    <div className="App">
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path={"/anime/:id"} component={AnimeArea}/>
        </Switch>
    </div>
  );
}

export default App;
