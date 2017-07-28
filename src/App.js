import React, { Component } from 'react';
import { Route }  from "react-router-dom";
import { connect } from "react-redux";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import { getUsers } from "./actions/action";

injectTapEventPlugin();
// use list instead of card



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const users = this.props.users;
    
    return (       
        <MuiThemeProvider>
          <div>
              <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                 style={{ position: "fixed" }}
              />
            <div style={{ display: 'flex', paddingTop: 64  }}>   
              
              <Drawer  containerStyle={{height: 'calc(100% - 64px)',top: 64}} open={this.state.open}  docked={true}>
                <UserList users={users}/>
              </Drawer>
              
              <div  style={{flex: 1, padding: '10px', paddingLeft: "268px" }} >             
                {users.map(user => {
                  return (
                    <Route 
                      key={user._id}               
                      path={"/users/:_id"}                
                      component={UserDetail}
                    />
                  );
                })}

              </div>
              
            </div>
          </div>
        </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, { getUsers })(App);