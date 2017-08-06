import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import './styles/materialize-grid.css'
import './App.css'

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhotos from "./components/UserPhotos";
import Photo from "./components/Photo";
import Dashboard from "./components/Dashboard";

injectTapEventPlugin();

const styles = {
  master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
  masterWrap: { display: 'flex', paddingTop: 64 },
  drawer: { height: 'calc(100% - 64px)', top: 64 },
  appBar: { position: "fixed" }
}

// temp auth user
var user = {
  _id: "57231f1a30e4351f4e9f4bd7", first_name: "Ian", last_name: "Malcolm",
  location: "Austin, TX", description: "Should've stayed in the car.", occupation: "Mathematician"
};

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
          <div style={styles.masterWrap}>
            <Drawer
              containerStyle={styles.drawer}
              open={this.state.open}
              docked={true}
            >
              <UserList />
            </Drawer>
            <div style={styles.master} >
              <Switch>
                <Route
                  exact path={"/users/:_id"}
                  component={UserDetail}
                />
                <Route
                  path={"/users/:_id/photo/:_id"}
                  component={Photo}
                />
                <Route
                  path={"/photos/:_id"}
                  component={UserPhotos}
                />
                <Route
                  render={() => <Dashboard user={user} />}
                />
              </Switch>

            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;
