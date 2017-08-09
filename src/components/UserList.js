import React from "react";
import { NavLink } from "react-router-dom";
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle";
import { connect } from "react-redux";
import { getUsers } from "../actions/actions";
class UserList extends React.Component {

    componentWillMount() {
        this.props.getUsers();
    }

    render() {

        const { users } = this.props;

        return (
            <div>
                <Menu>
                    {/* change to login user once session implemented */}
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
        // remove login user from users all, add extra for login user in reducer?     
        // login user still needed for photodetails    
        users: state.users.all
    }
}

export default connect(mapStateToProps, { getUsers })(UserList);
