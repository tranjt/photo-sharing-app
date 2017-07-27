import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Link }  from "react-router-dom";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Toolbar } from 'material-ui/Toolbar';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


injectTapEventPlugin();

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
                <MenuItem>Menu Item</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
              </Drawer>
              
              <div  style={{padding: '10px', paddingLeft: "268px"  }} >
                <Card style={{ width: "90%"}} >
                <CardHeader
                  title="URL Avatar"
                  subtitle="Subtitle"
                  avatar="http://www.material-ui.com/images/jsa-128.jpg"
                />
                <CardMedia
                  overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/Red_Mountain_Pass.jpg" alt="" style={{ }}/>
                </CardMedia>
                <CardTitle title="Card title" subtitle="Card subtitle" />
                <CardText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                  Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                  Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
                <CardActions>
                  <FlatButton label="Action1" />
                  <FlatButton label="Action2" />
                </CardActions>
              </Card>
              </div>
            </div>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
      
    );
  }
}

export default App;
