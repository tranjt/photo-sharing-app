import React from "react";
import { NavLink, Link }  from "react-router-dom";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";



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

class UserList extends React.Component {
    

    render() {        
        return (
            <div>
                 <Menu>

                     {tempUserList.map(user => {
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

/**
 * 
 * <NavLink 
                                to={`/users/${user._id}`} 
                                activeClassName='active'
                                key={`${user._id}`}
                                
                            >
                                <ListItem 
                                    primaryText={`${user.first_name}`} 
                                    leftIcon={<ActionAccountCircle />} 
                                />
                            </NavLink>
 */