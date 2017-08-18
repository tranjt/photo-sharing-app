import React from "react";
import { connect } from "react-redux";

export default function(CompesedComponent) {
    class Authentication extends React.Component { 

        componentWillMount() {
            if (!this.props.authenticated) {
                this.props.history.push("/login-register");
            }
        }

        componentWillUpdate(nextProps) {
             if (!nextProps.authenticated) {
                this.props.history.push("/login-register");
            }
        }

        render() {            
            return <CompesedComponent {...this.props} />
        }
    }
    function mapStateToProps(state) {
        return { authenticated: state.users.authenticated };
    }

    return connect(mapStateToProps)(Authentication);
}