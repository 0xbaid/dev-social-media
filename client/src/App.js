import React, { Fragment, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Alert from './components/layout/Alert';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/profile-forms/CreateProfile';
import EditProfile from './components/profile-forms/EditProfile';
import AddExperience from './components/profile-forms/AddExperience';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import PrivateRouting from './components/routing/PrivateRouting';

//Redux
import store from './redux/store';
import { loadUser } from './redux/auth/auth.action';
import setAuthToken from './redux/auth/auth.utils';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Alert />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRouting exact path="/dashboard" component={Dashboard} />
            <PrivateRouting
              exact
              path="/create-profile"
              component={CreateProfile}
            />
            <PrivateRouting
              exact
              path="/edit-profile"
              component={EditProfile}
            />
            <PrivateRouting
              exact
              path="/add-experience"
              component={AddExperience}
            />
          </Switch>
        </section>
      </Fragment>
    </Router>
  );
};
export default App;
