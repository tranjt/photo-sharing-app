import React, { Component } from 'react';
import { Route }  from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

injectTapEventPlugin();
// use list instead of card

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {    
    
    return (       
        <MuiThemeProvider>
          <div>
              <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                 style={{ position: "fixed" }}
              />
            <div style={{ display: 'flex', paddingTop: 64 }}>
              <Drawer  containerStyle={{height: 'calc(100% - 64px)',top: 64}} open={this.state.open}  docked={true}>
                <UserList />
              </Drawer>
              <div  style={{ flex: 1, padding: '10px', paddingLeft: "268px" }} >
                    
                    <Route                                     
                      path={"/users/:_id"}                
                      component={UserDetail}
                    />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}


export default App;