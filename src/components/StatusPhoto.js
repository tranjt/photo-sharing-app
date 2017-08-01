import React from "react";
import { Card, CardTitle, CardMedia } from 'material-ui/Card';

const styles = {
    cardFixedWith: {
        width: '350px',
        margin: "20px"
    }
}

export default function StatusPhoto(props) {

    return (
        <div>
            <Card style={styles.cardFixedWith} zDepth={2}>
                <CardMedia overlay={<CardTitle title={props.statusText} />} >
                    <img src="https://upload.wikimedia.org/wikipedia/en/3/32/Ben_Kenobi.png" alt="" />
                </CardMedia>
            </Card>
        </div>
    );
}