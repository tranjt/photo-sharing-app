import React from "react";
import { Field, reduxForm } from 'redux-form'
import RaisedButton from 'material-ui/RaisedButton';
import '../styles/bootstrap.min.css'
import '../App.css'

import TextField from 'material-ui/TextField'
import { Card, CardActions } from 'material-ui/Card';
// import FlatButton from 'material-ui/FlatButton';

// const styles = {
//     master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
//     masterWrap: { paddingTop: 64 },
//     drawer: { height: 'calc(100% - 64px)', top: 64 },
//     appBar: { position: "fixed" }
// }


const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        minWidth: 300,
    },
    avatar: {
        margin: '1em',
        textAlign: 'center ',
    },
    form: {
        padding: '0 1em 1em 1em',
    },
    input: {
        display: 'flex',
    },
    hint: {
        textAlign: 'center',
        marginTop: '1em',
        color: '#ccc',
    },
    login: {
        textAlign: 'center',
        marginTop: '1em',
        
    },
};

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
  }) =>
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
        fullWidth
    />


class LoginFormMUI extends React.Component {

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

            <div style={{ ...styles.main }}>
                <Card style={styles.card}>

                    <form onSubmit={handleSubmit}>
                        <div style={styles.form}>
                            <h3 style={styles.login}>Please Login</h3>
                            <p style={styles.hint}>Hint: malcolm / weak</p>

                            <div style={styles.input} >
                                <Field
                                    name="username"
                                    component={renderTextField}
                                    label="Username"
                                />
                            </div>
                            <div style={styles.input}>
                                <Field
                                    name="password"
                                    component={renderTextField}
                                    type="password"
                                    label="Password"
                                />
                            </div>
                        </div>
                        <CardActions>
                            <RaisedButton type="submit" label="login" className="button-submit" primary={true} fullWidth />
                        </CardActions>
                    </form>
                </Card>

            </div>

        );
    }
}


// formProps are form fields values
function validate(values) {
    const errors = {};

    if (!values.username) {
        errors.username = "Please enter an username"
    }

    if (!values.password) {
        errors.password = "Please enter an password"
    }

    return errors;
}



export default reduxForm({
    form: "signin",
    validate
})(LoginFormMUI);


