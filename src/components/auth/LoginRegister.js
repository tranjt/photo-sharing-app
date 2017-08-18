import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { signinUser } from "../../actions/actions";
import RaisedButton from 'material-ui/RaisedButton';
import LoginForm from "../LoginForm";
import '../../styles/bootstrap.min.css'
import '../../App.css'
const styles = {
    master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
    masterWrap: { paddingTop: 64 },
    drawer: { height: 'calc(100% - 64px)', top: 64 },
    appBar: { position: "fixed" }
}


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
        console.log(username, password);
        // Need to do something to log user in
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
            <div className="container loginForm">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <LoginForm  onSubmit={this.handFormSubmit.bind(this)} />
                    </div>
                </div>
            </div >
        );
    }
}

function mapStateToProps(state) {
    return {
        authenticated: state.users.authenticated,
        errorMessage: state.users.error
    };
}

function validate(formProps) {
    const errors = {};

    if (!formProps.username) {
        errors.username = "Please enter an username"
    }

    if (!formProps.password) {
        errors.password = "Please enter an password"
    }

    return errors;
}

export default connect( mapStateToProps, { signinUser })(LoginRegister);


