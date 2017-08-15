import React from "react";
const styles = {
  master: { flex: 1, padding: '10px', paddingLeft: "268px", background: "#f1f1f1", height: "90vh" },
  masterWrap: { display: 'flex', paddingTop: 64 },
  drawer: { height: 'calc(100% - 64px)', top: 64 },
  appBar: { position: "fixed" }
}

export default class LoginRegister extends React.Component {
    render() {
        return (
              <div style={styles.masterWrap}>
                <form action="">
                    <label htmlFor="">Username</label>
                    <input type="text" />
                    <label htmlFor="">Password</label>
                    <input type="text" />
                    <button>Login</button>
                </form>
            </div>
        );
    }
}