import React, { Component } from 'react';
import { Route }  from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import './styles/materialize-grid.css'

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhoto from "./components/UserPhoto";


injectTapEventPlugin();
// use list instead of card

const style = {
  master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1",  height: "90vh" },
  drawer: {height: 'calc(100% - 64px)',top: 64},
  appBar: { position: "fixed" }
}


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {    
    
    return (       
        <MuiThemeProvider>
          <div >
              <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                style={style.appBar}
              />
            <div style={{ display: 'flex', paddingTop: 64 }}>
              <Drawer  
                containerStyle={style.drawer} 
                open={this.state.open}  
                docked={true}
              >
                <UserList />
              </Drawer>
              <div  style={style.master} >
                    <Route                            
                      path={"/users/:_id"}                
                      component={UserDetail}
                    />
                    <Route                             
                      path={"/photos/:_id"}                
                      component={UserPhoto}
                    />
              </div>
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}


export default App;