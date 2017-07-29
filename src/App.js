import React, { Component } from 'react';
import { Route } from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import './styles/materialize-grid.css'

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhotos from "./components/UserPhotos";

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
          <div style={styles.masterWrap}>
            <Drawer
              containerStyle={styles.drawer}
              open={this.state.open}
              docked={true}
            >
              <UserList />
            </Drawer>
            <div style={styles.master} >
              <Route
                path={"/users/:_id"}
                component={UserDetail}
              />
              <Route
                path={"/photos/:_id"}
                component={UserPhotos}
              />
            </div>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


export default App;