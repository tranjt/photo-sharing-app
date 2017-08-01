import React from "react";
import { Card, CardTitle } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';

const styles = {
    card: {
        flex: 1,
        margin: '1em'
    }
}

export default function InfoCard(props) {
    return (
        <div style={styles.card}>
            <Card>
                <List>
                    <CardTitle title={`${props.user.first_name} ${props.user.last_name}`} />
                    <Divider />
                    <ListItem
                        primaryText="Location"
                        secondaryText={`${props.user.location}`}
                        disabled={true}
                    />
                    <ListItem
                        primaryText="Ocupation"
                        secondaryText={`${props.user.occupation}`}
                        disabled={true}
                    />
                </List>
            </Card>
        </div>
    );
}