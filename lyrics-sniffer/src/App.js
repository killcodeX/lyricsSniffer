import React from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Nav from './components/layouts/nav';
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Nav />
      </React.Fragment>
    </Router>
  );
}

export default App;
