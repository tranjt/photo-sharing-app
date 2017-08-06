import React from "react";
import { NavLink } from "react-router-dom";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import { getUsers } from "../actions/actions";
import { connect } from "react-redux";


class UserList extends React.Component {

    render() {
        
        const { users } = this.props;        

        return (
            <div>
                <Menu>
                    <MenuItem
                        exact={true}                        
                        primaryText={"Home"}                        
                        containerElement={<NavLink to={"/"} />}
                    />
                    {users.map(user => {
                        return (

                            <MenuItem
                                exact={true}
                                key={`${user._id}`}
                                primaryText={`${user.first_name}`}
                                leftIcon={<ActionAccountCircle />}
                                containerElement={<NavLink to={`/users/${user._id}`} />}
                            />
                        );
                    })}
                </Menu>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, { getUsers })(UserList);
