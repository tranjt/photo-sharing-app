import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles/materialize-grid.css'
import './App.css'


import LoginRegister from "./components/auth/LoginRegister";
import PhotoApp from "./components/PhotoApp";
import RequireAuth from "./components/auth/RequireAuth";
import Header from "./components/Header";

injectTapEventPlugin();

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div >
          <Header />
          <Switch>
            <Route exact path="/login-register" component={LoginRegister} />
            <Route path="/" component={RequireAuth(PhotoApp)} />
          </Switch>
        </div>
      </MuiThemeProvider>
    );
  }
}



export default App;
