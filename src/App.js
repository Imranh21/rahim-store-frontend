import React, { useState, useEffect } from 'react'
import './App.css';
import Context from './context/Context';
import {BrowserRouter} from "react-router-dom"
import Router from './Router';
import Nav from './components/Nav';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Context>
          <Nav />
          <Router />
        </Context>
      </BrowserRouter>
    </div>
  );
}

export default App;
