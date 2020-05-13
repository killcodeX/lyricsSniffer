import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Nav from './components/layouts/nav';
import Index from './components/layouts/index';
import './App.css';
import { Provider } from './context';

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Nav />
          <div className='section'>
            <div className='container'>
              <Switch>
                <Route exact path='/' component={Index}></Route>
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
