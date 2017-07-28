import React from "react";
import { NavLink }  from "react-router-dom";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";



class UserList extends React.Component {
    
    
    render() { 
        const users = this.props.users;

        return (
            <div>
                 <Menu>
                     {users.map(user => {
                        return (                            
                            <MenuItem  
                                key={`${user._id}`}
                                primaryText={`${user.first_name}`} 
                                leftIcon={<ActionAccountCircle />} 
                                containerElement={<NavLink to={`/users/${user._id}`} activeStyle={{ color: "green"}}/>} 
                            />
                        );
                     })}                    
                     
                 </Menu>


            </div>
        );
    }
}

export default UserList;

