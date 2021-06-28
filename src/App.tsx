import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from './components/layout/homepage';
import Login from './components/auth/login';
import Header from './components/layout/header';
import Dashboard from './components/layout/dashboard';
import Register from './components/auth/register';
import Notifications from './components/layout/notifications';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/layout/PrivateRoute'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Notifications />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
