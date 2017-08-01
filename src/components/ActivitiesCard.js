import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import ImagePhotoLibrary from 'material-ui/svg-icons/image/photo-library';

const styles = {
    button: { 
        margin: 12 
    },
    card: {
        flex: 1,
        margin: '1em'
    }
}

export default function ActivitiesCard(props) {
    return (          
            <div style={styles.card}>
              <Card >
                <CardTitle title='Activities' subtitle='Card subtitle' />
                <CardActions>
                  <Link to={`/photos/${props.user._id}`}>
                    <RaisedButton
                      label="View Photos "
                      labelPosition="before"
                      primary={true}
                      icon={<ImagePhotoLibrary />}
                      style={styles.button}
                    />
                  </Link>
                </CardActions>
              </Card>
            </div>
    );
}