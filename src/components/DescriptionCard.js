import React from "react";
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

const styles = {
    card: {
        flex: 1,
        margin: '1em'
    }
}

export default function DescriptionCard(props) {
    return (
        <div style={styles.card}>
            <Card>
                <CardTitle title='Description' />
                <Divider />
                <CardText>
                    {`${props.user.description}`}
                </CardText>
            </Card>
        </div>
    );
}