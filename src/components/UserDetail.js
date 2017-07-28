import React from "react";
import { connect } from "react-redux";
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

class UserDetail extends React.Component { 

    render() {      
        
        const { user } = this.props;

        if (!user) {
            return <div>Loading...</div>
        } 
          console.log(user);
        return (

             <Card>
                <CardHeader
                  title={`${user.first_name} ${user.last_name}`}
                  subtitle="Detail page"
                  avatar="http://www.material-ui.com/images/jsa-128.jpg"
                />
        
          
 <CardText>
<div style={{ display: 'flex' }}>   

  <div  style={{flex: 1, margin: '1em' }}>
            <Card >
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
      </div>

  <div  style={{flex: 1, margin: '1em'}}>
            <Card>
              <CardTitle title='Description'  />
              <CardText>
                {`${user.description}`}
              </CardText>
            </Card>
      </div>


      

  <div  style={{flex: 1, margin: '1em'}}>
    <Card>
               <List>
                <CardTitle title={`${user.first_name} ${user.last_name}`} />
                <Divider />                           
                <ListItem
                  primaryText="Location"
                  secondaryText={`${user.location}`}
                  disabled={true}
                />
                <ListItem
                  primaryText="Ocupation"
                  secondaryText={`${user.occupation}`}
                  disabled={true}
                />

              </List>
  </Card>
      </div>   



  </div>
 </CardText>


<div style={{ display: 'flex', justifyContent: 'space-around' }}>   


            <Card style={{ width: '350px', margin: "20px" }}>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
     

            <Card style={{ width: '350px',  margin: "20px"}}>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
 


            <Card style={{ width: '350px', margin: "20px" }}>
              <CardTitle title='Card title' subtitle='Card subtitle' />
              <CardText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam
                sed pellentesque. Aliquam dui mauris, mattis quis lacus id,
                pellentesque lobortis odio.
              </CardText>
            </Card>
                </div>

 

              </Card>

        );
    }

}

function mapStateToProps(state, props) {
  if (props.match.params._id) {
    return {
      user: state.users.find(user => user._id === props.match.params._id)
    }
  }  
}

export default connect(mapStateToProps)(UserDetail);

