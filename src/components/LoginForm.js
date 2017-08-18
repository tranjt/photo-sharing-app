import React from "react";
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/bootstrap.min.css'
import '../App.css'
const styles = {
    master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
    masterWrap: { paddingTop: 64 },
    drawer: { height: 'calc(100% - 64px)', top: 64 },
    appBar: { position: "fixed" }
}


class LoginForm extends React.Component {

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

        const { handleSubmit } = this.props

        return (
            <form onSubmit={handleSubmit}>
                <Field component="input"
                    name="Username"
                    id="username"
                    type="text"
                    placeholder="Username"
                    className="form-control"
                />
                <Field component="input"
                    name="password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    className="form-control"
                />
                {this.renderAlert()}
                <RaisedButton type="submit" label="login" className="button-submit" primary={true} />
            </form>

        );
    }
}


// formProps are form fields values
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



export default reduxForm({
    form: "signin"
})(LoginForm);


