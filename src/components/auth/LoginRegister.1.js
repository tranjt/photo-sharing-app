import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from 'redux-form'
import { signinUser } from "../../actions/actions";
import RaisedButton from 'material-ui/RaisedButton';
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

    // handleSubmit(event) {
    //     event.preventDefault();
    //     this.props.signinUser({
    //         username: "Malcolm",
    //         password: "weak"
    //     });
    // }

    // render() {
    //     return (
    //         <div style={styles.masterWrap}>
    //             <form onSubmit={this.handleSubmit.bind(this)}>
    //                 <label htmlFor="">Username</label>
    //                 <input type="text" />
    //                 <label htmlFor="">Password</label>
    //                 <input type="text" />
    //                 <button>Login</button>
    //             </form>
    //         </div>
    //     );
    // }

    handFormSubmit({ username, password }) {
        console.log(username, password);
        // Need to do something to log user in
        // this.props.signinUser({ username, password });
                this.props.signinUser({
            username: "Malcolm",
            password: "weak"
        });
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
        // const { handleSubmit, fields: { username, password } } = this.props;
        const { handleSubmit, pristine, reset, submitting } = this.props

        // return (
        //     <div className="container loginForm">
        //         <div class="row">
        //             <div class="col-md-6 col-md-offset-3">
        //                 <form onSubmit={handleSubmit(this.handFormSubmit.bind(this))}>
        //                     <fieldset className="form-group">
        //                         <label> Username:</label>
        //                         <input {...username} className="form-control" />
        //                         {username.touched && username.error && <div className="error">{username.error}</div>}
        //                     </fieldset>
        //                     <fieldset className="form-group">
        //                         <label> Password:</label>
        //                         <input {...password} className="form-control" type="password" />
        //                         {password.touched && password.error && <div className="error">{password.error}</div>}
        //                     </fieldset>
        //                     {this.renderAlert()}
        //                     <button action="submit" className="btn btn-primary">Sign in</button>
        //                 </form>
        //             </div>
        //         </div>
        //     </div >
        // );




        return (
            <div className="container loginForm">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3">
                        <form onSubmit={handleSubmit(this.handFormSubmit.bind(this))}>
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

// export default connect(mapStateToProps, { signinUser })(LoginRegister);
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


// export default reduxForm({
//     form: "signin",
//     fields: ["username", "password"],
//     validate
// }, mapStateToProps, { signinUser })(LoginRegister);


export default reduxForm({
    form: "signin"
}, mapStateToProps, { signinUser })(LoginRegister);


