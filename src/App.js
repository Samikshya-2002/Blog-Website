// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import PostAbout from "./Pages/PostAbout";

function App() {
  return (
    <div >
      <Router>
      {/* className="App"> */}
      <Routes>
      <Route path='/' element={<Home />} />
      {/* <Route path='/posts/:postId' element={<PostAbout />} /> */}
      <Route path='/posts' element={<PostAbout />} />

      </Routes>
      </Router>
    </div>
    
  );
}

export default App;



// eslint-disable-next-line

/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */