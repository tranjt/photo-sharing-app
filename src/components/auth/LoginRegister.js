import React from "react";
import { connect } from "react-redux";
import { signinUser } from "../../actions/actions";

import LoginFormMUI from "../LoginFormMUI";
import '../../styles/bootstrap.min.css'
import '../../App.css'


class LoginRegister extends React.Component {

    componentWillMount() {
        if (this.props.authenticated) {
            this.props.history.push("/");
        }
    }

    componentWillUpdate(nextProps) {
        if (nextProps.authenticated) {
            this.props.history.push("/");
        }
    }

    handFormSubmit({ username, password }) {
        this.props.signinUser({ username, password });
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops!</strong> {this.props.errorMessage}
                </div>
            );
        }
    }

    render() {
        return (
            <LoginFormMUI onSubmit={this.handFormSubmit.bind(this)} errorMessage={this.props.errorMessage} />
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.users.authenticated,
        errorMessage: state.users.errorMessage
    };
}

export default connect(mapStateToProps, { signinUser })(LoginRegister);


