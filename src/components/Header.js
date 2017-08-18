import React from "react";
import AppBar from 'material-ui/AppBar';
import { connect } from "react-redux";
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";
import { unauthUser } from "../actions/actions";

const styles = {
    appBar: { position: "fixed" }
}

class Header extends React.Component {

    renderAppBar() {
        const { authUser, unauthUser } = this.props;

        if (!authUser) {
            return (
                <AppBar
                    title="Photo App"
                    style={styles.appBar}
                    iconElementRight={
                        <FlatButton label="Login"
                            containerElement={<Link to="/login-register" />}
                        />}
                />
            );
        }

        return (
            <AppBar
                title={authUser.login_name}
                style={styles.appBar}
                iconElementRight={
                    <FlatButton label="Logout"
                        onClick={() => { unauthUser(); }}
                    />}
            />
        );

    }

    render() {
        return (
            <div>
                {this.renderAppBar()}
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        authUser: state.users.authUser
    }
}

export default connect(mapStateToProps, { unauthUser })(Header);