import React from "react";
import { Card } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    cardContainer: {
        display: 'flex',
        justifyContent: 'space-around'
    },
    cardFixedWith: {
        maxWidth: '80%',
        margin: "20px"
    },
    button: {
        margin: 12
    },
}

export default function customElements(props) {

    return (
        <div style={styles.cardContainer} >
            <Card style={styles.cardFixedWith} zDepth={2}>
                <form action="">
                    <textarea name="" id="" cols="60" rows="10" ></textarea>
                    <div>                        
                        <RaisedButton
                            label="Post Comment"
                            labelPosition="before"
                            primary={true}
                            style={styles.button}
                        />
                    </div>
                </form>
            </Card>
        </div>
    );
}