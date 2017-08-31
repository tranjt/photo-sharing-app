import React from "react";
import { Route, Switch } from "react-router-dom";
import Drawer from 'material-ui/Drawer';
import { connect } from "react-redux";

import UserList from "./UserList";
import UserDetail from "./UserDetail";
import UserPhotos from "./UserPhotos";
import Photo from "./Photo";
import UserCP from "./UserCP";


const styles = {
    master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
    masterWrap: { display: 'flex', paddingTop: 64 },
    drawer: { height: 'calc(100% - 64px)', top: 64 },
    appBar: { position: "fixed" }
}

class PhotoApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
    }

    render() {
        const { authUser } = this.props;
        return (
            <div style={styles.masterWrap}>
                <Drawer
                    containerStyle={styles.drawer}
                    open={this.state.open}
                    docked={true}
                >
                    <UserList />
                </Drawer>

                <div style={styles.master} >
                    <Switch>
                        <Route
                            exact path={`/users/:_id`}
                            component={UserDetail}
                        />
                        <Route
                            path={"/users/:_id/photo/:_id"}
                            component={Photo}
                        />
                        <Route
                            path={"/photos/:_id"}
                            component={UserPhotos}
                        />
                        <Route
                            render={() => <UserCP authUser={authUser} />}
                        />
                    </Switch>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authUser: state.users.authUser
    }
}

export default connect(mapStateToProps)(PhotoApp);