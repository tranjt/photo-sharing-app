import React, { Component } from 'react';
import { BrowserRouter, Route  }  from "react-router-dom";
import './styles/materialize-grid.css'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";

injectTapEventPlugin();
// use list instead of card

const im = {_id: "57231f1a30e4351f4e9f4bd7", first_name: "Ian", last_name: "Malcolm", 
             location: "Austin, TX", description: "Should've stayed in the car.", occupation: "Mathematician"};
const er = {_id: "57231f1a30e4351f4e9f4bd8", first_name: "Ellen", last_name: "Ripley", 
            location: "Nostromo", description: "Lvl 6 rating. Pilot.", occupation: "Warrant Officer"};
const pt = {_id: "57231f1a30e4351f4e9f4bd9", first_name: "Peregrin", last_name: "Took", 
            location: "Gondor", description: "Home is behind, the world ahead... " + 
            "And there are many paths to tread. Through shadow, to the edge of night, " + 
            "until the stars are all alight... Mist and shadow, cloud and shade, " + 
            "all shall fade... all... shall... fade... ", occupation: "Thain"};
const rk = {_id: "57231f1a30e4351f4e9f4bda", first_name: "Rey", last_name: "Kenobi", 
            location: "D'Qar", description: "Excited to be here!", occupation: "Rebel"};
const al = {_id: "57231f1a30e4351f4e9f4bdb", first_name: "April", last_name: "Ludgate", 
            location: "Pawnee, IN", description: "Witch", occupation: "Animal Control"};
const jo = {_id: "57231f1a30e4351f4e9f4bdc", first_name: "John", last_name: "Ousterhout",
            location: "Stanford, CA", description: "<i>CS142!</i>", occupation: "Professor"};


const tempUserList = [im, er, pt, rk, al, jo];




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {open: true};
  }

  render() {

    
    return (
      
      <BrowserRouter>   
        <MuiThemeProvider>
          <div>
              <AppBar
                title="Title"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                 style={{ position: "fixed" }}
              />
            <div style={{ display: 'flex', paddingTop: 64  }}>   
              
              <Drawer  containerStyle={{height: 'calc(100% - 64px)',top: 64}} open={this.state.open}  docked={true}>
                <UserList/>
              </Drawer>
              
              <div  style={{flex: 1, padding: '10px', paddingLeft: "268px" }} >             
               <Route 
                key={tempUserList[1]._id}               
                path={"/users/:_id"}                
                component={UserDetail}
                />
              </div>
              
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
      
    );
  }
}

export default App;
