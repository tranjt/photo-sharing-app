import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import './styles/materialize-grid.css'
import './App.css'


import LoginRegister from "./components/auth/LoginRegister";
import PhotoApp from "./components/PhotoApp";
import RequireAuth from "./components/auth/RequireAuth";

injectTapEventPlugin();

const styles = {
  master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
  masterWrap: { display: 'flex', paddingTop: 64 },
  drawer: { height: 'calc(100% - 64px)', top: 64 },
  appBar: { position: "fixed" }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  render() {

    return (
      <MuiThemeProvider>
        <div >
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            style={styles.appBar}
          />
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
