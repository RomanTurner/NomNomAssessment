import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import PageContainer from './containers/PageContainer'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/nutrient-calculator'>
          <PageContainer />
        </Route>
        <Route path='*'>
          <Redirect to='/nutrient-calculator' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
