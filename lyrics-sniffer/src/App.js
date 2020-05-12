import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from './components/layouts/nav';
import Index from './components/layouts/index';
import './App.css';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Nav />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Index}></Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

export default App;
