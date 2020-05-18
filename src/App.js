import React from 'react';
import {Route}from 'react-router-dom'
import Home from './Home'
import AnimeArea from "./AnimeArea"
import './App.css';

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={Home}/>
        <Route exact path={"/animes/:id"} component={AnimeArea}/>
    </div>
  );
}

export default App;
