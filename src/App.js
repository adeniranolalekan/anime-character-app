import React from 'react';
import {Route,Switch}from 'react-router-dom'
import Home from './containers/Home'
import AnimeArea from "./containers/AnimeArea"
import './asset/App.css';

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
